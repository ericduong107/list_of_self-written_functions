# Chọn base image
FROM node:18

# Thư mục làm việc trong container
WORKDIR /app

# Copy file package.json trước để tối ưu cache
COPY package.json ./

# Cài dependency
RUN npm install

# Copy toàn bộ code
COPY . .

# Expose port 3000
EXPOSE 3000

# Lệnh chạy ứng dụng
CMD ["npm", "start"]
