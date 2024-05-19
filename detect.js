chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
    if (response.message === 'url_change') {
        let url = response.tab.url

        if (!validUrl(url)) {
            alert("The URL you visited is a potentially malicious one. Type the URL yourself to avoid scams.")
        }

    }
});

function validUrl(url) {
    // Character that looks like the English letter 'a' but isn't
    // It's called the CYRILLIC SMALL LETTER A
    // Unicode - U+0430
    if (url.includes("а")) {
        return false;
    }

    return true;
}