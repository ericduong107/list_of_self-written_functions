// ==================VietHas==================
/**
 * Lấy ra số nguyên trong danh sách thuộc tính chứa giá trị
 * 
 * @param item: Chứa customized
 * @param properties: Chứa danh sách keyName cần check (Theo thứ tự thuộc tính nào cần ưu tiên - vd: maxTranslateX > maxTranslate > -30)
 * @param defaultValue: Chứa giá trị mặc định nếu tất cả thuộc tính truyền vào đều null hoặc undefined thì lấy default
 */
function getNumberInCustomizeMap(item: any, properties: any = [], defaultValue: number) {
    let temp: any = undefined; // Khởi tạo bằng undefined để đảm bảo có thể kiểm tra đúng hơn.
    if (properties.length > 0) {
        properties.forEach((value: any) => {
            if (temp === undefined && item[value] !== undefined && item[value] !== null) {
                temp = item[value] === "0" || item[value] === 0 ? 0 : Number(item[value]);
            }
        });
    }
    return (temp === undefined || isNaN(temp)) ? defaultValue : temp;
}

const temp : any = {
    // maxTranslateX: 0,
    maxTranslate: "500"
};
const temps : any = ["maxTranslateX", "maxTranslate"];


console.log("Keets quar", getNumberInCustomizeMap(temp, temps, -30));
// getNumberInCustomizeMap(temp, temps, -30)
