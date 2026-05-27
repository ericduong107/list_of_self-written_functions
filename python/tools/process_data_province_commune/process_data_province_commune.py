import json
import re
import unicodedata
from deep_translator import GoogleTranslator

def generate_slug(text):
    """
    Hàm chuyển đổi tiếng Việt có dấu thành slug không dấu (ví dụ: "Xã Dương Minh Châu" -> "xa-duong-minh-chau")
    """
    if not text:
        return ""
    # Chuyển sang chữ thường
    text = text.lower()
    # Chuẩn hóa Unicode để tách dấu ra khỏi chữ cái gốc
    text = unicodedata.normalize('NFKD', text)
    # Loại bỏ các ký tự dấu sau khi tách
    text = ''.join([c for c in text if not unicodedata.combining(c)])
    # Thay thế chữ đ/Đ thành d
    text = text.replace('đ', 'd')
    # Loại bỏ ký tự đặc biệt, chỉ giữ lại chữ cái, số và khoảng trắng
    text = re.sub(r'[^a-z0-9\s-]', '', text)
    # Thay thế khoảng trắng và nhiều dấu gạch ngang liên tiếp thành một dấu gạch ngang duy nhất
    text = re.sub(r'[\s-]+', '-', text).strip('-')
    return text

def process_administrative_json(input_path, output_path, source_lang='vi', target_lang='en'):
    # Đọc file JSON (Dữ liệu đầu vào dạng Mảng các Object)
    with open(input_path, 'r', encoding='utf-8') as f:
        data_list = json.load(f)

    # Nếu dữ liệu là 1 object đơn lẻ, ta bọc nó vào list để xử lý chung logic
    if isinstance(data_list, dict):
        data_list = [data_list]

    processed_data = []
    
    for index, item in enumerate(data_list):
        print(f"--- Đang xử lý item {index + 1}/{len(data_list)}: {item.get('name')} ---")
        
        # 1. Thêm field slug dựa trên field "name"
        if "name" in item:
            item["slug"] = generate_slug(item["name"])
        
        # 2. Dịch tên sang tiếng Anh và cập nhật vào "englishName"
        # Chỉ dịch nếu englishName đang trống hoặc chưa có
        if "name" in item and (not item.get("englishName")):
            try:
                translated = GoogleTranslator(source=source_lang, target=target_lang).translate(item["name"])
                item["englishName"] = translated
                print(f"   -> Đã dịch englishName: {translated}")
            except Exception as e:
                print(f"   -> Lỗi khi dịch '{item['name']}': {e}")
                item["englishName"] = "" # Hoặc giữ nguyên tùy bạn
                
        processed_data.append(item)

    # Ghi lại kết quả ra file mới
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(processed_data, f, ensure_ascii=False, indent=2)
    print(f"\n Hoàn thành! Đã ghi file kết quả tại: {output_path}")

# ==========================================
# VÍ DỤ CHẠY THỬ
# ==========================================
# Giả sử bạn chạy hàm này với dữ liệu đầu vào của bạn
# if __name__ == "__main__":
#     # Tạo file test giả lập dữ liệu của bạn
#     test_data = [
#       {
#         "code": "25552",
#         "name": "Xã Dương Minh Châu",
#         "englishName": "",
#         "administrativeLevel": "Xã",
#         "provinceCode": "80",
#         "provinceName": "Tỉnh Tây Ninh",
#         "decree": "Số: 1682/NQ-UBTVQH15; Ngày: 16/06/2025"
#       }
#     ]
    
#     with open('input.json', 'w', encoding='utf-8') as f:
#         json.dump(test_data, f, ensure_ascii=False, indent=2)

#     # Chạy xử lý thực tế
#     process_administrative_json('input.json', 'output.json')

# Chạy xử lý thực tế
process_administrative_json('input.json', 'output.json')