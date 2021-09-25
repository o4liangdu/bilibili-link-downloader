const btn = document.querySelector(".search-btn");
btn.addEventListener("click", () => {
  chrome.tabs.query({active:true, currentWindow:true}, function (tab) {//获取当前tab
    //向tab发送请求
    chrome.tabs.sendMessage(tab[0].id, { 
        action: "send",
    }, function (response) {
        console.log(response);
        var link = document.querySelector(".video-link");
        link.innerHTML = response.state;
    });
});
});
