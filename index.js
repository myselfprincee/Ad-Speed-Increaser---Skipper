chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(
    tab.id,
    { file: 'actualCode.js' }
  );
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete') {
    chrome.tabs.executeScript(
      tabId,
      { file: 'actualCode.js' }
    );
  }
});
