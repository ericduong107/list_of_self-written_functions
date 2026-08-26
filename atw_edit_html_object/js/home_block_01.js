const home_block_01 = [
        {
            "title_vn": "Lựa chọn mô hình phát triển?",
            "desc_vn": "Làm rõ loại hình tài sản, quy mô, tiêu chuẩn kỹ thuật và các phương án phân kỳ phù hợp với điều kiện thực tế.",

            "title_gb": "Choosing a development model?",
            "desc_gb": "Clarify the type of asset, scale, technical standards, and phasing options that are appropriate to the actual conditions.",
        },
        {
            "title_vn": "Chân dung khách hàng mục tiêu?",
            "desc_vn": "Khoanh vùng nhóm ngành, tệp doanh nghiệp và dòng vốn phù hợp với lợi thế cạnh tranh riêng của dự án.",

            "title_gb": "What is the profile of the target customer?",
            "desc_gb": "Identify the industry sectors, business segments, and capital flows that best align with the project's unique competitive advantages.",
        },
        {
            "title_vn": "Thiết lập ưu tiên chiến lược?",
            "desc_vn": "Xác định các điều kiện cần kiểm định, điều chỉnh hoặc đầu tư hoàn thiện trước khi bước sang giai đoạn tiếp theo.",

            "title_gb": "Setting strategic priorities?",
            "desc_gb": "Identify the conditions that need to be tested, adjusted, or improved through investment before moving on to the next phase.",
        }
    ];

const idSelectLangComp = 'id_chon_ngon_ngu_o_day_ne';
let currentLang = 'vn';

let langObserver = null;

function refreshCoreValuesLanguage() {
    const items = document.querySelectorAll('.home_block_01 .item');

    items.forEach((item, index) => {
        const data = home_block_01[index];

        item.querySelector('h3').textContent =
            data['title_' + currentLang] || data.title_vn;

        item.querySelector('p').textContent =
            data['desc_' + currentLang] || data.desc_vn;
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