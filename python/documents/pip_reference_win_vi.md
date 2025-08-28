# Tham khảo lệnh Pip (Python 3.12)

## Cách dùng
```bash
C:\Users\Administrator\AppData\Local\Microsoft\WindowsApps\PythonSoftwareFoundation.Python.3.12_qbz5n2kfra8p0\python.exe -m pip <lệnh> [tùy chọn]
```

---

## Các lệnh

| Lệnh          | Mô tả |
|---------------|-------|
| `install`     | Cài đặt gói. |
| `download`    | Tải gói. |
| `uninstall`   | Gỡ cài đặt gói. |
| `freeze`      | Xuất danh sách gói đã cài đặt ở định dạng `requirements.txt`. |
| `inspect`     | Kiểm tra môi trường Python. |
| `list`        | Liệt kê các gói đã cài đặt. |
| `show`        | Hiển thị thông tin gói. |
| `check`       | Kiểm tra tính tương thích của các gói đã cài đặt. |
| `config`      | Quản lý cấu hình cục bộ và toàn cục. |
| `search`      | Tìm kiếm gói trên PyPI. |
| `cache`       | Kiểm tra và quản lý bộ nhớ đệm wheel. |
| `index`       | Kiểm tra thông tin từ các kho gói. |
| `wheel`       | Tạo wheel từ yêu cầu. |
| `hash`        | Tính toán hash của gói. |
| `completion`  | Công cụ hỗ trợ tự động hoàn thành lệnh. |
| `debug`       | Hiển thị thông tin gỡ lỗi. |
| `help`        | Hiển thị trợ giúp cho lệnh. |

---

## Tùy chọn chung

| Tùy chọn | Mô tả |
|----------|-------|
| `-h, --help` | Hiển thị trợ giúp. |
| `--debug` | Để lỗi chưa xử lý thoát ra ngoài thay vì ghi log. |
| `--isolated` | Chạy pip ở chế độ cách ly, bỏ qua biến môi trường và cấu hình người dùng. |
| `--require-virtualenv` | Chỉ cho phép chạy pip trong môi trường ảo, nếu không thì báo lỗi. |
| `--python <python>` | Chạy pip với trình thông dịch Python chỉ định. |
| `-v, --verbose` | Xuất thêm thông tin. Có thể dùng tối đa 3 lần. |
| `-V, --version` | Hiển thị phiên bản và thoát. |
| `-q, --quiet` | Ít thông tin hơn. Có thể dùng tối đa 3 lần (tương ứng WARNING, ERROR, CRITICAL). |
| `--log <path>` | Ghi log chi tiết vào file. |
| `--no-input` | Tắt yêu cầu nhập từ người dùng. |
| `--keyring-provider <keyring_provider>` | Bật tìm kiếm thông tin đăng nhập bằng keyring. (mặc định: auto). |
| `--proxy <proxy>` | Chỉ định proxy `scheme://[user:passwd@]proxy.server:port`. |
| `--retries <retries>` | Số lần thử kết nối tối đa (mặc định 5). |
| `--timeout <sec>` | Thời gian chờ kết nối (mặc định 15 giây). |
| `--exists-action <action>` | Hành động mặc định khi file đã tồn tại: (s)witch, (i)gnore, (w)ipe, (b)ackup, (a)bort. |
| `--trusted-host <hostname>` | Đánh dấu host là tin cậy, kể cả khi không có HTTPS hợp lệ. |
| `--cert <path>` | Chỉ định chứng chỉ CA dạng PEM. |
| `--client-cert <path>` | Chứng chỉ SSL client (bao gồm private key và certificate trong 1 file PEM). |
| `--cache-dir <dir>` | Lưu cache vào thư mục `<dir>`. |
| `--no-cache-dir` | Tắt bộ nhớ đệm. |
| `--disable-pip-version-check` | Không kiểm tra cập nhật pip định kỳ. |
| `--no-color` | Tắt màu trong output. |
| `--no-python-version-warning` | Tắt cảnh báo phiên bản Python sắp lỗi thời. |
| `--use-feature <feature>` | Bật tính năng mới (có thể không tương thích ngược). |
| `--use-deprecated <feature>` | Bật tính năng cũ (sẽ bị loại bỏ trong tương lai). |

---

## Ghi chú
- Nên dùng `python -m pip` thay vì gọi trực tiếp `pip` để đảm bảo đúng môi trường Python.
