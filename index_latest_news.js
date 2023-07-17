const sheetID_1 = '1s2SsjRuUoeOgB9DzZ2PMpcNVGh9_QagrEBQaKNqf8E8';
const base_1 = `https:docs.google.com/spreadsheets/d/${sheetID_1}/gviz/tq?`;
const sheetName_1 = 'LATEST_NEWS';
//let qu = 'Select A,C,D WHERE D > 150';
//qu = 'Select * WHERE B ="Svekis"';
//qu = 'Select * WHERE A contains "Jo"';
//qu = 'Select * WHERE A contains "Jo"';
//qu = 'Select * WHERE E > date "2021-12-31"';
//qu = 'Select * WHERE C = "active" And B = "Svekis"';
let qu ='Select *'
const query_1 = encodeURIComponent(qu);
const url_1 = `${base_1}&sheet=${sheetName_1}&tq=${query_1}`;
const data_1 = [];
document.addEventListener('DOMContentLoaded', init1);
 
const output_1 = document.querySelector('.output1');
 
function init1() {
    console.log('ready');
    fetch(url_1)
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
                data_1.push(row);
                console.log(data_1)
            })
            maker(data_1);
            console.log(data_1)
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
	    output_1.append(h4);
       
       
    });
   
    
        
  
}
 