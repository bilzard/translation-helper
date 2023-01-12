const replaceMap = {
    "docs.python.org": [
        "span.pre",
    ],
    "ar5iv.labs.arxiv.org": [
        ".ltx_tabular",
        ".ltx_biblist",
        ".ltx_cite",
        "h1.ltx_title",
        ".ltx_authors",
        ".ltx_listing",  // pseudo-code
    ],
    "github.com": [
        "nav",
        "header.Header",
        "div#repository-container-header",
        "div.file-navigation",
        "div.Box-header",
        "nav.menu",
        "div.mb-3",
        "h2#blob-path",
        ".btn",
        "h1.vcard-names",
        "title",
        "a[itemprop='name codeRepository']",
        "div.blob-code-content", // code
        ".blob-code",
    ],
    "notebooks.githubusercontent.com": [
        "div.jp-CodeCell",  // code cell
    ],
    "paperswithcode.com": [
        "table",
        "div.paper-title",
        "a.code-table-link",
        "ul.navbar-nav",
        "div#libraries-short-list",
        "div.task-datasets",
        "div.paper-datasets",
        "div.paper-tasks",
        "span.name",
        "div.sota-select",
    ],
    "arxiv.org": [
        "h1.title",
        "div.authors",
        "title",
        "div.extra-services",
        "div#header",
        "div.subheader",
    ],
    "www.kaggle.com": [
        "i",
        "button",
        "input",
        "nav",
        "div[data-testid='searchContainer']",
        "div.profile__user-container",
        "div.MathJax_Display",
    ],
    "scikit-learn.org": [
        "span.pre",
        ".sig",
        "div.sk-navbar-collapse",
        "span.classifier",
    ],
    "ipython.readthedocs.io": [
        "span.pre",
    ],
    "localhost:8888": [
        "div.jp-CodeCell",
        "div[role='navigation']",
        "div#filebrowser",
        "div.lm-TabBar",
        "div.CodeMirror-code",
    ],
    "pandas.pydata.org": [
        "span.pre",
    ],
    "towardsdatascience.com": [
        "pre",
    ]
}

const commonPatterns = [
    "pre",
    "i",
    "cite",
]

function setNoTranslate(rootElement, patterns) {
    for (const selector of patterns) {
        for (const element of rootElement.querySelectorAll(selector)) {
            element.classList.add("notranslate");
        }
    }
}

function waitForElements(selector, rootNode = document.body) {
    return new Promise(resolve => {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (typeof node.matches === "function" && node.matches(selector)) {
                        // TODO: suppress unnecessary function calls
                        resolve(document.querySelectorAll(selector));
                        observer.disconnect();
                    }
                });
            });
        });

        observer.observe(rootNode, {
            attributes: false,
            childList: true,
            subtree: true
        });
    });
}

const pageHost = window.location.host;
if (pageHost in replaceMap) {
    const patterns = replaceMap[pageHost];
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
}
/**
 * common rule
 *
 * insertion is executed only for static web pages (to avoid unintended consumption of computing resource)
 */
setNoTranslate(document, commonPatterns)

/**
 * Experimental: set `notranslate` class for MathJax Elements
 *
 * current issues:
 *   - redundant function call
 *   - optimal delay time varies in client environments
 */
waitForElements("span.MathJax").then(nodes => {
    setTimeout(() => {
        nodes.forEach(node => {
            console.log("MathJax element was found")
            node.classList.add("notranslate");
        });
    }, 500);
});