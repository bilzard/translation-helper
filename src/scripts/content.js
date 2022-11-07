const replaceMap = {
    "https://docs.python.org/3/": ["span.pre"],
}

const pageUrl = window.location.href;
const urlPatterns = Object.keys(replaceMap);

// disable translation for all matched elements
for (const urlPattern of urlPatterns) {
    if (pageUrl.startsWith(urlPattern)) {
        for (const selector of replaceMap[urlPattern]) {
            for (const element of document.querySelectorAll(selector)) {
                element.classList.add("notranslate");
            }
        }
        break;
    }
}
