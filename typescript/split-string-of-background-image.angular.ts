function getValue(str: any) {
    const regex = /\b(url|linear-gradient|conic-gradient|radial-gradient)\(([\s\S]*?)\)/g;
    const customize: any = {};

    for (const match of str.matchAll(regex)) {
        const [, type, value] = match;
        const values = value.split(",").map((v: string) => v.trim());

        if (type === "url") {
            customize.bg_image_url = value.replace(/['"]/g, ""); // Loại bỏ dấu nháy
        } 
        else if (type === "linear-gradient") {
            const directionRegex = /^(\d+)deg$|^(bottom|top|left|right)$/;
            let direction = "90"; // Mặc định 90 nếu không có hướng
            let directionKeyword = "";

            // Kiểm tra giá trị đầu tiên có phải là hướng không
            if (directionRegex.test(values[0])) {
                const matchDir = values.shift()!;
                if (matchDir.endsWith("deg")) {
                    direction = matchDir.replace("deg", ""); // Chỉ lấy số
                } else {
                    directionKeyword = matchDir;
                }
            }

            customize.bg_image_linear_direction = direction;
            if (directionKeyword) {
                customize.bg_image_linear_direction_keyword = directionKeyword;
            }
            customize.bg_image_linear_color = values.slice(1).map(parseColor);
        } 
        else if (type === "radial-gradient") {
            let shape = "ellipse", size = "closest-side", positionX = "50%", positionY = "50%";
            const shapeSizePosRegex = /^(circle|ellipse)?\s*(\w+)?\s*at\s*(\d+%|\w+)\s+(\d+%|\w+)$/;

            if (shapeSizePosRegex.test(values[0])) {
                const match = values.shift()!.match(shapeSizePosRegex);
                if (match) {
                    shape = match[1] || "ellipse";
                    size = match[2] || "closest-side";
                    positionX = match[3] || "50%";
                    positionY = match[4] || "50%";
                }
            }

            customize.bg_image_radial_shape = shape;
            customize.bg_image_radial_size = size;
            customize.bg_image_radial_position_x = positionX;
            customize.bg_image_radial_position_y = positionY;
            customize.bg_image_radial_color = values.slice(1).map(parseColor);
        } 
        else if (type === "conic-gradient") {
            let angle = "0", positionX = "50%", positionY = "50%";
            const anglePositionRegex = /^from\s+(\d+)deg\s+at\s+(\d+%|\w+)\s+(\d+%|\w+)$/;

            if (anglePositionRegex.test(values[0])) {
                const match = values.shift()!.match(anglePositionRegex);
                if (match) {
                    angle = match[1] || "0";
                    positionX = match[2] || "50%";
                    positionY = match[3] || "50%";
                }
            }

            customize.bg_image_conic_angle = angle;
            customize.bg_image_conic_position_x = positionX;
            customize.bg_image_conic_position_y = positionY;
            customize.bg_image_conic_color = values.map(parseColor);
        }
    }

    console.log("customize", customize);
}

// Hàm tách màu và phần trăm nếu có
function parseColor(color: string) {
    const match = color.match(/^(.+?)\s+(\d+%|0)$/);
    if (match) {
        return { color: match[1], percentage: match[2] };
    }
    return { color, percentage: "100%" }; // Nếu không có %, mặc định 100%
}

const arrTemp1: any = [
    { index: 0, str: "url(image.png)", customize: {} },
    { index: 1, str: "url('image.png')", customize: {} },
    { index: 2, str: "linear-gradient(to right, red, blue)", customize: {} },
    { index: 3, str: "linear-gradient(120deg, red 10%, blue 90%)", customize: {} },
    { index: 4, str: "radial-gradient(circle farthest-corner at 30% 40%, gray 30%, black 70%)", customize: {} },
    { index: 5, str: "conic-gradient(from 45deg at 20% 30%, yellow 10%, green 80%)", customize: {} },
];

arrTemp1.forEach((item: any) => {
    console.log(`Stt: ${item.index}`);
    getValue(item.str);
});
