# Tài liệu về lệnh chạy trong Python

Có các lệnh được dùng trong python khi code python.

## Lệnh cơ bản:

### Kiểm tra version PIP:
```cmd
pip -V
// Hoặc
pip --version
```

### Kiểm tra version Python:
```cmd
py -V
// Hoặc
py --version
```

### Chạy file python:

```cmd
py app.py
```

### Danh sách các package được cài đặt *dạng thường (Global - Chung chung gây nhầm lẫn giữa các version)*:

```cmd
pip list
```

### Danh sách các package được cài đặt *dạng module (Local - Cài trực tiếp vào version đang dùng)*:

```cmd
// Win
py -m pip list

// MacOS/Linux
python -m pip list
```

## Tải thư viện *dạng thường (Global - Chung chung gây nhầm lẫn giữa các version)*:

```cmd
pip install package_name
```
- **Ý nghĩa**: Gọi trực tiếp chương trình `pip` (có thể là global hoặc alias).
- **Khi nào dùng**: Khi bạn chắc chắn `pip` đang trỏ đến đúng phiên bản Python bạn muốn.
- **Ưu điểm**: Ngắn gọn, quen thuộc.
- **Nhược điểm**: Dễ bị nhầm lẫn giữa nhiều phiên bản Python.

## Tải thư viện *dạng module (Local - Cài trực tiếp vào version đang dùng)*:

```cmd
// Win
py -m pip install package_name

// MacOS/Linux
python -m pip install package_name
```
- **Ý nghĩa**: Gọi `pip` **như một module** của **chính phiên bản Python đang dùng**.
- **Khi nào dùng**: Khi bạn muốn **chắc chắn `pip` cài vào đúng interpreter**.
- **Ưu điểm**: Chính xác, rõ ràng, ít nhầm lẫn.
- **Nhược điểm**: Dài dòng hơn một chút.
- **Có thể dùng cho trường hợp**: Đã dùng **lệnh ngắn gọn** nhưng khi chạy code vẫn bị `error` thì có thể dùng cách này thay thể.
