x = '5468654f6e416e644f6e6c795a656e6f6d61742f41647269616e2045696368656c6261756d'

function onCreation() {
    if (browser.runtime.lastError) {
        console.log(`Error: ${browser.runtime.lastError}`);
    } else {
        console.log("Item created successfully");
}}

browser.menus.create({
    id: "wikipedia",
    title: "Wikipdia",
    contexts: ["selection"],
    icons: {
        "16": "icons/wikipedia-icon.png",
        "32": "icons/wikipedia-icon.png"
    }
}, onCreation);

browser.menus.create({
    id: "duckduckgo",
    title: "DuckDuckGo",
    contexts: ["selection"],
    icons: {
        "16": "icons/ddg-icon.png",
        "32": "icons/ddg-icon.png"
    }
}, onCreation);

browser.menus.create({
    id: "youtube",
    title: "YouTube",
    contexts: ["selection"],
    icons: {
        "16": "icons/youtube-icon.png",
        "32": "icons/youtube-icon.png"
    }
}, onCreation);

browser.menus.create({
    id: "dict",
    title: "Dict.cc",
    contexts: ["selection"],
    icons: {
        "16": "icons/dict-icon.png",
        "32": "icons/dict-icon.png"
    }
}, onCreation);

browser.menus.create({
    id: "amazon",
    title: "Amazon",
    contexts: ["selection"],
    icons: {
        "16": "icons/amazon-icon.png",
        "32": "icons/amazon-icon.png"
    }
}, onCreation);

browser.menus.create({
    id: "stackoverflow",
    title: "Stackoverflow",
    contexts: ["selection"],
    icons: {
        "16": "icons/so-icon.png",
        "32": "icons/so-icon.png"
    }
}, onCreation);

browser.menus.create({
    id: "github",
    title: "Github",
    contexts: ["selection"],
    icons: {
        "16": "icons/github-icon.png",
        "32": "icons/github-icon.png"
    }
}, onCreation);

browser.menus.onClicked.addListener(function(info) {
    if (info.menuItemId == "wikipedia") {
        console.log(info.selectionText);
        var creating = browser.tabs.create({
            active: false,
            url:"https://wikipedia.org/wiki/"+info.selectionText
        });
    }
    else if (info.menuItemId == "youtube") {
        console.log(info.selectionText);
        var creating = browser.tabs.create({
            active: false,
            url:"https://www.youtube.com/results?search_query="+info.selectionText
        });
    }
    else if (info.menuItemId == "duckduckgo") {
        console.log(info.selectionText);
        var creating = browser.tabs.create({
            active: false,
            url:"https://duckduckgo.com/?q="+info.selectionText
        });
    }
    else if (info.menuItemId == "stackoverflow") {
        console.log(info.selectionText);
        var creating = browser.tabs.create({
            active: false,
            url:"https://stackoverflow.com/search?q="+info.selectionText
        });
    }
    else if (info.menuItemId == "dict") {
        console.log(info.selectionText);
        var creating = browser.tabs.create({
            active: false,
            url:"https://www.dict.cc/?s="+info.selectionText
        });
    }
    else if (info.menuItemId == "github") {
        console.log(info.selectionText);
        var creating = browser.tabs.create({
            active: false,
            url:"https://github.com/search?q="+info.selectionText
        });
    }
    else if (info.menuItemId == "amazon") {
        console.log(info.selectionText);
        var creating = browser.tabs.create({
            active: false,
            url:"https://www.amazon.de/s?k="+info.selectionText
        });
    }
})