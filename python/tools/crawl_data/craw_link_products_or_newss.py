import requests
from bs4 import BeautifulSoup
import pandas as pd

def crawl_list_page(url: str):
    try:
        response = requests.get(url, timeout=10, headers={"User-Agent": "Mozilla/5.0"})
        response.raise_for_status()

        soup = BeautifulSoup(response.text, "html.parser")

        items = []

        # Ví dụ: mỗi bài viết nằm trong <article class="news-item">
        for article in soup.select("article"):  
            title_tag = article.select_one("h3 a")  # tiêu đề
            desc_tag = article.select_one("p.description")  # mô tả
            img_tag = article.select_one("img")  # ảnh

            title = title_tag.get_text(strip=True) if title_tag else ""
            link = title_tag["href"] if title_tag and title_tag.has_attr("href") else ""
            desc = desc_tag.get_text(strip=True) if desc_tag else ""
            img = img_tag["src"] if img_tag and img_tag.has_attr("src") else ""

            items.append({
                "Title": title,
                "Link": link, 
                "Description": desc,
                "Image": img
            })

        return items
    except Exception as e:
        print("Error:", e)
        return []

def save_to_excel(items, filename):
    df = pd.DataFrame(items)
    df.to_excel(filename, index=False, engine="openpyxl")
    print(f"✅ Đã lưu {len(items)} items vào {filename}")

if __name__ == "__main__":
    url = "https://sales365.vn/cong-nghe-may-in-may-quet/cong-nghe-may-in-may-quet"  # Ví dụ: trang danh sách tin tức
    # url = "https://vnexpress.net/the-gioi"  # Ví dụ: trang danh sách tin tức
    items = crawl_list_page(url)
    save_to_excel(items, "news_list.xlsx")
