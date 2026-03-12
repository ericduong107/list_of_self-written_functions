# Danh sách Tag của Todo Tree

Tài liệu này liệt kê các tag (thẻ ghi chú) phổ biến và hữu ích nhất trong extension **Todo Tree** trên VS Code, giúp quản lý luồng công việc và chất lượng mã nguồn một cách hệ thống.

---

## 1. Các Tag Mặc Định (Core Tags)

Đây là các tag cơ bản thường được cấu hình sẵn khi bạn vừa cài đặt extension.

| Tag | Ý nghĩa & Cách dùng |
| --- | --- |
| **`TODO`** | Đánh dấu các công việc cần làm nhưng chưa thực hiện. |
| **`FIXME`** | Chỉ ra đoạn code đang có vấn đề, chạy sai hoặc cần sửa chữa ngay lập tức. |

---

## 2. Các Tag Quản Lý Lỗi & Hiệu Suất

Sử dụng các tag này để kiểm soát độ ổn định và tốc độ của ứng dụng.

| Tag | Ý nghĩa & Cách dùng |
| --- | --- |
| **`BUG`** | Xác nhận vị trí phát sinh lỗi kỹ thuật cụ thể đã được tìm thấy. |
| **`HACK`** | Đánh dấu các giải pháp "tạm bợ", code chưa tối ưu nhưng được dùng để giải quyết vấn đề nhanh. |
| **`OPTIMIZE`** | Chỉ ra những đoạn code cần được cải thiện hiệu suất (tốc độ, bộ nhớ). |
| **`REFACTOR`** | Đánh dấu các đoạn code cần được cấu trúc lại cho sạch đẹp (Clean Code) mà không thay đổi tính năng. |

---

## 3. Các Tag Kiểm Tra & Tài Liệu

Dành cho quá trình làm việc nhóm (Teamwork) và lưu trữ thông tin.

| Tag | Ý nghĩa & Cách dùng |
| --- | --- |
| **`REVIEW`** | Đề nghị đồng nghiệp hoặc chính mình kiểm tra lại logic tại vị trí này. |
| **`NOTE`** | Ghi chú giải thích tại sao một đoạn code phức tạp lại được viết như vậy. |
| **`DOCS`** | Nhắc nhở cần bổ sung tài liệu hướng dẫn (Documentation) cho hàm hoặc module này. |
| **`TEST`** | Đánh dấu các vị trí cần viết thêm Unit Test hoặc Integration Test. |

---

## 4. Các Tag Trạng Thái Đặc Biệt

Giúp theo dõi tiến độ và các thay đổi trong tương lai.

| Tag | Ý nghĩa & Cách dùng |
| --- | --- |
| **`DEPRECATED`** | Đánh dấu các hàm/biến cũ, sắp bị loại bỏ và không nên sử dụng nữa. |
| **`IDEA`** | Lưu lại các ý tưởng mới hoặc tính năng có thể thêm vào trong tương lai. |
| **`DONE`** | Đánh dấu các việc đã hoàn thành (thường dùng để lưu lại lịch sử thay vì xóa bỏ). |

---

## 5. Mẹo cấu hình trong VS Code

Để các tag này hiển thị đúng màu sắc và icon, bạn có thể thêm đoạn cấu hình sau vào file `settings.json`:

Cách mở file settings.json:
1. Nhấn Ctrl + Shift + P (Windows) hoặc Cmd + Shift + P (Mac).
2. Gõ chữ "user settings json" và chọn dòng Preferences: Open User Settings (JSON)


```json
{
  "todo-tree.general.tags": [
    "TODO",
    "FIXME",
    "BUG",
    "HACK",
    "REVIEW",
    "OPTIMIZE",
    "NOTE",
    "REFACTOR",
    "DOCS",
    "TEST",
    "DEPRECATED"
  ],
  "todo-tree.highlights.defaultHighlight": {
    "type": "text",
    "foreground": "#ffffff",
    "opacity": 0.2
  },
  "todo-tree.highlights.customHighlight": {
    "TODO": {
      "background": "#f1c40f",
      "foreground": "#000000",
      "icon": "check",
      "iconColour": "#f1c40f"
    },
    "FIXME": {
      "background": "#e74c3c",
      "icon": "tools",
      "iconColour": "#e74c3c"
    },
    "BUG": {
      "background": "#c0392b",
      "icon": "bug",
      "iconColour": "#c0392b"
    },
    "HACK": {
      "background": "#9b59b6",
      "icon": "beaker",
      "iconColour": "#9b59b6"
    },
    "REVIEW": {
      "background": "#3498db",
      "icon": "eye",
      "iconColour": "#3498db"
    },
    "OPTIMIZE": {
      "background": "#2ecc71",
      "icon": "zap",
      "iconColour": "#2ecc71"
    },
    "NOTE": {
      "background": "#34495e",
      "icon": "note",
      "iconColour": "#34495e"
    },
    "REFACTOR": {
      "background": "#1abc9c",
      "icon": "sync",
      "iconColour": "#1abc9c"
    },
    "DOCS": {
      "background": "#ecf0f1",
      "foreground": "#000000",
      "icon": "book",
      "iconColour": "#ecf0f1"
    },
    "TEST": {
      "background": "#e67e22",
      "icon": "beaker",
      "iconColour": "#e67e22"
    },
    "DEPRECATED": {
      "background": "#7f8c8d",
      "icon": "trashcan",
      "iconColour": "#7f8c8d"
    }
  }
}

```

### Giải thích các thuộc tính:
- background: Màu nền của chữ khi hiển thị trong code.
- foreground: Màu của chữ (thường để trắng hoặc đen cho dễ đọc trên nền màu).
- icon: Biểu tượng xuất hiện ở thanh lề trái (gutter) và trong bảng cây Todo Tree. Các icon này lấy từ bộ Octicons.
- iconColour: Màu sắc của biểu tượng đó để đồng nhất với màu nền.

---

*Tài liệu được tạo để hỗ trợ quy trình lập trình sạch (Clean Code).*

---

Tôi có thể giúp bạn viết thêm đoạn code CSS hoặc JSON để tùy chỉnh màu sắc riêng biệt (ví dụ: BUG màu đỏ rực, TODO màu vàng) cho danh sách này không?