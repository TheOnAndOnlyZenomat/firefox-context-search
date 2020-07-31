x = '5468654f6e416e644f6e6c795a656e6f6d61742f41647269616e2045696368656c6261756d'

function onCreation() {
    if (browser.runtime.lastError) {
        console.log(`Error: ${browser.runtime.lastError}`);
    } else {
        console.log("Item created successfully");
}}

browser.menus.create({
    id: "wikipedia",
    title: "Wikipdia: '%s'",
    contexts: ["selection"],
}, onCreation);

browser.menus.create({
    id: "youtube",
    title: "YouTube:'%s'",
    contexts: ["selection"]
}, onCreation);

browser.menus.create({
    id: "duckduckgo",
    title: "DuckDuckGo: '%s'",
    contexts: ["selection"]
}, onCreation);

browser.menus.create({
    id: "stackoverflow",
    title: "Stackoverflow: '%s'",
    contexts: ["selection"]
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
})