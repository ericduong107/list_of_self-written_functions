# Hướng dẫn tạo và xây dựng giao diện từ code json_translate:

## Vấn đề

### `json_translateVietnameseToEnglish.py`
```python name=json_translateVietnameseToEnglish.py
import json
from deep_translator import GoogleTranslator

def translate_json(input_path, output_path, source_lang='vi', target_lang='en'):
  with open(input_path, 'r', encoding='utf-8') as f:
    data = json.load(f)

  translated_data = {}
  indexKey = 0
  for key, value in data.items():
    if isinstance(value, str):
      try:
        translated = GoogleTranslator(source=source_lang, target=target_lang).translate(value)
        # print(f"{indexKey}. Translate key \"{key}\": \"{value}\"")
        indexKey += 1
        translated_data[key] = translated
        print(f"{indexKey}. Translated key \"{key}\": \"{translated}\"")
      except Exception as e:
        print(f"Error translating key '{key}': {e}")
        translated_data[key] = value
    else:
      translated_data[key] = value

  with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(translated_data, f, ensure_ascii=False, indent=2)

# Ví dụ chạy
translate_json('input.json', 'output.json')
```

- Dựa trên code python này
- Làm một giao diện web có 2 bên ô nhập gồm input json và output json và một nút bấm chuyển đổi
- Thêm lệnh build để deploy lên github
- Cho thêm 2 dropdown menu để chọn ngôn ngữ chuyển cho 2 ô nhập

## Copilot AI đã giải quyết

Tôi đã tạo một ứng dụng web nhỏ (Flask + frontend JS) dựa trên script Python bạn cung cấp. Ứng dụng có giao diện 2 ô (input JSON, output JSON), 2 dropdown để chọn ngôn ngữ nguồn/đích, và một nút để chuyển đổi. Tôi cũng thêm Dockerfile, Makefile và một workflow GitHub Actions để "build" (tạo image Docker và đẩy lên GitHub Container Registry) — bạn có thể dùng workflow này làm bước deploy lên GitHub (hoặc thay đổi để deploy tới dịch vụ khác).

Dưới đây là các file cần thiết.

### `app.py`
```python name=app.py
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
```

### `requirements.txt`
```text name=requirements.txt
Flask>=2.0.0
deep-translator>=1.8.0
```

### `README.md`
````markdown name=README.md
# JSON Translator (Flask + GoogleTranslator)

Ứng dụng web nhỏ để dịch nội dung JSON (dịch các giá trị kiểu chuỗi) bằng deep_translator.GoogleTranslator.

Chức năng:
- Giao diện 2 ô: input JSON và output JSON
- 2 dropdown để chọn source/target language
- Nút chuyển đổi để gửi JSON lên backend Python (Flask) để dịch
- Dockerfile + Makefile + GitHub Actions workflow để build image và đẩy lên GitHub Container Registry

Run locally:
1. Tạo virtualenv và cài dependencies:
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt

2. Chạy:
   python app.py

3. Mở http://localhost:5000

Build & Publish (Docker + GitHub Container Registry):
- Makefile có target `build` (tham số REPO, TAG). Ví dụ:
  make build REPO=ghcr.io/<OWNER>/<REPO> TAG=latest

- Workflow GitHub Actions (.github/workflows/docker-publish.yml) sẽ build image và push khi push lên nhánh main.

Lưu ý:
- deep_translator dùng API công khai (Google web translate); có thể bị giới hạn.
- Bạn có thể tùy chỉnh danh sách ngôn ngữ ở templates/index.html nếu cần.
````

### `Dockerfile`
```dockerfile name=Dockerfile
FROM python:3.11-slim

WORKDIR /app

# copy files
COPY . /app

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000

CMD ["python", "app.py"]
```

### `Makefile`
```makefile name=Makefile
# Usage:
# make build REPO=ghcr.io/<OWNER>/<REPO> TAG=latest
REPO ?= ghcr.io/owner/repo
TAG ?= latest

build:
	docker build -t $(REPO):$(TAG) .
	docker push $(REPO):$(TAG)
```

### `templates/index.html`
```html name=templates/index.html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>JSON Translator</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font-family: Arial, sans-serif; margin: 20px; }
      .container { display: flex; gap: 20px; }
      .box { flex: 1; display: flex; flex-direction: column; }
      textarea { width: 100%; height: 400px; font-family: monospace; font-size: 14px; padding: 10px; }
      select, button { margin-top: 10px; padding: 8px; }
      .controls { display: flex; gap: 10px; align-items: center; }
    </style>
  </head>
  <body>
    <h1>JSON Translator</h1>
    <div class="controls">
      <label>Source:
        <select id="sourceLang"></select>
      </label>
      <label>Target:
        <select id="targetLang"></select>
      </label>
      <button id="translateBtn">Translate</button>
      <button id="prettyBtn">Pretty Input</button>
    </div>

    <div class="container">
      <div class="box">
        <h3>Input JSON</h3>
        <textarea id="inputArea" placeholder='{"key":"value", ...}'></textarea>
      </div>
      <div class="box">
        <h3>Output JSON</h3>
        <textarea id="outputArea" readonly></textarea>
      </div>
    </div>

    <script src="/static/app.js"></script>
  </body>
</html>
```

### `static/app.js`
```javascript name=static/app.js
const LANGS = {
  "auto": "Auto-detect",
  "en": "English",
  "vi": "Vietnamese",
  "fr": "French",
  "de": "German",
  "es": "Spanish",
  "zh-CN": "Chinese (Simplified)",
  "ja": "Japanese",
  "ko": "Korean",
  "ru": "Russian",
  "it": "Italian",
  "pt": "Portuguese"
};

function populateSelect(id, selected) {
  const sel = document.getElementById(id);
  Object.entries(LANGS).forEach(([code, name]) => {
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = `${name} (${code})`;
    if (code === selected) opt.selected = true;
    sel.appendChild(opt);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateSelect("sourceLang", "vi");
  populateSelect("targetLang", "en");

  const translateBtn = document.getElementById("translateBtn");
  const prettyBtn = document.getElementById("prettyBtn");
  const inputArea = document.getElementById("inputArea");
  const outputArea = document.getElementById("outputArea");

  translateBtn.addEventListener("click", async () => {
    const inputText = inputArea.value.trim();
    if (!inputText) {
      alert("Please paste JSON into the input area.");
      return;
    }

    let parsed;
    try {
      parsed = JSON.parse(inputText);
    } catch (e) {
      if (!confirm("Input is not valid JSON. Do you want to send raw string to translate?")) {
        return;
      }
    }

    const payload = {
      input_text: inputText,
      source_lang: document.getElementById("sourceLang").value,
      target_lang: document.getElementById("targetLang").value
    };

    translateBtn.disabled = true;
    translateBtn.textContent = "Translating...";

    try {
      const res = await fetch("/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (res.ok) {
        outputArea.value = JSON.stringify(data.translated, null, 2);
      } else {
        outputArea.value = JSON.stringify(data, null, 2);
      }
    } catch (err) {
      outputArea.value = `Error: ${err}`;
    } finally {
      translateBtn.disabled = false;
      translateBtn.textContent = "Translate";
    }
  });

  prettyBtn.addEventListener("click", () => {
    try {
      const parsed = JSON.parse(inputArea.value);
      inputArea.value = JSON.stringify(parsed, null, 2);
    } catch (e) {
      alert("Invalid JSON");
    }
  });
});
```

### `.github/workflows/docker-publish.yml`
```yaml name=.github/workflows/docker-publish.yml
name: Build and Publish Docker image

on:
  push:
    branches:
      - main

jobs:
  build-and-push:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up QEMU
        uses: docker/setup-qemu-action@v3

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v3

      - name: Log in to GitHub Container Registry
        uses: docker/login-action@v3
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: ghcr.io/${{ github.repository_owner }}/${{ github.event.repository.name }}:latest
```

Giải thích ngắn:
- Frontend (templates/index.html + static/app.js) cung cấp 2 ô văn bản và 2 dropdown (source/target).
- Backend (app.py) nhận input JSON (chuỗi trong trường input_text), parse JSON, dịch đệ quy tất cả giá trị chuỗi trong JSON (giữ nguyên số/bool/null), trả về JSON dịch.
- Dockerfile để đóng gói app.
- Makefile chứa `build` để build/push image docker.
- Workflow GitHub Actions để tự động build & push image lên GitHub Container Registry khi push lên main.

Gợi ý tiếp theo (nếu bạn muốn):
- Muốn deploy static-only trên GitHub Pages? Ta cần tách giao diện (frontend) ra site tĩnh và dùng public translate API từ browser (lưu ý bảo mật).
- Muốn deploy backend (Flask) tự động tới một host (Heroku, Render, Railway)? Tôi có thể chỉnh workflow để tự deploy tới dịch vụ đó.
- Muốn mở rộng để dịch chỉ các giá trị của những key nhất định hoặc bảo toàn những chuỗi template (ví dụ {name})? Tôi có thể thêm tuỳ chọn.

Bạn muốn tôi tạo pull request với các file này lên repo của bạn (ericduong107/...), hoặc chỉnh sửa để hỗ trợ nested translation theo cách khác không?