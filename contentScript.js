chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(){
  let video = document.getElementsByClassName("html5-video-container")
  let style = video[0].getAttribute('style')
  if(!style){
    video[0].setAttribute("style","transform: rotateY(180deg)")
  }else{
    video[0].removeAttribute('style')
  }
}