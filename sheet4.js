const url = 'https://script.google.com/macros/s/AKfycbyXNnkk4NxcRhV_T7GRowjP2eJF4ZXA8_fPSMdcgOd-jm0ALhAunHrNy2_ZOlXbxU2tAA/exec?load=latestVideo';
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

function maker(json) {

    const keys1 = Object.keys(json);
        for (var i = 0; i < keys1.length; i++) {
            const counter = json[i];
            console.log(i + ' - ' + counter.sn_no + ' '+ counter.video_name + ' '+counter.video_url);
        }

    //const div = document.createElement('div');
    //div.style.display = 'grid';
    //output.append(div);
    Object.keys(json).forEach(function(k){
        console.log(k + ' - ' + json[k]);
         newObject=json[k]
         console.log("121" + ' - ' + newObject.sn_no + ' '+newObject.video_name + ' '+newObject.video_url);
        const ele = document.createElement('div');
        ele.style = 'margin-bottom:35px;1px solid #ddd';
        ele.setAttribute("class","col-lg-4");
        //ele.textContent = el[key];
        //ele.textContent =  newObject.video_url
        var closeSpan = document.createElement("span");
        closeSpan.setAttribute("class","captionLink");
        closeSpan.textContent = newObject.video_name;
		closeSpan.style="text-align:center;"
		var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", newObject.video_url);
        ifrm.style.width = "360px";
        ifrm.style.height = "315px";
		ifrm.style.frameborder = "0";
		ifrm.style.allowfullscreen;
        ele.append(closeSpan)
        ele.append(ifrm);
		
        output.append(ele);
       
    });
   
    
        
  
}
 