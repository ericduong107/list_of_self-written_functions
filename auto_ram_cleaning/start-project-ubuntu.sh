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