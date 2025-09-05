# Cách đổi đường dẫn tạm thời trong angular mà không thay đổi code hoặc có thay đổi 1 ít

## Trường hợp chỉ có một class tương ứng với một đường dẫn local hoặc framework hoặc thư viện duy nhất

> Ví dụ: Trong `vhobjects-function` chỉ có duy nhất class `FunctionService`. Và ở `local` cũng chỉ có class `FunctionSevrice` có đường dẫn là `src/app/services/function.service`

Code gốc:
```ts
import { FunctionService } from 'vhobjects-service';
```
Code sẽ tạm thời đổi thành:
```ts
import { FunctionService } from 'src/app/services/function.service';
```

### Cách 1: Dùng `tsconfig.json` → `paths`

> Cách này có thể map alias để không cần đổi tay

#### Các bước thực hiện:

- **Bước 1**: Mở file `tsconfig.json` (hoặc `tsconfig.base.json` tuỳ version Angular).
  Thêm:
  ```json
  {
    "compilerOptions": {
      "baseUrl": "./",
      "paths": {
        "vhobjects-service": ["src/app/services/function.service.ts"]
      }
    }
  }
  ```
- **Bước 2**: Sau đó `import` như cũ:
  ```ts
  import { FunctionService } from 'vhobjects-service';
  ```
  > → TypeScript + Angular sẽ hiểu và tự resolve sang src/app/services/function.service.

### Cách 2: Dùng Webpack alias (Nếu custom builder)

> Nếu bạn dùng `@angular-builders/custom-webpack`, bạn có thể cấu hình alias trong `webpack.config.js`:

```js
resolve: {
  alias: {
    "vhobjects-service": path.resolve(__dirname, "src/app/services/function.service.ts")
  }
}
```

### → Nếu bạn chỉ muốn tạm thời khi start dev thì cách số 1 (paths trong tsconfig) là chuẩn và đơn giản nhất.

## Trường hợp chỉ trong thư mục bất kì có nhiều service hoặc bất cứ thứ gì trùng (services/function, services/user....)

Ví dụ:
```ts
import { FunctionService } from 'vhobjects-service';
import { UserService } from 'vhobjects-service';
import { ProductService } from 'vhobjects-service';
```

thì nếu bạn map alias trực tiếp tới một file duy nhất (`function.service.ts`) thì sẽ bị sai, vì các service khác cũng cần được resolve.

## Trường hợp chỉ muốn lấy một class nhưng có nhiều class nằm trong framework