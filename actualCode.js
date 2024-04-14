var button = document.getElementsByClassName("ytp-ad-skip-button-modern ytp-button")[0];
var unskippableOne = document.getElementsByClassName("ytp-ad-preview-container ytp-ad-preview-container-detached");
var flyoutCTA = document.getElementsByClassName("ytp-ad-text ytp-ad-preview-text-modern")[0];

if (flyoutCTA.innerText = 'Video plays soon') {
    document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate = 11.0;
}

if (button.length > 0 || unskippableOne.length > 0) {
    document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate = 11.0;
    if (button.innerText = "Skip") {
        button.click();
    }
    setTimeout(function () {
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
    }, 1000);
}
