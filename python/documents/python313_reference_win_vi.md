# Tùy chọn dòng lệnh Python (Python 3.13)

## Cách dùng
```bash
C:\Users\Administrator\AppData\Local\Programs\Python\Python313\python.exe [tùy chọn] ... [-c cmd | -m mod | file | -] [arg] ...
```

---

## Các tùy chọn

| Tùy chọn | Mô tả |
|----------|-------|
| `-b` | Cảnh báo khi chuyển đổi `bytes/bytearray` sang `str` hoặc so sánh chúng với `str` hay `int`. (`-bb` sẽ báo lỗi). |
| `-B` | Không ghi file `.pyc` khi import; cũng có thể đặt `PYTHONDONTWRITEBYTECODE=x`. |
| `-c cmd` | Chạy chương trình từ chuỗi lệnh (kết thúc danh sách tùy chọn). |
| `-d` | Bật chế độ debug parser (chỉ dành cho chuyên gia, chỉ hoạt động với bản debug); cũng có thể đặt `PYTHONDEBUG=x`. |
| `-E` | Bỏ qua các biến môi trường `PYTHON*` (ví dụ `PYTHONPATH`). |
| `-h` | In trợ giúp và thoát (cũng có thể dùng `-?` hoặc `--help`). |
| `-i` | Vào chế độ tương tác sau khi chạy script; cũng có thể đặt `PYTHONINSPECT=x`. |
| `-I` | Cách ly Python khỏi môi trường người dùng (bao gồm `-E`, `-P`, `-s`). |
| `-m mod` | Chạy module thư viện như script (kết thúc danh sách tùy chọn). |
| `-O` | Bỏ `assert` và các câu lệnh phụ thuộc `__debug__`; tạo file `.opt-1.pyc`; cũng có thể đặt `PYTHONOPTIMIZE=x`. |
| `-OO` | Giống `-O` nhưng bỏ thêm docstring; tạo file `.opt-2.pyc`. |
| `-P` | Không thêm đường dẫn không an toàn vào `sys.path`; cũng có thể đặt `PYTHONSAFEPATH`. |
| `-q` | Không in thông báo phiên bản khi vào chế độ tương tác. |
| `-s` | Không thêm thư mục site của người dùng vào `sys.path`; cũng có thể đặt `PYTHONNOUSERSITE=x`. |
| `-S` | Không tự động `import site` khi khởi động. |
| `-u` | Xuất stdout và stderr không đệm; stdin không bị ảnh hưởng; cũng có thể đặt `PYTHONUNBUFFERED=x`. |
| `-v` | In chi tiết (theo dõi các import); cũng có thể đặt `PYTHONVERBOSE=x`. Có thể dùng nhiều lần để tăng chi tiết. |
| `-V` | In phiên bản Python và thoát (cũng có thể dùng `--version`). Dùng 2 lần để có thêm thông tin build. |
| `-W arg` | Điều khiển cảnh báo (`action:message:category:module:lineno`); cũng có thể đặt `PYTHONWARNINGS=arg`. |
| `-x` | Bỏ qua dòng đầu của mã nguồn (hỗ trợ các dạng `#!cmd` không chuẩn Unix). |
| `-X opt` | Đặt tùy chọn riêng của bản cài Python. |
| `--check-hash-based-pycs` | Điều khiển việc vô hiệu hóa `.pyc` dựa trên hash (always, default, never). |
| `--help-env` | Hiển thị trợ giúp về biến môi trường của Python. |
| `--help-xoptions` | Hiển thị trợ giúp về các tùy chọn `-X`. |
| `--help-all` | Hiển thị toàn bộ thông tin trợ giúp và thoát. |

---

## Tham số

| Tham số | Mô tả |
|---------|-------|
| `file` | Chạy script từ file. |
| `-` | Chạy chương trình từ stdin (mặc định; chế độ tương tác nếu là tty). |
| `arg ...` | Các tham số truyền vào chương trình qua `sys.argv[1:]`. |

---

## Ghi chú
- Dùng `python -m module` để chạy thư viện dưới dạng script (ví dụ: `python -m pip`).
- Có thể dùng `-i` để debug script trực tiếp. 
- `-O` và `-OO` thường dùng khi đóng gói, phân phối mã Python.
