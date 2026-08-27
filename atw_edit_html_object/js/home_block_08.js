const home_block_08 = [
        {
            "category_vn": "Báo cáo & Ấn phẩm chiến lược",
            "title_vn": "Bản đồ cơ hội công nghiệp theo các hành lang tăng trưởng mới",
            "subtitle_vn": "Tháng 08 · 2026",
            "desc_vn": "Một khung theo dõi vị trí, hạ tầng và ngành để đọc cơ hội trước khi định hình quỹ đất.",
            "category_gb": "Reports & Strategic Publications",
            "title_gb": "Industrial opportunity map for emerging growth corridors",
            "subtitle_gb": "August 2026",
            "desc_gb": "A framework to track location, infrastructure, and sectors to identify opportunities before shaping land portfolios.",
            "btn_vn": "Đọc ấn phẩm",
            "btn_gb": "Read publication"
        },
        {
            "category_vn": "Nhịp đập thị trường",
            "title_vn": "Khi hạ tầng mở đường, nguồn cung không tự động trở thành lợi thế",
            "subtitle_vn": "Cập nhật tuần",
            "desc_vn": "Những điều kiện cần kiểm chứng sau một thông tin đầu tư hạ tầng trọng yếu.",
            "category_gb": "Market Pulse",
            "title_gb": "When infrastructure paves the way, supply doesn't automatically become an advantage",
            "subtitle_gb": "Weekly update",
            "desc_gb": "Key conditions to validate after a major infrastructure investment announcement.",
            "btn_vn": "Đọc ấn phẩm",
            "btn_gb": "Read publication"
        },
        {
            "category_vn": "Phân tích chuyên sâu",
            "title_vn": "Lấp đầy không bắt đầu ở đội ngũ thương mại",
            "subtitle_vn": "Góc nhìn MAXON Intel",
            "desc_vn": "Vì sao nhóm ngành, tiêu chuẩn sản phẩm và phân kỳ phải được quyết định từ sớm.",
            "category_gb": "In-depth Analysis",
            "title_gb": "Occupancy doesn't start with the commercial team",
            "subtitle_gb": "A MAXON Intel perspective",
            "desc_gb": "Why sector selection, product standards, and phasing must be decided early.",
            "btn_vn": "Đọc ấn phẩm",
            "btn_gb": "Read publication"
        }
    ];

const idSelectLangComp = 'id_chon_ngon_ngu_o_day_ne';
let currentLang = 'vn';

let langObserver = null;

function refreshCoreValuesLanguage() {
    const items = document.querySelectorAll('.home_block_08 .item');

    items.forEach((item, index) => {
        const data = home_block_08[index];

        item.querySelector('h3').textContent =
            data['title_' + currentLang] || data.title_vn;

        item.querySelector('p.desc').textContent =
            data['desc_' + currentLang] || data.desc_vn;

        item.querySelector('p.subtitle').textContent =
            data['subtitle_' + currentLang] || data.subtitle_vn;

        item.querySelector('span.category').textContent =
            data['category_' + currentLang] || data.category_vn;

        item.querySelector('.btn p').textContent =
            data['btn_' + currentLang] || data.btn_vn;
    });
}

function getCurrentLanguage() {
    const parentDoc = window.parent.document;
    const langComp = parentDoc.getElementById(idSelectLangComp);
    const img = langComp?.querySelector('app-national-flag img');
    if (!img) return 'vn';
    return (img.alt || 'vn').toLowerCase();
}

function watchLanguageChange() {
    const parentDoc = window.parent.document;

    // Ngắt observer cũ nếu có, tránh rò rỉ / trùng lặp khi hàm được gọi lại
    if (langObserver) {
        langObserver.disconnect();
        langObserver = null;
    }

    currentLang = getCurrentLanguage();
    refreshCoreValuesLanguage();

    // Quan sát ở body (hoặc 1 container cha ổn định, không bị Angular xóa/tạo lại)
    // subtree:true để bắt cả khi node img nằm sâu bên trong bị thay thế
    langObserver = new MutationObserver(() => {
        const lang = getCurrentLanguage();
        if (lang !== currentLang) {
            currentLang = lang;
            refreshCoreValuesLanguage();
        }
    });

    langObserver.observe(parentDoc.body, {
        attributes: true,
        attributeFilter: ['alt'],
        subtree: true,
        childList: true // để bắt cả trường hợp cả app-national-flag bị destroy/tạo lại (node mới có alt khác ngay từ đầu)
    });
}

watchLanguageChange();