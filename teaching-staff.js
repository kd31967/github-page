const url = 'https://script.google.com/macros/s/AKfycbxDQ9AFKPsDhSXVSbM7-hHqZh1JZpurYG9uVVvJlrgwtXDPppT0h4dBRexG35iWAFNDmw/exec?load=myTeacherStaffData';
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
      //let html = document.createElement('div');
      //html.innerHTML = val[0] + ' ' + val[1] + ' ' + val[2] + '<br>';
      //output.appendChild(html);
	  
	  const ele = document.createElement('div');
	  
	  ele.setAttribute("class","col-lg-3");
		let img = document.createElement('img');
		let img_url=val[3]
		var new_url = img_url.split("/view")[0];		
		result = new_url.replace("file/d/", "uc?id=");
		console.log("result is",result+'&export=view')
        img.setAttribute('src', result+'&export=view');
		img.setAttribute("class","img-responsive");
		img.style = 'width:100%; height:200px;';
		ele.append(img)
		let p = document.createElement('p');
    	p.setAttribute("align","center");
		p.style = 'margin:0px; margin-top:10px; font-weight:bold;';
		p.textContent = val[1];
		ele.append(p);
		
		let p1 = document.createElement('p');
    	p1.setAttribute("align","center");
		p1.style = 'margin:0px; ';
		p1.textContent = val[2];

		
		ele.append(p1);
		
        output.append(ele);
	  
	  
    })
  })
}
