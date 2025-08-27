import requests
from bs4 import BeautifulSoup
import pandas as pd

def crawl_data(url: str):
    try:
        response = requests.get(url, timeout=10, headers={"User-Agent": "Mozilla/5.0"})
        response.raise_for_status()

        soup = BeautifulSoup(response.text, "html.parser")

        title = soup.title.string if soup.title else "Không có tiêu đề"
        links = [a['href'] for a in soup.find_all('a', href=True)]
        paragraphs = [p.get_text(strip=True) for p in soup.find_all("p")]

        return {
            "title": title,
            "links": links,
            "paragraphs": paragraphs
        }
    except Exception as e:
        return {"error": str(e)}

def save_to_excel(data: dict, filename: str):
    # Tạo DataFrame cho links
    df_links = pd.DataFrame(data.get("links", []), columns=["Links"])

    # Tạo DataFrame cho paragraphs
    df_paragraphs = pd.DataFrame(data.get("paragraphs", []), columns=["Paragraphs"])

    # Ghi ra Excel với nhiều sheet
    with pd.ExcelWriter(filename, engine="openpyxl") as writer:
        pd.DataFrame([[data.get("title")]], columns=["Title"]).to_excel(writer, sheet_name="Title", index=False)
        df_links.to_excel(writer, sheet_name="Links", index=False)
        df_paragraphs.to_excel(writer, sheet_name="Paragraphs", index=False)

if __name__ == "__main__":
    url = "https://vnexpress.net/"  # Thay link bạn muốn crawl
    data = crawl_data(url)
    save_to_excel(data, "crawl_result.xlsx")
    print("Đã lưu dữ liệu ra file crawl_result.xlsx")
