const home_block_05 = [
        {
            "title_vn": "Tín hiệu",
            "desc_vn": "Nguồn cung gia tăng quanh một hành lang công nghiệp đang có bước chuyển về kết nối.",
            "title_gb": "Signal",
            "desc_gb": "Increasing supply along an industrial corridor that is shifting toward improved connectivity."
        },
        {
            "title_vn": "Diễn giải",
            "desc_vn": "Cạnh tranh sẽ dịch từ diện tích và giá sang tiêu chuẩn, thời gian bàn giao và khả năng phục vụ ngành.",
            "title_gb": "Interpretation",
            "desc_gb": "Competition will shift from area and price toward product standards, delivery timelines, and the ability to serve specific industries."
        },
        {
            "title_vn": "Hàm ý",
            "desc_vn": "Cần kiểm định lại ngành mục tiêu, chuẩn sản phẩm và lộ trình đưa hàng ra thị trường.",
            "title_gb": "Implications",
            "desc_gb": "Revalidate target sectors, product standards, and the go‑to‑market roadmap."
        }
    ];

const idSelectLangComp = 'id_chon_ngon_ngu_o_day_ne';
let currentLang = 'vn';

let langObserver = null;

function refreshCoreValuesLanguage() {
    const items = document.querySelectorAll('.home_block_05 .item');

    items.forEach((item, index) => {
        const data = home_block_05[index];

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