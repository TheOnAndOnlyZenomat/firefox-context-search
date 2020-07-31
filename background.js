function onCreation() {
    if (browser.runtime.lastError) {
        console.log(`Error: ${browser.runtime.lastError}`);
    } else {
        console.log("Item created successfully");
}}

browser.menus.create({
    id: "wikipedia",
    title: "Seach on Wikipdia for %s",
    contexts: ["selection"]
}, onCreation);

browser.menus.create({
    id: "youtube",
    title: "Seach on YouTube for %s",
    contexts: ["selection"]
}, onCreation);

browser.menus.create({
    id: "duckduckgo",
    title: "Seach on DuckDuckGo for %s",
    contexts: ["selection"]
}, onCreation);

browser.menus.create({
    id: "stackoverflow",
    title: "Seach on Stackoverflow for %s",
    contexts: ["selection"]
}, onCreation);

browser.menus.onClicked.addListener(function(info, tab) {
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
})