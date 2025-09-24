Dưới đây là các ví dụ cụ thể về sử dụng Docker từ cơ bản đến nâng cao, dành cho người mới. Mình sẽ minh họa cho các stack phổ biến: Node.js, Python, web server (Nginx), database (MySQL), và Docker Compose.

---

## **1. Ví dụ về Docker cho Node.js**

**Cấu trúc thư mục:**
```
my-node-app/
├── Dockerfile
├── package.json
├── package-lock.json
└── index.js
```

**Dockerfile:**
```Dockerfile name=my-node-app/Dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
```

**Chạy lệnh:**
```bash
docker build -t my-node-app .
docker run -p 3000:3000 my-node-app
```

---

## **2. Ví dụ về Docker cho Python**

**Cấu trúc thư mục:**
```
my-python-app/
├── Dockerfile
├── requirements.txt
└── app.py
```

**Dockerfile:**
```Dockerfile name=my-python-app/Dockerfile
FROM python:3.11
WORKDIR /app
COPY requirements.txt ./
RUN pip install -r requirements.txt
COPY . .
EXPOSE 5000
CMD ["python", "app.py"]
```

**Chạy lệnh:**
```bash
docker build -t my-python-app .
docker run -p 5000:5000 my-python-app
```

---

## **3. Ví dụ về Docker cho Nginx (web server)**

**Chạy Nginx:**
```bash
docker run -d -p 8080:80 nginx
```

**Hoặc dùng file cấu hình custom:**
```bash
docker run -d -p 8080:80 -v /path/to/nginx.conf:/etc/nginx/nginx.conf nginx
```

---

## **4. Ví dụ về Docker cho MySQL (database)**

**Chạy MySQL container:**
```bash
docker run -d \
  --name mysql-db \
  -e MYSQL_ROOT_PASSWORD=example \
  -p 3306:3306 \
  mysql:5.7
```

---

## **5. Ví dụ về Docker Compose**

**Cấu trúc thư mục:**
```
my-compose-app/
├── docker-compose.yml
├── web/
│   └── Dockerfile
│   └── index.js
├── db/
```

**docker-compose.yml:**
```yaml name=my-compose-app/docker-compose.yml
version: '3'
services:
  web:
    build: ./web
    ports:
      - "3000:3000"
    depends_on:
      - db
  db:
    image: mysql:5.7
    environment:
      MYSQL_ROOT_PASSWORD: example
    ports:
      - "3306:3306"
```

**Chạy lệnh:**
```bash
docker-compose up
```

---

## **6. Ví dụ nâng cao: Multi-stage build cho Node.js**

**Dockerfile:**
```Dockerfile name=my-node-app/Dockerfile
# Stage 1: Build
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Production
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY package*.json ./
RUN npm install --production
EXPOSE 3000
CMD ["node", "dist/index.js"]
```

---

## **7. Ví dụ gắn volume để lưu dữ liệu**

```bash
docker run -v /local/data:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=example mysql:5.7
```

---

Nếu bạn muốn ví dụ chi tiết cho một ứng dụng cụ thể (ví dụ: Flask, React, Django, Express...) hãy nói rõ, mình sẽ hướng dẫn thêm!