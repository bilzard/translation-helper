const replaceMap = {
    "docs.python.org": ["span.pre"],
    "ar5iv.labs.arxiv.org": [
        ".ltx_tabular",
        ".ltx_biblist",
        ".ltx_cite",
        "h1.ltx_title",
        ".ltx_authors",
    ],
    "github.com": [
        "header.Header",
        "div#repository-container-header",
        "div.file-navigation",
        "div.Box-header",
        "nav.menu",
        "div.mb-3",
        "table",
        "h2#blob-path",
        ".btn",
    ]
}

function setNoTranslate(rootElement, patterns) {
    for (const selector of patterns) {
        for (const element of rootElement.querySelectorAll(selector)) {
            element.classList.add("notranslate");
        }
    }
}

const pageHost = window.location.host;
const patterns = pageHost in replaceMap ? replaceMap[pageHost] : [];
setNoTranslate(document, patterns);

const observer = new MutationObserver((mutations, _) => {
    mutations.forEach((mutation) => {
        setNoTranslate(mutation.target, patterns);
    });
});

observer.observe(document.body,
    {
        childList: true, subtree: true, attributes: false, characterData: false
    });
