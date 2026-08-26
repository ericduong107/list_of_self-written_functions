const home_block_02 = [
        {
            "title_vn": "Thu thập tín hiệu",
            "desc_vn": "Tập hợp dữ liệu về cung cầu, hạ tầng, ngành, doanh nghiệp và các chuyển động có liên quan đến tài sản.",
            "title_gb": "Gather market signals",
            "desc_gb": "Collect data on supply and demand, infrastructure, industry, companies, and movements related to the asset."
        },
        {
            "title_vn": "Đối chiếu bối cảnh",
            "desc_vn": "Đặt dữ liệu vào đúng vị trí, loại hình tài sản, phân khúc khách hàng và thời điểm phát triển.",
            "title_gb": "Contextualize the setting",
            "desc_gb": "Situate the data in the appropriate context — asset type, customer segment, and timing of development."
        },
        {
            "title_vn": "Kiểm định giả định",
            "desc_vn": "Kiểm tra các điều kiện quyết định tính khả thi như nguồn cầu, cạnh tranh, kết nối và tiêu chuẩn sản phẩm.",
            "title_gb": "Validate assumptions",
            "desc_gb": "Test the conditions that determine feasibility, such as demand sources, competition, connectivity, and product standards."
        },
        {
            "title_vn": "Chuyển hóa thành hành động",
            "desc_vn": "Đề xuất mô hình, phân kỳ, ngành mục tiêu và các ưu tiên thương mại có thể triển khai.",
            "title_gb": "Translate into action",
            "desc_gb": "Propose development models, phasing, target sectors, and implementable commercial priorities."
        }
    ];

const idSelectLangComp = 'id_chon_ngon_ngu_o_day_ne';
let currentLang = 'vn';

let langObserver = null;

function refreshCoreValuesLanguage() {
    const items = document.querySelectorAll('.home_block_02 .item');

    items.forEach((item, index) => {
        const data = home_block_02[index];

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