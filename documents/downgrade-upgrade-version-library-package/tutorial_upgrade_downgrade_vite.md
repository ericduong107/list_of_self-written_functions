Để hạ cấp Vite xuống bản ổn định hơn (Vite 7) nhằm khớp với Tailwind CSS và Motion mà không làm hỏng dự án, bạn thực hiện theo các bước "sạch" nhất sau đây nhé:

### Bước 1: Chỉnh sửa file `package.json`
Bạn mở file `package.json` trong thư mục gốc của dự án `plant-seedling-ecommerce`, tìm đến mục `devDependencies` và sửa lại số phiên bản như sau:

* **Vite:** Sửa từ `^8.0.x` thành `^7.0.0`
* **Plugin React:** (Nếu có) Sửa `@vitejs/plugin-react` thành `^4.3.4` (bản này tương thích tốt với Vite 7).

Ví dụ trông sẽ giống thế này:
```json
"devDependencies": {
  "@vitejs/plugin-react": "^4.3.4",
  "vite": "^7.0.0",
  "tailwindcss": "^4.0.0",
  ...
}
```

### Bước 2: Dọn dẹp dữ liệu cũ (Quan trọng)
Vì các file khóa (`lock file`) và thư mục cache vẫn đang giữ thông tin của bản Vite 8, bạn cần xóa chúng đi để tránh xung đột khi cài lại. Bạn chạy các lệnh sau trong Terminal (đảm bảo đang ở đúng thư mục dự án):

```powershell
# Xóa thư mục node_modules
rm -r -force node_modules

# Xóa file lock (nếu dùng npm thì xóa package-lock.json)
rm -force package-lock.json
```
*(Nếu bạn dùng Command Prompt thay vì PowerShell thì dùng lệnh `rd /s /q node_modules` và `del package-lock.json`)*.

### Bước 3: Cài đặt lại và thêm thư viện Motion
Bây giờ bạn tiến hành cài đặt lại toàn bộ và cài luôn thư viện `motion` mà không cần dùng `--force` nữa:

```bash
# Cài đặt lại các package theo version mới đã sửa
npm install

# Cài đặt thư viện motion
npm i motion
```

---

### Cách kiểm tra sau khi hạ cấp
Sau khi cài xong, bạn chạy lệnh sau để kiểm tra chắc chắn version đang dùng:
```bash
npx vite --version
```
Nếu nó hiện `vite/7.x.x` là bạn đã thành công.

### Một lưu ý nhỏ cho "Pure Code":
Vì bạn thích dùng **code thuần** và hạn chế thư viện, khi cài `motion` (trước đây là Framer Motion), bạn nên tận dụng các tính năng nhẹ của nó thay vì lạm dụng quá nhiều component bọc ngoài. Nếu chỉ cần các hiệu ứng chuyển trang đơn giản, đôi khi chỉ cần dùng CSS Transition/Animation kết hợp với React State cũng đã rất mượt mà và giúp bundle size của bạn "xanh" hơn nhiều.

Bạn thử chạy lại lệnh cài đặt xem có còn báo lỗi đỏ `ERESOLVE` nữa không nhé!