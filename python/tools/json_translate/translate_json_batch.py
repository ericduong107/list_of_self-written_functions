import json
import time
from deep_translator import GoogleTranslator

def translate_json_batch(input_path, output_path, source_lang='vi', target_lang='en', batch_size=10, delay=2):
    # Đọc file JSON gốc
    with open(input_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    keys_to_translate = []
    texts_to_translate = []

    # CHỈ LẤY VALUE LÀ STRING ĐỂ DỊCH, GIỮ NGUYÊN KEY
    for key, value in data.items():
        if isinstance(value, str) and value.strip():
            keys_to_translate.append(key)
            texts_to_translate.append(value)

    translated_data = data.copy()
    translator = GoogleTranslator(source=source_lang, target=target_lang)

    total_texts = len(texts_to_translate)
    print(f"Tổng số value cần dịch: {total_texts}. Đang tiến hành dịch theo lô (batch)...")

    # Chia nhỏ thành các batch để tránh bị Google chặn do gửi quá dài
    for i in range(0, total_texts, batch_size):
        batch_keys = keys_to_translate[i:i + batch_size]
        batch_texts = texts_to_translate[i:i + batch_size]

        try:
            print(f"Đang dịch batch từ {i+1} đến {min(i + batch_size, total_texts)}...")
            # Dịch hàng loạt danh sách các value
            translated_batch = translator.translate_batch(batch_texts)

            # Gắn value đã dịch vào lại key tương ứng (KHÔNG ĐỔI KEY)
            for key, translated_text in zip(batch_keys, translated_batch):
                translated_data[key] = translated_text

            # Nghỉ giữa các batch để bảo vệ IP
            time.sleep(delay)

        except Exception as e:
            print(f"Lỗi khi dịch batch từ vị trí {i}: {e}")

    # Ghi ra file JSON kết quả (Key giữ nguyên, chỉ có các value được dịch)
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(translated_data, f, ensure_ascii=False, indent=2)
    
    print(f"Đã hoàn tất! Kết quả được lưu tại {output_path}")

# Ví dụ chạy:
print('Tiếng Anh (Batch Mode - Chỉ dịch Value)')
translate_json_batch('input_vi.json', 'output_en.json', source_lang='vi', target_lang='en')