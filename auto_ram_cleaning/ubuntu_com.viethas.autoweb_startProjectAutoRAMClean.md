# [Ubuntu] com.viethas.autoweb - Start Project - Auto RAM Cleaning

## Môi trường cần cài đặt cần chuẩn bị

### ZRam

#### Cài đặt

```bash
sudo apt update
sudo apt install zram-config -y
```

## Thiết lập trong dự án

### Bước 1: Tạo file script kiểm tra RAM

Bạn tạo một file tên là `start-project.sh` nằm ngay trong thư mục gốc của dự án (Cùng cấp với file `package.json`) và dán đoạn code này vào.

```bash
#!/bin/bash

# 1. Khởi động lại dịch vụ ZRAM để giải phóng lần đầu
echo "🔄 Đang giải phóng ZRAM lần đầu..."
sudo systemctl restart zram-config.service

# Dùng vòng lặp vô hạn, chỉ thoát khi người dùng chọn y, n hoặc gõ sai
while true; do

  echo -e "\n📊 TÌNH TRẠNG SWAP/ZRAM HIỆN TẠI:"
  # 2. Hiển thị thông số ZRAM hiện tại
  swapon --show
  
  # Hiển thị thêm một chút thông tin RAM vật lý để bạn dễ quan sát khi gõ lệnh 'ram'
  echo -e "\n📊 TÌNH TRẠNG RAM VẬT LÝ:"
  free -h

  echo -e "\n--------------------------------------------------"
  # 3. Hỏi ý kiến người dùng
  read -p "Hệ thống ổn không bạn? Tiếp tục chạy dự án? (y/n/zram/ram): " choice

  case "$choice" in 
    y|Y ) 
      echo "🚀 Mọi thứ ổn áp! Khởi động dự án Angular..."
      # Lệnh chạy Angular của bạn với cấu hình tối ưu bộ nhớ
      node --expose-gc --openssl-legacy-provider --max-old-space-size=8096 ./node_modules/@angular/cli/bin/ng serve --port=4600
      break # Thoát vòng lặp và chạy dự án thành công
      ;;
      
    zram )
      echo "♻️  Đang tiếp tục giải phóng lại ZRAM..."
      sudo systemctl restart zram-config.service
      echo "✅ Đã reset ZRAM!"
      # Không có 'break', vòng lặp sẽ tự động quay lại từ đầu để hiển thị thông số mới
      ;;
      
    ram )
      echo "🧹 Đang dọn dẹp bộ nhớ đệm RAM (Drop Caches)..."
      sudo sync && echo 3 | sudo tee /proc/sys/vm/drop_caches > /dev/null
      echo "✅ Đã dọn dẹp RAM vật lý!"
      ;;
      
    n|N ) 
      echo "🛑 Đã hủy. Hãy dọn dẹp RAM bên ngoài rồi thử lại nhé!"
      exit 0
      ;;
      
    * ) 
      echo "❌ Lựa chọn không hợp lệ. Tự động thoát."
      exit 1
      ;;
  esac
done
```

### Bước 2: Cấp quyền thực thi cho file script

Mở terminal tại thư mục dự án và chạy lệnh sau (chỉ cần làm lần đầu tiên):

```bash
chmod +x start-project.sh
```

### Bước 3: Cấu hình lại `package.json`

Bây giờ bạn mở file `package.json` ra, tìm đến phần `"scripts"` và sửa lại lệnh `start` để nó gọi file script vừa tạo ở trên:

```json
"scripts": {
  "dev": "node server.js", 
  "start": "./start-project.sh"
}
```

*(Lưu ý: Bạn nhớ đổi chữ `node server.js` ở dòng `"dev"` trong `package.json` thành lệnh chạy dự án thực tế của bạn nhé. Trong file `.sh` ở Bước 1 mình đã cài sẵn việc gọi lại `npm run dev` khi bạn bấm `y`).*

## Kết quả khi bạn gõ npm start:

1. Máy sẽ yêu cầu nhập sudo để restart ZRAM.
2. Hệ thống in ra bảng dung lượng swapon --show trực quan.
3. Xuất hiện dòng hỏi: Hệ thống ổn không bạn? Tiếp tục chạy dự án? (y/n/zram/ram): 
    - Nếu gõ y + Enter: Dự án sẽ chạy.
    - Nếu gõ n + Enter: Lệnh dừng lại ngay lập tức để bạn đi dọn RAM tiếp.
    - Nếu gõ zram + Enter: Lệnh sẽ tiếp tục giải phóng ZRAM và hỏi lại.
    - Nếu gõ ram + Enter: Lệnh sẽ tiếp tục giải phóng RAM vật lý và hỏi lại

## Chú thích lệnh chạy dự án

```bash
node --expose-gc --openssl-legacy-provider --max-old-space-size=8096 ./node_modules/@angular/cli/bin/ng serve --port=4600
```

Cấu hình cấp thêm bộ nhớ đệm (`--max-old-space-size=8096` ~ 8GB) kết hợp với dọn rác chủ động (`--expose-gc`) là cực kỳ chuẩn bài cho các dự án lớn, giúp tránh lỗi `JavaScript heap out of memory` khi `ng serve` biên dịch lại (recompile) liên tục lúc bạn code.