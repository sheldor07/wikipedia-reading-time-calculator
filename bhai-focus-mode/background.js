chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "BHAI",
  });
});

const bhaiUrl = "https://en.wikipedia.org/wiki/Salman_Khan";

chrome.action.onClicked.addListener(async (tab) => {
  console.log("clicked");
  if (tab.url.startsWith(bhaiUrl)) {
    const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
    const nextState = prevState === "BHAI" ? "JAAN" : "BHAI";
    await chrome.action.setBadgeText({
      tabId: tab.id,
      text: nextState,
    });
    if (nextState === "JAAN") {
      console.log("hell");
      await chrome.scripting.insertCSS({
        files: ["focus-mode.css"],
        target: { tabId: tab.id },
      });
    }
    if (nextState === "BHAI") {
      await chrome.scripting.removeCSS({
        files: ["focus-mode.css"],
        target: { tabId: tab.id },
      });
    }
  }
});
