const sheetID = '12Hcsbx7ihVuaiPUo1x_EaiBSApv2HHCcqUC5Zch7TVU';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = 'Download_File';
// let qu = 'Select A,C,D WHERE D > 150';
// qu = 'Select * WHERE B ="Svekis"';
// qu = 'Select * WHERE A contains "Jo"';
// qu = 'Select * WHERE A contains "Jo"';
// qu = 'Select * WHERE E > date "2021-12-31"';
// qu = 'Select * WHERE C = "active" And B = "Svekis"';
let qu = 'Select *';
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
                })
                data.push(row);
            })
            maker(data);
        })
}
 
function maker(json) {
    const div = document.createElement('div');
    div.style.display = 'grid';
 
    output.append(div);
    let first = true;
    json.forEach((el) => {
        //console.log(ele);
        const keys = Object.keys(el);
        div.style.gridTemplateColumns = `repeat(${keys.length} ,1fr)`;
        if (first) {
            first = false;
            keys.forEach((heading) => {
                const ele = document.createElement('div');
                ele.textContent = heading.toUpperCase();
                ele.style.background = 'black';
                ele.style.color = 'white';
                div.append(ele);
            })
 
        }
        keys.forEach((key) => {
            let string=String(el[key])
            console.log("value is "+string)
            const ele = document.createElement('div');
            ele.style.border = '0.5px solid #ddd';
            var closeSpan = document.createElement("span");
            if(string.includes("https://drive.google.com") || string.includes("https://docs.google.com"))
            {
                var hypLink = document.createElement('a'); 
                var closeSpan = document.createElement("span");
                var link = document.createTextNode("Download");
                hypLink.appendChild(link);
                hypLink.title = "Download"; 
                // Set the href property.
                hypLink.setAttribute("class","btn btn-info");
                
                if(string.includes("/file/d/")){
                    let result = string.replace("/file/d/", "/uc?id=");
                    console.log("value result  is "+result)
                    var new_str = result.split("/view")[0];
                    console.log("value result1  is "+new_str)
                    //ele.textContent = result2
                    hypLink.href = new_str+"&export=download"

                }
                if(string.includes("/document/d/")){
                    console.log("Inside the docuement ",string)
                    let result = string.replace("/document/d/", "/uc?id=");
                    console.log("value result  is "+result)
                    var new_str = result.split("/edit")[0];
                    console.log("value new_str  is "+new_str)
                    //ele.textContent = result2
                    hypLink.href = new_str+"&export=download"

                }
                if(string.includes("/spreadsheets/d/")){
                    console.log("Inside the spreadsheets ",string)
                    let result = string.replace("/spreadsheets/d/", "/uc?id=");
                    result = result.replace("docs", "drive");
                    console.log("value result  is "+result)
                    var new_str = result.split("/edit")[0];
                    console.log("value new_str  is "+new_str)
                    //ele.textContent = result2
                    hypLink.href = new_str+"&export=download"

                }
                
                closeSpan.append(hypLink)
                div.append(closeSpan);
                
            }
            else{
                console.log("Not contain trule"+string)
                ele.textContent = el[key];
                
                div.append(ele);

            }
           // ele.textContent = el[key];
            
        })
        console.log(keys);
    })
 
}
 