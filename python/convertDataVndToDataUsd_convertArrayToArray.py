import json

# Dữ liệu đầu vào (đã được rút gọn để minh họa)
data = [
        {
          "id_category": "categorys1kecPifnewK",

          "selling": "true",
          "manysize": "false",
          "manylot": "false",
          "brand": "Toyota",
          "cost_stock_last": 0,
          "img": "https://raw.githubusercontent.com/Viethas-App/Sales365-Desktop-Electron/refs/heads/main/assets/sales-vehicles/innova.jpg",
          "tax": 0,
          "name": "Innova Car",
          "quantity": 0,
          "quantity_branch": {},
          "warning_number": 2,
          "item_code": "",
          "type": 3,
          "delete_hidden": "false",
          "units": [
            {
              "barcode": "8099696612925",
              "default": "true",
              "price": 800000000,
              "price2": 755000000,
              "price_import": 700000000,
              "ratio": 1,
              "unit": "Piece"
            }
          ]
        },
        {
          "id_category": "categorys2KdOcmunDPq",

          "selling": "true",
          "img": "https://raw.githubusercontent.com/Viethas-App/Sales365-Desktop-Electron/refs/heads/main/assets/sales-vehicles/sua-may-tinh.jpg",
          "tax": 0,
          "name": "Regular vehicle maintenance",
          "type": 2,
          "delete_hidden": "false",
          "units": [
            {
              "barcode": "6024185762294",
              "default": "true",
              "price": 1000000,
              "ratio": 1,
              "unit": "Car"
            }
          ]
        },
        {
            "id_category": "categorys1kecPifnewK",
  
            "selling": "true",
            "manysize": "false",
            "manylot": "false",
            "brand": "Honda",
            "cost_stock_last": 0,
            "img": "https://raw.githubusercontent.com/Viethas-App/Sales365-Desktop-Electron/refs/heads/main/assets/sales-vehicles/cbr150.png",
            "tax": 0,
            "name": "CBR150r",
            "quantity": 0,
            "quantity_branch": {},
            "warning_number": 2,
            "item_code": "",
            "type": 3,
            "delete_hidden": "false",
            "units": [
              {
                "barcode": "7064686351004",
                "default": "true",
                "price": 120000000,
                "price2": 120000000,
                "price_import": 110000000,
                "ratio": 1,
                "unit": "Piece"
              }
            ]
        },
        {
            "id_category": "categorys1kecPifnewK",
  
            "selling": "true",
            "manysize": "false",
            "manylot": "false",
            "brand": "Kawasaki",
            "cost_stock_last": 0,
            "img": "https://raw.githubusercontent.com/Viethas-App/Sales365-Desktop-Electron/refs/heads/main/assets/sales-vehicles/ninja-h2.jpg",
            "tax": 0,
            "name": "Ninja H2",
            "quantity": 0,
            "quantity_branch": {},
            "warning_number": 2,
            "item_code": "",
            "type": 3,
            "delete_hidden": "false",
            "units": [
              {
                "barcode": "9048880642685",
                "default": "true",
                "price": 1200000000,
                "price2": 1200000000,
                "price_import": 1100000000,
                "ratio": 1,
                "unit": "Piece"
              }
            ]
        },
        {
            "id_category": "categorys1kecPifnewK",
  
            "selling": "true",
            "manysize": "false",
            "manylot": "false",
            "brand": "Vinfast",
            "cost_stock_last": 0,
            "img": "https://raw.githubusercontent.com/Viethas-App/Sales365-Desktop-Electron/refs/heads/main/assets/sales-vehicles/vf3.jpg",
            "tax": 0,
            "name": "VF3",
            "quantity": 0,
            "quantity_branch": {},
            "warning_number": 2,
            "item_code": "",
            "type": 3,
            "delete_hidden": "false",
            "units": [
              {
                "barcode": "9000650944652",
                "default": "true",
                "price": 299000000,
                "price2": 299000000,
                "price_import": 290000000,
                "ratio": 1,
                "unit": "Piece"
              }
            ]
        },
        {
            "id_category": "categorys1kecPifnewK",
  
            "selling": "true",
            "manysize": "false",
            "manylot": "false",
            "brand": "Vinfast",
            "cost_stock_last": 0,
            "img": "https://raw.githubusercontent.com/Viethas-App/Sales365-Desktop-Electron/refs/heads/main/assets/sales-vehicles/feliz-s.png",
            "tax": 0,
            "name": "Feliz S",
            "quantity": 0,
            "quantity_branch": {},
            "warning_number": 2,
            "item_code": "",
            "type": 3,
            "delete_hidden": "false",
            "units": [
              {
                "barcode": "7057711111760",
                "default": "true",
                "price": 30000000,
                "price2": 30000000,
                "price_import": 25000000,
                "ratio": 1,
                "unit": "Piece"
              }
            ]
        },
        {
            "id_category": "categorys1kecPifnewK",
  
            "selling": "true",
            "manysize": "false",
            "manylot": "false",
            "brand": "Vinfast",
            "cost_stock_last": 0,
            "img": "https://raw.githubusercontent.com/Viethas-App/Sales365-Desktop-Electron/refs/heads/main/assets/sales-vehicles/evo-lite-200.jpg",
            "tax": 0,
            "name": "Evo Lite 200",
            "quantity": 0,
            "quantity_branch": {},
            "warning_number": 2,
            "item_code": "",
            "type": 3,
            "delete_hidden": "false",
            "units": [
              {
                "barcode": "4098539014205",
                "default": "true",
                "price": 20000000,
                "price2": 20000000,
                "price_import": 20000000,
                "ratio": 1,
                "unit": "Piece"
              }
            ]
        },
        {
            "id_category": "categorys1kecPifnewK",
  
            "selling": "true",
            "manysize": "false",
            "manylot": "false",
            "brand": "Dat Bike",
            "cost_stock_last": 0,
            "img": "https://raw.githubusercontent.com/Viethas-App/Sales365-Desktop-Electron/refs/heads/main/assets/sales-vehicles/quantum-s1.jpg",
            "tax": 0,
            "name": "Quantum S1",
            "quantity": 0,
            "quantity_branch": {},
            "warning_number": 2,
            "item_code": "",
            "type": 3,
            "delete_hidden": "false",
            "units": [
              {
                "barcode": "4086705618096",
                "default": "true",
                "price": 30000000,
                "price2": 30000000,
                "price_import": 25000000,
                "ratio": 1,
                "unit": "Piece"
              }
            ]
        },
        {
            "id_category": "categorys1kecPifnewK",
  
            "selling": "true",
            "manysize": "false",
            "manylot": "false",
            "brand": "Dat Bike",
            "cost_stock_last": 0,
            "img": "https://raw.githubusercontent.com/Viethas-App/Sales365-Desktop-Electron/refs/heads/main/assets/sales-vehicles/weaver-200.jpg",
            "tax": 0,
            "name": "Weaver 200",
            "quantity": 0,
            "quantity_branch": {},
            "warning_number": 2,
            "item_code": "",
            "type": 3,
            "delete_hidden": "false",
            "units": [
              {
                "barcode": "4054181133367",
                "default": "true",
                "price": 30000000,
                "price2": 30000000,
                "price_import": 25000000,
                "ratio": 1,
                "unit": "Piece"
              }
            ]
        },
        {
            "id_category": "categorys1kecPifnewK",
  
            "selling": "true",
            "manysize": "false",
            "manylot": "false",
            "brand": "Yamaha",
            "cost_stock_last": 0,
            "img": "https://raw.githubusercontent.com/Viethas-App/Sales365-Desktop-Electron/refs/heads/main/assets/sales-vehicles/r15.jpg",
            "tax": 0,
            "name": "R15",
            "quantity": 0,
            "quantity_branch": {},
            "warning_number": 2,
            "item_code": "",
            "type": 3,
            "delete_hidden": "false",
            "units": [
              {
                "barcode": "9092710801669",
                "default": "true",
                "price": 110000000,
                "price2": 110000000,
                "price_import": 100000000,
                "ratio": 1,
                "unit": "Piece"
              }
            ]
        },
        {
            "id_category": "categorys1kecPifnewK",
  
            "selling": "true",
            "manysize": "false",
            "manylot": "false",
            "brand": "Yamaha",
            "cost_stock_last": 0,
            "img": "https://raw.githubusercontent.com/Viethas-App/Sales365-Desktop-Electron/refs/heads/main/assets/sales-vehicles/sirius-fi.jpg",
            "tax": 0,
            "name": "Sirius FI cast rim",
            "quantity": 0,
            "quantity_branch": {},
            "warning_number": 2,
            "item_code": "",
            "type": 3,
            "delete_hidden": "false",
            "units": [
              {
                "barcode": "5064294448224",
                "default": "true",
                "price": 23000000,
                "price2": 23000000,
                "price_import": 20000000,
                "ratio": 1,
                "unit": "Piece"
              }
            ]
        },
        {
          "id_category": "categorys2KdOcmunDPq",

          "selling": "true",
          "img": "https://raw.githubusercontent.com/Viethas-App/Sales365-Desktop-Electron/refs/heads/main/assets/sales-vehicles/noi-that-xe-hoi.jpg",
          "tax": 0,
          "name": "Car interior upgrade",
          "type": 2,
          "delete_hidden": "false",
          "units": [
            {
              "barcode": "6016550709487",
              "default": "true",
              "price": 10000000,
              "ratio": 1,
              "unit": "Category"
            }
          ]
        }
      ]

# Hàm chuyển đổi VND sang USD (tỷ giá 1 USD = 24,000 VND)
def vnd_to_usd(vnd_amount):
    return round(vnd_amount / 24000, 2)

# Duyệt qua từng sản phẩm và chuyển đổi giá
for product in data:
    if "units" in product:
        for unit in product["units"]:
            if "price" in unit:
                unit["price"] = vnd_to_usd(unit["price"])
            if "price2" in unit:
                unit["price2"] = vnd_to_usd(unit["price2"])
            if "price_import" in unit:
                unit["price_import"] = vnd_to_usd(unit["price_import"])

# In kết quả (có thể lưu vào file nếu cần)
print(json.dumps(data, indent=2))