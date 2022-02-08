
let button = document.getElementById('rotateVideoButton')
button.addEventListener('click',rotate)

function rotate(){
  let params = {
    active: true,
    currentWindow: true
  }
  chrome.tabs.query(params,gotTab);

  function gotTab(tabs){
    chrome.tabs.sendMessage(tabs[0].id)
  }
}
