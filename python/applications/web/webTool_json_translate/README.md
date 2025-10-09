# JSON Translator (Flask + GoogleTranslator)

Ứng dụng web nhỏ để dịch nội dung `JSON` (dịch các giá trị kiểu chuỗi) bằng `deep_translator.GoogleTranslator`.

Chức năng:
- Giao diện 2 ô: `input JSON` và `output JSON`
- 2 dropdown để chọn source/target language
- Nút chuyển đổi để gửi `JSON` lên `backend Python (Flask)` để dịch
- `Dockerfile` + `Makefile` + `GitHub Actions workflow` để build image và đẩy lên `GitHub Container Registry`

Run locally:
1. Tạo `virtualenv` và cài `dependencies`:
```bash
  python -m venv venv
  source venv/bin/activate
  pip install -r requirements.txt
```

2. Chạy:
```bash
  python app.py
```

3. Mở `http://localhost:5000`

Build & Publish (Docker + GitHub Container Registry):
- Makefile có target `build` (tham số `REPO`, `TAG`). Ví dụ:
  make build REPO=ghcr.io/<OWNER>/<REPO> `TAG=latest`

- Workflow GitHub Actions (.github/workflows/docker-publish.yml) sẽ build image và push khi push lên nhánh main.

Lưu ý:
- deep_translator dùng API công khai (Google web translate); có thể bị giới hạn.
- Bạn có thể tùy chỉnh danh sách ngôn ngữ ở templates/index.html nếu cần.