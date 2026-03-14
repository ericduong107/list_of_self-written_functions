async updateData() {
    try {
      // 1. Lấy danh sách đối tượng từ database
      const objsNow: any = await this.vhQueryAutoWeb.getObjects_byFields({});

      console.log("Dữ liệu gốc từ DB:", objsNow);

      // 2. Chạy vòng lặp bất đồng bộ để xử lý từng object trong danh sách
      // map sẽ tạo ra một danh sách các Promises
      const promises = objsNow.map(objNow => {
        return new Promise((resolve) => {
          setTimeout(() => {
            let objNew = JSON.parse(JSON.stringify(objNow));

            if (objNew.component_config)
              objNew.component_admin_config ??= objNew.component_config.replace(/Config$/, "AdminConfig");

            resolve(objNew);
          }, 0);
        });
      });

      // 3. Đợi tất cả các tiến trình xử lý xong
      const objsNew = await Promise.all(promises);

      console.log("Danh sách đã được gộp (Merge) mới:", objsNew);

      const isConfirm = confirm(`Hệ thống đã chuẩn bị xong ${objsNew.length} đối tượng. Hãy kiểm tra Console (F12) trước khi bấm OK.\n\nBạn có muốn cập nhật vào Database không?`);

      if (isConfirm) {
        // 4. NẾU OK -> CHẠY UPDATE
        console.log("Đang tiến hành cập nhật...");
        const updatePromises = objsNew.map((obj: any) => this.vhQueryAutoWeb.updateObject(obj._id, obj));

        const updateResults = await Promise.all(updatePromises);
        console.log("Cập nhật thành công:", updateResults);
        alert(`Đã cập nhật xong ${updateResults.length} đối tượng!`);
      } else {
        // 5. NẾU CANCEL -> CHỈ LOG RA NHỮNG OBJ KHÔNG CẬP NHẬT
        console.warn("Người dùng đã hủy cập nhật.");
        console.log("Danh sách các đối tượng chưa cập nhật:", objsNew);
      }
    } catch (error) {
      console.error("Lỗi trong quá trình updateData:", error);
    }
  }
