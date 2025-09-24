Để sử dụng Docker trên Visual Studio Code (VS Code), bạn làm theo các bước sau:

## 1. Cài đặt Docker Desktop
- Tải và cài đặt [Docker Desktop](https://www.docker.com/products/docker-desktop/) cho Windows, macOS hoặc Linux.
- Sau khi cài đặt, khởi động Docker Desktop và đảm bảo nó đang chạy.

## 2. Cài đặt Docker Extension cho VS Code
- Mở VS Code.
- Vào **Extensions** (Ctrl+Shift+X), tìm **Docker** và cài đặt extension do Microsoft phát triển.

## 3. Kiểm tra Docker đã cài đặt
- Mở Terminal trong VS Code (**View > Terminal** hoặc Ctrl+`).
- Gõ:  
  ```
  docker --version
  ```
  Nếu nhận được phiên bản Docker, bạn đã cài đặt thành công.

## 4. Sử dụng Docker Extension trong VS Code

### Các chức năng chính:
- **Xem các container, images, volumes, networks** ngay trên sidebar của VS Code.
- **Tạo, chạy, dừng, xóa container** bằng giao diện trực quan.
- **Build image** từ Dockerfile.
- **Attach terminal** vào container.

### Cách sử dụng:
1. **Sidebar Docker**: Sau khi cài extension, bạn sẽ thấy biểu tượng Docker ở thanh bên trái.
2. **Quản lý container**: Click vào biểu tượng để xem danh sách container, image, v.v.
3. **Tạo mới Dockerfile**: Chuột phải vào thư mục dự án → **Add Docker Files to Workspace** → Chọn loại ứng dụng (Node.js, Python, v.v.).
4. **Build Image**: Chuột phải vào Dockerfile → **Build Image**.
5. **Chạy container**: Chuột phải vào image vừa build → **Run** hoặc **Run Interactive**.

## 5. Một số lệnh Docker cơ bản trong Terminal
```sh
docker build -t ten_image .
docker run -d -p 8080:80 ten_image
docker ps
docker stop <container_id>
docker rm <container_id>
docker images
```

## 6. Debug với Docker
- Extension Docker hỗ trợ debug các app Node.js, Python... chạy trong container.
- Khi tạo Dockerfile bằng extension, nó sẽ đề xuất cấu hình debug.

---

Nếu bạn cần ví dụ cụ thể cho Node.js, Python hay một stack nào khác, hãy nói rõ để mình hướng dẫn chi tiết!