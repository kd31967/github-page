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
 
const data = [];
document.addEventListener('DOMContentLoaded', init);
 
const output = document.querySelector('.output');
 
function init() {
    console.log('ready');
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            //console.log(rep);
            const jsData = JSON.parse(rep.substr(47).slice(0, -2));
            console.log(jsData);
            const colz = [];
            jsData.table.cols.forEach((heading) => {
                if (heading.label) {
                    colz.push(heading.label.toLowerCase().replace(/\s/g, ''));
                }
            })
            jsData.table.rows.forEach((main) => {
                //console.log(main);
                const row = {};
                colz.forEach((ele, ind) => {
                    //console.log(ele);
                    row[ele] = (main.c[ind] != null) ? main.c[ind].v : '';
                    console.log(row[ele])
                    console.log("39")
                    console.log(row)
                    console.log("40")
                })
                data.push(row);
                console.log(data)
            })
            maker(data);
            console.log(data)
        })
}
 
function maker(json) {

    const keys1 = Object.keys(json);
        for (var i = 0; i < keys1.length; i++) {
            const counter = json[i];
            console.log(i + ' - ' + counter.latest_news + ' '+ counter.date + ' '+counter.description + '' + counter.notification_url);
        }

    //const div = document.createElement('div');
    //div.style.display = 'grid';
    //output.append(div);
    Object.keys(json).forEach(function(k){
        console.log(k + ' - ' + json[k]);
         newObject=json[k]
         console.log(i + ' - ' + newObject.latest_news + ' '+ newObject.date + ' '+newObject.description+ ' '+ newObject.notification_url);
        //  const ele = document.createElement('div');
        // ele.style = 'margin-bottom:35px;1px solid #ddd';
        // ele.setAttribute("class","col-lg-4");
        // //ele.textContent = el[key];
        // //ele.textContent =  newObject.video_url
        // var closeSpan = document.createElement("span");
        // closeSpan.setAttribute("class","captionLink");
        // closeSpan.textContent = newObject.video_name;
		// closeSpan.style="text-align:center;"
		// var ifrm = document.createElement("iframe");
        // ifrm.setAttribute("src", newObject.video_url);
        // ifrm.style.width = "360px";
        // ifrm.style.height = "315px";
		// ifrm.style.frameborder = "0";
		// ifrm.style.allowfullscreen;
        // ele.append(closeSpan)
        // ele.append(ifrm);
        // output.append(ele);

//====
        var h4 = document.createElement('h4'); 
        var hypLink = document.createElement('a'); 
        var closeSpan = document.createElement("span");
        var link = document.createTextNode(newObject.latest_news);
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

  




       	


       
    });
   
    
        
  
}
 