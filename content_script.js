function injectScript() {
  const theScript = document.createElement("script");
  theScript.innerHTML =
    "window.open(`thunder://https://video-direct-link.vercel.app/bili.mp4?aid=${aid}&bvid=${bvid}&cid=${cid}`)";
  document.body.appendChild(theScript);

  console.log("查看脚本是否注入成功");
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == "send") {
    injectScript();
    sendResponse({ state: "打开成功" });
  }
});
