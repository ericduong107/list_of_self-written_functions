import json
from deep_translator import GoogleTranslator

def translate_json(input_path, output_path, source_lang='vi', target_lang='en'):
    with open(input_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    translated_data = {}
    for key, value in data.items():
        if isinstance(value, str):
            try:
                translated = GoogleTranslator(source=source_lang, target=target_lang).translate(value)
                print(f"Translate key '{key}': {value}")
                translated_data[key] = translated
            except Exception as e:
                print(f"Error translating key '{key}': {e}")
                translated_data[key] = value
        else:
            translated_data[key] = value

    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, ensure_ascii=False, indent=2)

# Ví dụ chạy
translate_json('input.json', 'output.json')
