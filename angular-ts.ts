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

// Test cases for getNumberInCustomizeMap function
function testGetNumberInCustomizeMap() {
    const defaultValue = -1;

    const testCases = [
        {
            id: 1,
            description: "Danh sách thuộc tính rỗng",
            input: { item: { a: 10 }, properties: [], defaultValue },
            expected: defaultValue,
        },
        {
            id: 2,
            description: "Thuộc tính đầu tiên có giá trị hợp lệ (number)",
            input: { item: { a: 10, b: 20 }, properties: ["a", "b"], defaultValue },
            expected: 10,
        },
        {
            id: 3,
            description: "Thuộc tính đầu tiên null, thuộc tính thứ hai hợp lệ (number)",
            input: { item: { a: null, b: 20 }, properties: ["a", "b"], defaultValue },
            expected: 20,
        },
        {
            id: 4,
            description: "Thuộc tính đầu tiên undefined, thuộc tính thứ hai hợp lệ (string)",
            input: { item: { a: undefined, b: "30" }, properties: ["a", "b"], defaultValue },
            expected: 30,
        },
        {
            id: 5,
            description: "Tất cả thuộc tính đều null hoặc undefined",
            input: { item: { a: null, b: undefined }, properties: ["a", "b"], defaultValue },
            expected: defaultValue,
        },
        {
            id: 6,
            description: "Giá trị truyền vào là 0 (number)",
            input: { item: { a: 0, b: 20 }, properties: ["a", "b"], defaultValue },
            expected: 0,
        },
        {
            id: 7,
            description: "Giá trị truyền vào là '0' (string)",
            input: { item: { a: "0", b: 20 }, properties: ["a", "b"], defaultValue },
            expected: 0,
        },
        {
            id: 8,
            description: "Thuộc tính chứa giá trị không hợp lệ (NaN)",
            input: { item: { a: "abc", b: "def" }, properties: ["a", "b"], defaultValue },
            expected: defaultValue,
        },
        {
            id: 9,
            description: "Ưu tiên lấy giá trị thuộc tính đầu tiên hợp lệ",
            input: { item: { a: "50", b: "60" }, properties: ["a", "b"], defaultValue },
            expected: 50,
        },
        {
            id: 10,
            description: "Thuộc tính đầu tiên '', thuộc tính thứ hai hợp lệ (string)",
            input: { item: { a: "", b: "60" }, properties: ["a", "b"], defaultValue },
            expected: 60,
        },
        {
            id: 11,
            description: "Thuộc tính đầu tiên '', thuộc tính thứ hai hợp lệ (number)",
            input: { item: { a: "", b: 60 }, properties: ["a", "b"], defaultValue },
            expected: 60,
        },
        {
            id: 12,
            description: "Thuộc tính đầu tiên '0.6', thuộc tính thứ hai hợp lệ (number)",
            input: { item: { a: "0.6", b: 60 }, properties: ["a", "b"], defaultValue },
            expected: 0.6,
        },
        {
            id: 13,
            description: "Thuộc tính đầu tiên '0.6s', thuộc tính thứ hai hợp lệ (number)",
            input: { item: { a: "0.6s", b: 60 }, properties: ["a", "b"], defaultValue },
            expected: 60,
        },
        {
            id: 14,
            description: "Thuộc tính đầu tiên '0,6', thuộc tính thứ hai hợp lệ (number)",
            input: { item: { a: "0,6", b: 60 }, properties: ["a", "b"], defaultValue },
            expected: 0.6,
        },
        {
            id: 15,
            description: "Thuộc tính đầu tiên 0.6, thuộc tính thứ hai hợp lệ (number)",
            input: { item: { a: 0.6, b: 60 }, properties: ["a", "b"], defaultValue },
            expected: 0.6,
        },
    ];

    testCases.forEach((testCase, index) => {
        const startTime = performance.now();

        const { item, properties, defaultValue } = testCase.input;
        const actual = getNumberInCustomizeMap(item, properties, defaultValue);

        const endTime = performance.now();
        console.log(
            `STT: ${index + 1}\n` + 
            `Test case id-${testCase.id}: ${testCase.description}\n` +
            `Expected: ${testCase.expected}, Actual: ${actual}\n` +
            `Result: ${actual === testCase.expected ? "✅ Passed" : "❌ Failed"}\n` +
            `Excute time: ${endTime - startTime} millisecond \n`
        );
    });
}

testGetNumberInCustomizeMap();
