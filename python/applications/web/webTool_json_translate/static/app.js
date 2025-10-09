const LANGS = {
  "auto": "Auto-detect",
  "en": "English",
  "vi": "Vietnamese",
  "fr": "French",
  "de": "German",
  "es": "Spanish",
  "zh-CN": "Chinese (Simplified)",
  "ja": "Japanese",
  "ko": "Korean",
  "ru": "Russian",
  "it": "Italian",
  "pt": "Portuguese"
};

function populateSelect(id, selected) {
  const sel = document.getElementById(id);
  Object.entries(LANGS).forEach(([code, name]) => {
    const opt = document.createElement("option");
    opt.value = code;
    opt.textContent = `${name} (${code})`;
    if (code === selected) opt.selected = true;
    sel.appendChild(opt);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  populateSelect("sourceLang", "vi");
  populateSelect("targetLang", "en");

  const translateBtn = document.getElementById("translateBtn");
  const prettyBtn = document.getElementById("prettyBtn");
  const inputArea = document.getElementById("inputArea");
  const outputArea = document.getElementById("outputArea");

  translateBtn.addEventListener("click", async () => {
    const inputText = inputArea.value.trim();
    if (!inputText) {
      alert("Please paste JSON into the input area.");
      return;
    }

    let parsed;
    try {
      parsed = JSON.parse(inputText);
    } catch (e) {
      if (!confirm("Input is not valid JSON. Do you want to send raw string to translate?")) {
        return;
      }
    }

    const payload = {
      input_text: inputText,
      source_lang: document.getElementById("sourceLang").value,
      target_lang: document.getElementById("targetLang").value
    };

    translateBtn.disabled = true;
    translateBtn.textContent = "Translating...";

    try {
      const res = await fetch("/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (res.ok) {
        outputArea.value = JSON.stringify(data.translated, null, 2);
      } else {
        outputArea.value = JSON.stringify(data, null, 2);
      }
    } catch (err) {
      outputArea.value = `Error: ${err}`;
    } finally {
      translateBtn.disabled = false;
      translateBtn.textContent = "Translate";
    }
  });

  prettyBtn.addEventListener("click", () => {
    try {
      const parsed = JSON.parse(inputArea.value);
      inputArea.value = JSON.stringify(parsed, null, 2);
    } catch (e) {
      alert("Invalid JSON");
    }
  });
});