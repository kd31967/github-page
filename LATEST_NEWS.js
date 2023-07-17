const url = 'https://script.google.com/macros/s/AKfycbyXNnkk4NxcRhV_T7GRowjP2eJF4ZXA8_fPSMdcgOd-jm0ALhAunHrNy2_ZOlXbxU2tAA/exec?load=myLatestEvent';
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
 var h4 = document.createElement('h4'); 
        var hypLink = document.createElement('a'); 
        var closeSpan = document.createElement("span");
        var link = document.createTextNode(val[1]);
        hypLink.appendChild(link);
        hypLink.title = newObject.latest_news; 
        hypLink.style="text-align:center;"
        // Set the href property.
        //hypLink.setAttribute("class","btn btn-info");
        hypLink.href = newObject.notification_url
        h4.append(hypLink)
		h4.append(closeSpan)
		

        var span = document.createElement("span");
        span.setAttribute("class","event-time");
        
        var i = document.createElement("i");
        i.setAttribute("class","fa fa-calendar");
        var i_content = document.createTextNode(newObject.date);
        i.appendChild(i_content);
        span.append(i);
        const div_1 = document.createElement('div');
        div_1.style = 'margin-top:8px;';
        div_1.setAttribute("class","meta");
        div_1.append(span)

        
        const div_2 = document.createElement('div');
        div_2.style = 'text-align:justify; margin-top:-10px;';
        div_2.setAttribute("class","meta");
        var content = document.createTextNode(newObject.description);
        div_2.appendChild(content);

        output.append(h4);
        output.append(div_1);
        output.append(div_2);
       
	  
    })
  })
}
