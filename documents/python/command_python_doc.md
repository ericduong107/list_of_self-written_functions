# Tài liệu về lệnh chạy trong Python

Có các lệnh được dùng trong python khi code python.

## Giải thích các từ khoá
| `Key` | Giải thích |
| :--- | :--- |
| `Global` | Chung chung gây nhầm lẫn giữa các version |
| `Local` | Cài trực tiếp vào version đang dùng |

## Kiểm tra version:

### PIP:
```bash
pip -V
// Hoặc
pip --version
```

### Python:
```bash
py -V
// Hoặc
py --version
```

## Chạy file python:

```bash
py app.py
```

## Danh sách các package được cài đặt 

### Dạng thường `Global`:

```bash
pip list
```

### Dạng module `Local`:

```bash
// Win
py -m pip list

// MacOS/Linux
python -m pip list
```

## Tải thư viện lẻ tẻ hoặc mới tạo dự án

### Dạng thường `Global`:

```bash
pip install package_name
```
- **Ý nghĩa**: Gọi trực tiếp chương trình `pip` (có thể là global hoặc alias).
- **Khi nào dùng**: Khi bạn chắc chắn `pip` đang trỏ đến đúng phiên bản Python bạn muốn.
- **Ưu điểm**: Ngắn gọn, quen thuộc.
- **Nhược điểm**: Dễ bị nhầm lẫn giữa nhiều phiên bản Python.

### Dạng module  `Local`:

```bash
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

## Tải thư viện cho dự án nhỏ có sẵn file `requirements.txt` 

> *Dự án đã được tạo trước đó chỉ clone từ repo về*

### Cấu trúc dự án

```
my_project/
│── app.py
│── requirements.txt
```

### Dạng thường `Global`:

```bash
pip install -r requirements.txt
```

### Dạng module  `Local`:

```bash
py -m pip install -r requirements.txt
```

## Tải thư viện cho dự án nhỏ có sẵn file `requirements.txt` 

> *Dự án đã được tạo trước đó chỉ clone từ repo về*

### Cấu trúc dự án

```
my_enterprise_project/
│── app/
│   └── __init__.py
│── requirements/
│   ├── base.txt
│   ├── dev.txt
│   ├── test.txt
│   └── prod.txt
│── manage.py
```

### Dạng thường `Global`:

- Trường hợp dùng lệnh dev hoặc prod thì không cần dùng lệnh base.
- Trường hợp dùng lệnh test thì không cần dùng lệnh dev và base.
> *Chỉ dùng lệnh nào phù hợp với mục đích làm việc*
```bash
pip install -r requirements/base.txt
pip install -r requirements/dev.txt
pip install -r requirements/test.txt
pip install -r requirements/prod.txt
```

### Dạng module  `Local`:

- Trường hợp dùng lệnh dev hoặc prod thì không cần dùng lệnh base.
- Trường hợp dùng lệnh test thì không cần dùng lệnh dev và base.
> *Chỉ dùng lệnh nào phù hợp với mục đích làm việc*
```bash
py -m pip install -r requirements/base.txt
py -m pip install -r requirements/dev.txt
py -m pip install -r requirements/test.txt
py -m pip install -r requirements/prod.txt
```