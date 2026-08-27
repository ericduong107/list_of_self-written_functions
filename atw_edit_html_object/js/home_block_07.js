const home_block_07 = [
        {
            "title_vn": "MAXON Intel",
            "subtitle_vn": "Nghiên cứu & hoạch định",
            "desc_vn": "Giải mã dữ liệu, kiểm định địa điểm, cấu trúc sản phẩm và lộ trình thương mại.",
            "title_gb": "MAXON Intel",
            "subtitle_gb": "Research & Planning",
            "desc_gb": "Analyze data, validate sites, define product structures, and map commercial roadmaps."
        },
        {
            "title_vn": "MAXON Industrial",
            "subtitle_vn": "Xúc tiến & triển khai",
            "desc_vn": "Kết nối mạng lưới B2B, dòng vốn FDI và các cơ hội giao dịch phù hợp.",
            "title_gb": "MAXON Industrial",
            "subtitle_gb": "Promotion & Deployment",
            "desc_gb": "Connect B2B networks, FDI capital flows, and relevant transaction opportunities."
        },
        {
            "title_vn": "MAXON Managed",
            "subtitle_vn": "Vận hành & tối ưu",
            "desc_vn": "Theo dõi hiệu quả tài sản, vận hành và thu thập tín hiệu từ thị trường thực tế.",
            "title_gb": "MAXON Managed",
            "subtitle_gb": "Operations & Optimization",
            "desc_gb": "Monitor asset performance and operations while collecting signals from the real market."
        },
        {
            "title_vn": "MAXON Creative",
            "subtitle_vn": "Thương hiệu & marketing",
            "desc_vn": "Chuyển chiến lược thành hệ nhận diện, nội dung và điểm chạm thị trường.",
            "title_gb": "MAXON Creative",
            "subtitle_gb": "Branding & Marketing",
            "desc_gb": "Translate strategy into brand identity, content, and market touchpoints."
        }
    ];

const idSelectLangComp = 'id_chon_ngon_ngu_o_day_ne';
let currentLang = 'vn';

let langObserver = null;

function refreshCoreValuesLanguage() {
    const items = document.querySelectorAll('.home_block_07 .item');

    items.forEach((item, index) => {
        const data = home_block_07[index];

        item.querySelector('h3').textContent =
            data['title_' + currentLang] || data.title_vn;

        item.querySelector('p.desc').textContent =
            data['desc_' + currentLang] || data.desc_vn;

        item.querySelector('p.subtitle').textContent =
            data['subtitle_' + currentLang] || data.subtitle_vn;
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