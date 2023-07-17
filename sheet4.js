const sheetID = '1JPCyen6TtuX6CGnO7DuvpQpDrnkG4ce0KLd3AOO5J40';
const base = `https:docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = 'video_list';
//let qu = 'Select A,C,D WHERE D > 150';
//qu = 'Select * WHERE B ="Svekis"';
//qu = 'Select * WHERE A contains "Jo"';
//qu = 'Select * WHERE A contains "Jo"';
//qu = 'Select * WHERE E > date "2021-12-31"';
//qu = 'Select * WHERE C = "active" And B = "Svekis"';
let qu ='Select *'
const query = encodeURIComponent(qu);
const url = `${base}&sheet=${sheetName}&tq=${query}`;
const data = [];
document.addEventListener('DOMContentLoaded', video_list);
 
const output = document.querySelector('.output');
 
function video_list() {
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
 