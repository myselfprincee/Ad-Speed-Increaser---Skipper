var button = document.querySelector(".ytp-ad-skip-button-modern");
if (!button) {
    button = document.querySelector(".ytp-skip-ad-button");
}
if (!button) {
    button = document.querySelector(".ytp-button");
}

var unskippableOne = document.querySelector(".ytp-ad-preview-container .ytp-ad-preview-container-detached");
if (!unskippableOne) {
    unskippableOne = document.querySelector(".ytp-ad-preview-container-detached");
}

var flyoutCTA = document.querySelector(".ytp-ad-text .ytp-ad-preview-text-modern");
if (!flyoutCTA) {
    flyoutCTA = document.querySelector(".ytp-ad-preview-text-modern");
}

var VideoElem = document.querySelector(".video-stream")
if (!VideoElem) {
    VideoElem = document.querySelector(".html5-main-video");
}

if (button.innerText.length > 0 || unskippableOne.innerText.length > 0) {
    VideoElem.playbackRate = 11.0;
    if (button.innerText = "Skip") {
        button.click();
    } else if (flyoutCTA.innerText = 'Video plays soon') {
        VideoElem.playbackRate = 11.0;
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
