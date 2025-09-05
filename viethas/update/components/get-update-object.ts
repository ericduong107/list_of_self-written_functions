/**
 * Hàm cập nhật dữ liệu cho object trong AutoWeb
 * 
 * Cần xoá thuộc tính trong dữ liệu thì gán cho bằng null
 * @example TS
 * // Cách dùng dataUpdate:
 * dataUpdate = { 
 *    component_admin: null, // Xoá thuộc tính này
 *    component_admin_config: "AtwButtonAdminConfig", // Gán mới thuộc tính này
 * } 
 * 
 * ` 
 * <!-- Cách dùng trong template: -->
 * <button (click)="updateData()">Cập nhật dữ liệu</button>
 * `
 */
function atw_updateData_getUpdateObject() {
  const idObject = 'Emmb4SO27HOeeNJhMsVU'; // ID của object cần lấy và cập nhật dữ liệu
  // Hàm lấy dữ liệu object bằng id object
  this.vhQueryAutoWeb.getObject(idObject).then((response: any) => {
    console.log('response', response);
    const data = response;

    // Thuộc tính trong data cần cập nhật
    const dataUpdate = {
      component_admin: null, // Xoá thuộc tính này
      component_admin_config: "AtwButtonAdminConfig", // Gán mới thuộc tính này
    };
    // Hoặc
    // const dataUpdate = {
    //   "staticdata": {
    //     ...data.staticdata, // Giữ nguyên các thuộc tính khác
    //     "content_vi": null, // Xoá thuộc tính này
    //     "content_en": "Hello", // Gán mới thuộc tính này
    //   },
    // };

    // Hàm cập nhật dữ liệu object bằng id object
    this.vhQueryAutoWeb.updateObject(idObject, dataUpdate)
      .then((bool) => {
        if (bool) {
          console.log('updateObject succeed');
        } else {
          console.error('updateObject fail');
        }
      })
  })
}