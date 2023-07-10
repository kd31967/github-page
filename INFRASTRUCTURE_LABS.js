const sheetID = '15QNL-hTF_oWcUdS7j1Q8u6VgcjOFNsiF_PT1yHor-b8';
const base = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?`;
const sheetName = 'LABS';
const sheetName_1 = 'OTHER_LABS';

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
const url_1 = `${base}&sheet=${sheetName_1}&tq=${query}`;
const data_1= [];

document.addEventListener('DOMContentLoaded', init);
document.addEventListener('DOMContentLoaded', init1); 
const output = document.querySelector('.output');
const output1 = document.querySelector('.output1');
 
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
                })
                data_1.push(row);
            })
            maker_1(data_1);
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
            const ele = document.createElement('div');
            ele.style.border = '1px solid #ddd';
            ele.textContent = el[key];
            div.append(ele);
        })
        console.log(keys);
    })
 
}
 

function maker_1(json) {
    const div = document.createElement('div');
    div.style.display = 'grid';
 
    output1.append(div);
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
            const ele = document.createElement('div');
            ele.style.border = '1px solid #ddd';
            ele.textContent = el[key];
            div.append(ele);
        })
        console.log(keys);
    })
 
}
