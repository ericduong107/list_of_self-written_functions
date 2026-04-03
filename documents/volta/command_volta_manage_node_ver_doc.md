# Lệnh sử dụng Volta quản lý Node Version

Dưới đây là một số lệnh thường sử dụng trong Volta để quản lý các phiên bản Node.js, npm và Yarn:

## Quản lý phiên bản Node.js

- **Cài đặt Node.js**
  ```
  volta install node
  ```
- **Cài đặt một phiên bản cụ thể của Node.js**
  ```
  volta install node@<version>
  ```
  Ví dụ:
  ```
  volta install node@14.17.0
  ```
- **Sử dụng một phiên bản cụ thể của Node.js trong một dự án**
  ```
  volta pin node@<version>
  ```
  Ví dụ:
  ```
  volta pin node@14.17.0
  ```
- **Kiểm tra phiên bản hiện tại của Node.js**
  ```
  node -v
  ```

## Quản lý npm

- **Cài đặt npm**
  ```
  volta install npm
  ```
- **Cài đặt một phiên bản cụ thể của npm**
  ```
  volta install npm@<version>
  ```
  Ví dụ:
  ```
  volta install npm@6.14.13
  ```
- **Sử dụng một phiên bản cụ thể của npm trong một dự án**
  ```
  volta pin npm@<version>

  ```
  Ví dụ:
  ```
  volta pin npm@6.14.13

  ```
- **Kiểm tra phiên bản hiện tại của npm**
  ```
  npm -v

  ```

## Quản lý Yarn

- **Cài đặt Yarn**
  ```
  volta install yarn

  ```
- **Cài đặt một phiên bản cụ thể của Yarn**
  ```
  volta install yarn@<version>

  ```
  Ví dụ:
  ```
  volta install yarn@1.22.10

  ```
- **Sử dụng một phiên bản cụ thể của Yarn trong một dự án**
  ```
  volta pin yarn@<version>

  ```
  Ví dụ:
  ```
  volta pin yarn@1.22.10

  ```
- **Kiểm tra phiên bản hiện tại của Yarn**
  ```
  yarn -v

  ```

## Quản lý các package toàn cầu

- **Cài đặt một package toàn cầu**
  ```
  volta install <package>

  ```
  Ví dụ:
  ```
  volta install typescript

  ```
- **Kiểm tra các phiên bản đã pin trong dự án**
  ```
  volta list

  ```

## Khác

- **Xóa một phiên bản Node.js, npm, hoặc Yarn đã pin**
  ```
  volta uninstall <package>

  ```
  Ví dụ:
  ```
  volta uninstall node

  ```
- **Hiển thị thông tin về Volta**
  ```
  volta help

  ```

Những lệnh trên sẽ giúp bạn quản lý phiên bản Node.js và các công cụ liên quan một cách hiệu quả bằng Volta.
