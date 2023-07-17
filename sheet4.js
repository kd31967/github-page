const url = 'https://script.google.com/macros/s/AKfycbxDQ9AFKPsDhSXVSbM7-hHqZh1JZpurYG9uVVvJlrgwtXDPppT0h4dBRexG35iWAFNDmw/exec?load=myLatestVideo';
window.addEventListener('DOMContentLoaded', getData);
const output = document.querySelector('.output');


 

 
function getData() {
  output.innerHTML = "loading...";
  fetch(url).then(function (rep) {
    return rep.json()
  }).then(function (data) {
    console.log(data);
    output.innerHTML = "";
    data.posts.forEach(function (val) {
      console.log(val);
       const ele = document.createElement('div');
        ele.style = 'margin-bottom:35px;1px solid #ddd';
        ele.setAttribute("class","col-lg-4");
        //ele.textContent = el[key];
        //ele.textContent =  newObject.video_url
        var closeSpan = document.createElement("span");
        closeSpan.setAttribute("class","captionLink");
        closeSpan.textContent = val[1];
		closeSpan.style="text-align:center;"
		var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", val[2]);
        ifrm.style.width = "360px";
        ifrm.style.height = "315px";
		ifrm.style.frameborder = "0";
		ifrm.style.allowfullscreen;
        ele.append(closeSpan)
        ele.append(ifrm);
		
        output.append(ele);
       
	  
    })
  })
}
