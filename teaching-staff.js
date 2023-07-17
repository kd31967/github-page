const url = 'https://script.google.com/macros/s/AKfycbyncwm9bAgCQ_cThLbTrJ57xmVYlwcnAaYfHiIPRInW-Y2xLb9rNPEmbSRPfffN12nPvA/exec';
window.addEventListener('DOMContentLoaded', getData);
const output = document.querySelector('.output');

btnReload.addEventListener('click', getData);
 
function sData(e) {
  e.preventDefault();
  repMessage.textContent = "Sending";
  let val1 = iName.value || 'unknown';
  let val2 = iMes.value || 'Message';
  iName.style.display = 'none';
  iMes.style.display = 'none';
  btnSave.style.display = 'none';
  let arr = [val1, val2];
  let formData = new FormData();
  formData.append('data', JSON.stringify(arr));
  fetch(url, {
    method: 'POST'
    , body: formData
  }).then(function (rep) {
    return rep.json()
  }).then(function (data) {
    console.log(data);
    btnSave.style.display = 'inline';
    iName.style.display = 'inline';
    iMes.style.display = 'inline';
    repMessage.textContent = "Submitted id:" + data.id;
    getData();
  })
}
 
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
		console.log("result is",result)
        img.setAttribute('src', result+'&export=view');
		img.setAttribute("class","img-responsive");
		img.style = 'width:100%; height:200px;';
		ele.append(img)
		let p = document.createElement('p');
    	p.setAttribute("align","center");
		p.style = 'margin:0px; margin-top:10px; font-weight:bold;';
		p.textContent = val[0];
		ele.append(p);
		
		let p1 = document.createElement('p');
    	p1.setAttribute("align","center");
		p1.style = 'margin:0px; ';
		p1.textContent = val[1];

		
		ele.append(p1);
        output.append(ele);
	  
	  
    })
  })
}
