//https://script.google.com/macros/s/AKfycbzYQVNG-3jB2ocRX83oj7U2oGxyzRcdqaL4Zti7DMOf_WNXPwA/exec
const url = "https://script.google.com/macros/s/AKfycbwkYXNWm3YhXdZlkxdbsZ5m_-Q0Td_A90dmx0z2AKQmHzkCYRdygkFvySN9v0GM8KeW/exec";
window.addEventListener('DOMContentLoaded', addImages)
const output = document.querySelector('.output');

 
function addImages() {
  console.log('ready');
  fetch(url).then(function (rep) {
    return rep.json()
  }).then(function (json) {
    console.log(json);
	let first = true;
    json.data.forEach(function (val) {
      console.log(val.url);
	  let img = document.createElement('img');
      img.setAttribute('src', val.url+'&export=view');
	  const ele = document.createElement('div');	  
      ele.setAttribute("class","item");
	  if (first) {
            first = false;
			ele.setAttribute("class","item active"); 
        }
      
	  ele.append(img)
      output.appendChild(ele);
    })
  })
}