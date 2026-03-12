# server.py
# -*- coding: utf-8 -*-

import http.server
import socketserver
import os

# --- Cấu hình ---
# PORT: Cổng mà máy chủ sẽ lắng nghe. Bạn có thể thay đổi nếu cần.
PORT = 8000
# DIRECTORY: Thư mục chứa các tệp HTML, CSS, JS đã được build.
# Script này giả định thư mục 'build' nằm cùng cấp với tệp server.py này.
DIRECTORY = "build"

# --- Logic Máy chủ ---
class Handler(http.server.SimpleHTTPRequestHandler):
  """
  Handler tùy chỉnh để phục vụ các tệp từ một thư mục cụ thể.
  """
  def __init__(self, *args, **kwargs):
    # Thay đổi thư mục làm việc của handler sang thư mục 'build'
    super().__init__(*args, directory=DIRECTORY, **kwargs)

# Tạo một đối tượng máy chủ TCP, liên kết nó với cổng và handler đã định nghĩa
# socketserver.TCPServer sẽ xử lý các kết nối đến.
httpd = socketserver.TCPServer(("", PORT), Handler)

print("----------------------------------------------------------------")
print(f"Máy chủ đang chạy tại http://localhost:{PORT}")
print(f"Phục vụ các tệp từ thư mục: '{DIRECTORY}'")
print("Nhấn Ctrl+C để dừng máy chủ.")
print("----------------------------------------------------------------")

try:
  # Bắt đầu vòng lặp vô hạn của máy chủ để lắng nghe các yêu cầu
  httpd.serve_forever()
except KeyboardInterrupt:
  # Xử lý khi người dùng nhấn Ctrl+C để dừng máy chủ một cách nhẹ nhàng
  print("\nĐang dừng máy chủ...")
  httpd.server_close()
  print("Máy chủ đã dừng.")

