# Hướng dẫn DevOps & CI/CD từ cơ bản đến nâng cao

## I. DevOps là gì?

**DevOps** là sự kết hợp giữa "Development" (Phát triển phần mềm) và "Operations" (Vận hành hệ thống), nhằm tối ưu quá trình phát triển, kiểm thử, triển khai, và vận hành phần mềm thông qua tự động hóa và hợp tác giữa các nhóm.

### Lợi ích của DevOps:
- Tăng tốc độ phát triển và triển khai phần mềm
- Cải thiện chất lượng sản phẩm
- Giảm rủi ro khi ra mắt phiên bản mới
- Tăng sự hợp tác giữa các bộ phận

---

## II. Các khái niệm cơ bản trong DevOps

1. **Source Code Management (SCM):** Quản lý mã nguồn, thường sử dụng Git, GitHub, GitLab, Bitbucket.
2. **Continuous Integration (CI):** Tích hợp liên tục: Khi code mới được đẩy lên, hệ thống sẽ tự động kiểm tra, build và test.
3. **Continuous Delivery/Deployment (CD):** Triển khai liên tục: Sau khi CI thành công, hệ thống tự động triển khai lên môi trường test/staging/production.
4. **Infrastructure as Code (IaC):** Quản lý hạ tầng bằng code, ví dụ: Terraform, Ansible, CloudFormation.
5. **Monitoring & Logging:** Giám sát và ghi log hệ thống, ví dụ: Prometheus, Grafana, ELK Stack.
6. **Containerization:** Đóng gói ứng dụng vào container, ví dụ: Docker, Kubernetes.

---

## III. Hướng dẫn CI/CD cơ bản với GitHub Actions

### 1. Tạo repository và code mẫu

1. Tạo một repository mới trên GitHub.
2. Thêm code mẫu, ví dụ `main.py` (Python):

```python
# main.py
def hello():
    print("Hello, DevOps!")

if __name__ == "__main__":
    hello()
```

### 2. Viết workflow CI/CD với GitHub Actions

1. Tạo thư mục `.github/workflows` trong repo.
2. Tạo file `ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v3

    - name: Set up Python
      uses: actions/setup-python@v4
      with:
        python-version: '3.10'

    - name: Install dependencies
      run: pip install -r requirements.txt || true

    - name: Run main.py
      run: python main.py
```

3. Mỗi khi push code lên `main`, workflow sẽ tự động chạy, kiểm tra code.

---

## IV. CI/CD nâng cao

### 1. Test tự động

- Thêm unit test vào dự án, ví dụ file `test_main.py`:

```python
# test_main.py
from main import hello

def test_hello(capsys):
    hello()
    captured = capsys.readouterr()
    assert captured.out == "Hello, DevOps!\n"
```

- Cập nhật workflow để chạy test:

```yaml
    - name: Run tests
      run: pytest test_main.py
```

### 2. Triển khai ứng dụng (CD)

- Ví dụ deploy lên Heroku, AWS, hoặc server riêng.
- Thêm bước deploy vào workflow.
- Hoặc dùng Docker, Kubernetes để triển khai tự động.

---

## V. Các công cụ phổ biến trong DevOps & CI/CD

| Hạng mục         | Công cụ phổ biến           |
|------------------|---------------------------|
| Quản lý mã nguồn | Git, GitHub, GitLab       |
| CI/CD            | Jenkins, GitHub Actions, GitLab CI, Travis CI, CircleCI |
| Container        | Docker, Kubernetes        |
| IaC              | Terraform, Ansible        |
| Giám sát         | Prometheus, Grafana, ELK  |

---

## VI. Tài liệu và khóa học tham khảo

- [DevOps Roadmap](https://roadmap.sh/devops)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Getting Started](https://docs.docker.com/get-started/)
- [Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- [Learn CI/CD (Codecademy)](https://www.codecademy.com/learn/learn-cicd)

---

## VII. Lời khuyên cho người mới

- Bắt đầu từ những công cụ cơ bản như Git, GitHub.
- Tìm hiểu CI/CD bằng cách tự động hóa test và build.
- Làm quen với Docker và thử triển khai ứng dụng nhỏ.
- Đọc tài liệu, thực hành nhiều, tham gia cộng đồng DevOps.

---

## VIII. Lộ trình phát triển kỹ năng DevOps

1. **Cơ bản:** Git, GitHub, CI với GitHub Actions.
2. **Nâng cao:** Docker, Kubernetes, IaC (Terraform, Ansible).
3. **Chuyên sâu:** Cloud (AWS, Azure, GCP), Monitoring, Security, Scaling.

---

**Chúc bạn học DevOps và CI/CD hiệu quả! Nếu có câu hỏi cụ thể, hãy hỏi thêm nhé.**