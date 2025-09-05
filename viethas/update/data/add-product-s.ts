function atw_updateData_addProduct_s() {
  // Danh sách dữ liệu sản phẩm cần thêm
  const dataUpdate = [
    {
        "_id": "6835170e9ec8e65f181e911c",
        "units": [
            {
                "unit_vn": "bộ",
                "ratio": 1,
                "default": true,
                "price": 5499000,
                "price2": 0,
                "price_import": 0,
                "webapp_price_sales": 9850000,
                "barcode": ""
            }
        ],
        "allow_sell": true,
        "id_categorys": [
            "683512375aae39217a91d597",
            "68397ccd5fe49a10d00a99c3"
        ],
        "selling": true,
        "brand": "",
        "type": 3,
        "warning_number": 0,
        "manysize": false,
        "manylot": false,
        "days_import_warning": 0,
        "days_exp_warning": 0,
        "webapp_hidden": false,
        "name_vn": "Bộ sản phẩm VIP-0324-9",
        "webapp_sort_description_vn": "<p><span style=\"font-size:18px;\">- 1 Máy tính tiền POS cầm tay 7 inch (hệ điều hành android, tích hợp máy in nhiệt K57 Bluetooth).</span></p><p><span style=\"font-size:18px;\">- 1 Két đựng tiền nhiều ngăn</span></p><p><span style=\"font-size:18px;\">- 5 cuộn giấy in nhiệt.</span></p><p><span style=\"font-size:18px;\">- 2 năm bản quyền khi sử dụng phần mềm của Viethas.</span></p>",
        "webapp_description_vn": "<p><span style=\"font-size:18px;\">- 1 Máy tính tiền POS cầm tay 7 inch (hệ điều hành android, tích hợp máy in nhiệt K57 Bluetooth).</span></p><p><span style=\"font-size:18px;\">- 1 Két đựng tiền nhiều ngăn</span></p><p><span style=\"font-size:18px;\">- 5 cuộn giấy in nhiệt.</span></p><p><span style=\"font-size:18px;\">- 2 năm bản quyền khi sử dụng phần mềm của Viethas.</span></p>",
        "webapp_seo_title_vn": "",
        "webapp_seo_description_vn": "",
        "webapp_seo_keyword_vn": "",
        "fcustom_bao_hanh_vn": "Bảo hành: 12 tháng",
        "fcustom_10_000_luot_tai_vn": "",
        "imgs": [
            "https://115.78.228.208:20350/autowebapp/6827e4b309925ca3ccbe66ca/images/design/objects/VIP-0324-9.jpeg"
        ],
        "link": "bo-san-pham-vip-0324-9",
        "id_branch": "67ac4d5dbb71dd03797b9b7e",
        "name_vn_textsearch": "bo san pham vip 0324 9",
        "price_search": 5499000,
        "6835323d6ef2ccc61c32e762_hidden": true,
        "6835323d6ef2ccc61c32e762_ordinal_number": 1,
        "availability": "in_stock",
        "created_at": "2025-08-26T01:34:09.479Z",
        "updated_at": "2025-08-26T01:34:09.479Z"
    },
  ];

  const idOrigin = '68ba43c13a83a72ef39dcd68'; // ID danh mục gốc
  const idChild = '68ba4490dcdb80ca25bce33a'; // ID danh mục con

  // Get danh mục gốc
  this.vhQueryAutoWeb.getCategorys_byFields({_id: idOrigin})
    .then((response: any) => {
      console.log('getCategorys_byFields', response);
    })

  // Get danh mục con
  this.vhQueryAutoWeb.getCategorys_byFields({_id: idChild})
    .then((response: any) => {
      console.log('getCategorys_byFields', response);
    })

  // Dùng bất đồng bộ để Thêm dữ liệu sản phẩm
  const promises = dataUpdate.map((item) => {
    delete item._id;
    item.id_categorys = [idOrigin, idChild];
    
    return new Promise<void>((resolve, reject) => {
      // Hàm thêm sản phẩm
      this.vhQueryAutoWeb.addProduct(item)
        .then((rsp: any) => {
          if (rsp.vcode === 0) {
            console.log('updateProduct succeed', rsp);
            resolve(rsp);
          }
        }, error => {
          console.log('error', error);
          reject(error);
        });
    });
  });

  Promise.all(promises)
    .then(results => {
      // Tất cả các yêu cầu đã hoàn thành thành công
      console.log('Tất cả dữ liệu đã được cập nhật:', results);
    })
    .catch(error => {
      // Một trong các yêu cầu bị lỗi
      console.log('Có lỗi xảy ra khi cập nhật dữ liệu:', error);
    });
}