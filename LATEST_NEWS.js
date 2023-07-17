const url = 'https://script.google.com/macros/s/AKfycbxDQ9AFKPsDhSXVSbM7-hHqZh1JZpurYG9uVVvJlrgwtXDPppT0h4dBRexG35iWAFNDmw/exec?load=myLatestNews';
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
        var link = document.createTextNode(val[0]);
        hypLink.appendChild(link);
        hypLink.title = val[0]; 
        hypLink.style="text-align:center;"
        // Set the href property.
        //hypLink.setAttribute("class","btn btn-info");
        hypLink.href = val[3]
        h4.append(hypLink)
		h4.append(closeSpan)
		

        var span = document.createElement("span");
        span.setAttribute("class","event-time");
        
        var i = document.createElement("i");
        i.setAttribute("class","fa fa-calendar");
        var i_content = document.createTextNode(val[1]);
        i.appendChild(i_content);
        span.append(i);
        const div_1 = document.createElement('div');
        div_1.style = 'margin-top:8px;';
        div_1.setAttribute("class","meta");
        div_1.append(span)

        
        const div_2 = document.createElement('div');
        div_2.style = 'text-align:justify; margin-top:-10px;';
        div_2.setAttribute("class","meta");
        var content = document.createTextNode(val[2]);
        div_2.appendChild(content);

        output.append(h4);
        output.append(div_1);
        output.append(div_2);
       
	  
    })
  })
}
