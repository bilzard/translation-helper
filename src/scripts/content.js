const replaceMap = {
    "docs.python.org": ["span.pre"],
    "ar5iv.labs.arxiv.org": [
        ".ltx_tabular",
        ".ltx_biblist",
        ".ltx_cite",
        "h1.ltx_title",
        ".ltx_authors",
    ],
}

const pageHost = window.location.host;
const patterns = pageHost in replaceMap ? replaceMap[pageHost] : [];

for (const selector of patterns) {
    for (const element of document.querySelectorAll(selector)) {
        element.classList.add("notranslate");
    }
}
