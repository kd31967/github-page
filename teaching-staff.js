const sheetID = '1J3vu3UwacG-oSG7G1A6_vvlNx3trn3diGQ1j1Cg4I-Q';
const base = `https:docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = 'staff';
let qu ='Select *'
const query = encodeURIComponent(qu);
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];
document.addEventListener('DOMContentLoaded', init);
 
const output = document.querySelector('.output'); 
function init() {
    console.log('ready');
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            console.log(rep);
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
            console.log(i + ' - ' + counter.date + ' '+ counter.name + ' '+counter.destination + ' '+  counter.pic);
        }

  
    Object.keys(json).forEach(function(k){
        console.log(k + ' - ' + json[k]);
         newObject=json[k]
         console.log("121" + ' - ' + newObject.date + ' '+newObject.name + ' '+newObject.destination + ' '+newObject.pic);
         const ele = document.createElement('div');
       
        ele.setAttribute("class","col-lg-3");
		let img = document.createElement('img');
		let img_url=newObject.pic
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
		p.textContent = newObject.name;
		ele.append(p);
		
		let p1 = document.createElement('p');
    	p1.setAttribute("align","center");
		p1.style = 'margin:0px; ';
		p1.textContent = newObject.destination;

		
		ele.append(p1);
        output.append(ele);
       
    });
   
    
        
  
}
 