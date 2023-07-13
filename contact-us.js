const url = 'https://script.google.com/macros/s/AKfycbyK2gPgIidX_idpAV5FMDsqBq2r4bnnRmMkAWEA_I874pm_wMkyfxHmRjzV_DcPRNhm/exec';
//window.addEventListener('DOMContentLoaded', getData);
const output = document.querySelector('.output');
const btnSave = document.querySelector('.saver');
const btnReload = document.querySelector('.ref');
const iName = document.querySelector('input[name=name]');
const iMes = document.querySelector('textarea[name=message]');
const iEmail = document.querySelector('input[name=email]');
const iContact = document.querySelector('input[name=contact]');
//const repMessage = document.querySelector('.rep');
btnSave.addEventListener('click', sData);
//btnReload.addEventListener('click', getData);
 
function sData(e) {
  e.preventDefault();
  //repMessage.textContent = "Sending";
  let val1 = iName.value || 'unknown';
  let val2 = iMes.value || 'Message';
  let val3 = iEmail.value || 'Email';
  let val4 = iContact.value || 'Contact';
  
  iName.style.display = 'none';
  iMes.style.display = 'none';
  iEmail.style.display = 'none';
  iContact.style.display = 'none';
  btnSave.style.display = 'none';
  let arr = [val1, val2,val3,val4];
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
	iEmail.style.display = 'inline';
	iContact.style.display = 'inline';
    //repMessage.textContent = "Submitted id:" + data.id;
	alert("Submitted id:" + data.id);
//    getData();
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
      let html = document.createElement('div');
      html.innerHTML = val[0] + ' ' + val[1] + ' ' + val[2]+' ' + val[3]+' ' + val[4] + '<br>';
      output.appendChild(html);
    })
  })
}