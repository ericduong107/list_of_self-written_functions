from flask import Flask, render_template, request, jsonify
import json
from deep_translator import GoogleTranslator

app = Flask(__name__, static_folder="static", template_folder="templates")


def translate_value(val, source_lang, target_lang):
  try:
    return GoogleTranslator(source=source_lang, target=target_lang).translate(val)
  except Exception as e:
    # nếu lỗi, trả về nguyên bản và thêm thông tin lỗi vào log (ở đây chỉ in)
    print(f"Translation error for value {val!r}: {e}")
    return val


def translate_json_data(data, source_lang, target_lang):
  # Duyệt đệ quy qua dict / list, chỉ dịch khi gặp str
  if isinstance(data, str):
    return translate_value(data, source_lang, target_lang)
  elif isinstance(data, dict):
    out = {}
    for k, v in data.items():
      out[k] = translate_json_data(v, source_lang, target_lang)
    return out
  elif isinstance(data, list):
    return [translate_json_data(item, source_lang, target_lang) for item in data]
  else:
    # số, bool, None, ... giữ nguyên
    return data


@app.route("/")
def index():
  return render_template("index.html")


@app.route("/translate", methods=["POST"])
def translate():
  payload = request.get_json()
  if not payload:
    return jsonify({"error": "Missing JSON body"}), 400

  input_text = payload.get("input_text", "")
  source_lang = payload.get("source_lang", "vi")
  target_lang = payload.get("target_lang", "en")

  try:
    data = json.loads(input_text)
  except Exception as e:
    return jsonify({"error": f"Invalid JSON input: {e}"}), 400

  translated = translate_json_data(data, source_lang, target_lang)
  return jsonify({"translated": translated})


if __name__ == "__main__":
  app.run(host="0.0.0.0", port=5000, debug=True)