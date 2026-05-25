# Cách 1: Dùng thư viện (Khuyên dùng)
# pip install python-slugify
from slugify import slugify

print(slugify("Thành phố Cần Thơ"))
# thanh-pho-can-tho

# ========================================

# Cách 2: Code thuần
import unicodedata
import re

def to_slug(text):
    # Bỏ dấu tiếng Việt
    text = unicodedata.normalize("NFD", text)
    text = ''.join(c for c in text if unicodedata.category(c) != 'Mn')

    # Xử lý riêng chữ đ/Đ
    text = text.replace('đ', 'd').replace('Đ', 'D')

    # Chuyển thường
    text = text.lower()

    # Thay ký tự không phải chữ/số thành dấu -
    text = re.sub(r'[^a-z0-9]+', '-', text)

    # Xóa dấu - dư đầu cuối
    return text.strip('-')


# Test
print(to_slug("Thành phố Cần Thơ"))
