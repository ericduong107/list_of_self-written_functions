# json_translateVietnameseToEnglish

## Mô tả

Tool dịch key: Tiếng việt sang key: Tiếng anh

- Dùng cho các dự án có dùng dạng i18

  ```json
  { "xin_chao": "Xin chào", "so_dien_thoai": "Số điện thoại" }
  ```

- Dịch sang

  ```json
  { "xin_chao": "Hello", "so_dien_thoai": "Phone number" }
  ```

## Hướng dẫn sử dụng

### Cài thư viện cần thiết

Cài thư viện `deep-translator` để dịch

#### Cách thường

```bash
pip install deep-translator
```

#### Cách tải dạng module

```bash
# Win
py -m pip install deep-translator

# MacOS/Linux
python -m pip install install deep-translator
```

### Tạo file `input.json`

Thêm vào các key tiếng việt muốn dịch

```json
{
  "xin_chao": "Xin chào",
  "so_dien_thoai": "Số điện thoại"
}
```

### Tạo file `output.json`

```json
{}
```

## Chạy file

### Kích hoạt môi trường ảo (Activation)

Tùy thuộc vào hệ điều hành và công cụ dòng lệnh bạn đang sử dụng, câu lệnh kích hoạt sẽ khác nhau:

1. **Windows**

- **Command Prompt (CMD):**

  ```DOS
  venv\Scripts\activate.bat
  ```

- **PowerShell:**

  ```PowerShell
  venv\Scripts\Activate.ps1
  ```

  > **Lưu ý trên PowerShell:** _Nếu bạn gặp lỗi Execution Policy (không cho phép chạy script), hãy chạy lệnh sau trước khi kích hoạt:_
  >
  > ```PowerShell
  > Set-ExecutionPolicy Unrestricted -Scope Process
  > ```

2. **macOS & Linux (Bash / Zsh)**

   ```Bash
   source venv/bin/activate
   ```

   > **Dấu hiệu nhận biết thành công:** _Khi kích hoạt thành công, tên môi trường (venv) sẽ xuất hiện ở đầu dòng lệnh (prompt) của bạn._

### Cài đặt các thư viện từ `requirements.txt`

Sau khi môi trường ảo đã được kích hoạt, hãy đảm bảo `pip` đã được cập nhật (tùy chọn nhưng nên làm) và tiến hành cài đặt:

1. Cập nhật pip (nếu cần):

- Windows: `python -m pip install --upgrade pip`
- MacOS / Linux: `python3 -m pip install --upgrade pip`

2. Cài đặt thư viện:

   ```bash
   pip install -r requirements.txt
   ```

   Toàn bộ các gói thư viện được liệt kê trong tệp `requirements.txt` sẽ được tải về và cài đặt cô lập bên trong thư mục `venv` của dự án mà không ảnh hưởng đến hệ thống chung.

3. Mẹo bổ sung:

- **Kiểm tra các thư viện đã cài:** Gõ `pip list` để xem danh sách gói hiện tại trong `venv`.
- **Thoát khỏi môi trường ảo:** Khi làm việc xong, bạn chỉ cần gõ lệnh:

  ```bash
  deactivate
  ```

#### Xem chi tiết

> URL: [**dkhy.notion.site/Documents-of-Eric-Duong**](https://dkhy.notion.site/381f291b1b7780b7b283fb75c6eac9b4?v=381f291b1b7780409de4000c9c2e8885)
>
> Đường dẫn: `[0] -> [0.1] -> [0.1.2] -> [0.1.2.0]`

### Chạy file `json_translateVietnameseToEnglish.py`

```bash
py json_translateVietnameseToEnglish.py
```

## Hướng dẫn trong `code`

### Trường hợp muốn đổi ngôn ngữ có thể vào chỉnh trong code

Đã có sẵn trong code ở cuối cùng của code đã để sẵn mẫu
