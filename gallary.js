const sheetID_1 = '1L9tWW1v9gYtuhJ9fusm3nRdogo8Cn6pgORxJ556EkBw';
const base = `https:docs.google.com/spreadsheets/d/${sheetID_1}/gviz/tq?`;
const sheetName = 'Gallary';
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
document.addEventListener('DOMContentLoaded', init);
//document.addEventListener('click', SELECT_EVENT);

 
const output = document.querySelector('.output');
const output1 = document.querySelector('.output1');
//const li = document.createElement('li');
//li.setAttribute("class","list active");
//li.setAttribute("data-filter","all");
//li.textContent = "All";

//const ul = document.createElement('ul');
//ul.setAttribute("class","list active");
//ul.append(li);
//const div = document.createElement('div');
//div.setAttribute("class","product");
		

 
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
            console.log(i + ' - ' + counter.gallary_event + ' '+ counter.name + ' '+counter.destination + '' + counter.pic);
        }

    //const div = document.createElement('div');
    //div.style.display = 'grid';
    //output.append(div);
	let data=[];
    Object.keys(json).forEach(function(k){
        console.log(k + ' - ' + json[k]);
         newObject=json[k]
         console.log("121" + ' - ' + newObject.gallary_event + ' '+newObject.name + ' '+newObject.destination  + '' + newObject.pic);
         
		 //console.log(nums.includes(8));
		 if(!data.includes(newObject.gallary_event))
		 {
			 data.push(newObject.gallary_event)
			const li1 = document.createElement('li');
			li1.setAttribute("class","list ");
			li1.setAttribute("data-filter",newObject.gallary_event);
			li1.textContent = newObject.gallary_event;
			li1.onclick = dynamicEvent;
			output.append(li1);
		 }
		 
		 
		 
		
		
		const div1 = document.createElement('div');
		div1.setAttribute("class","itemBox");
		div1.setAttribute("data-item",newObject.gallary_event);
		
		const a = document.createElement('a');
		a.setAttribute("href","https://ibb.co/BBHGcn6");
		
		//const img = document.createElement('img');
		//img.setAttribute("src",newObject.pic);
		//img.setAttribute("border","0");
		
		
		
		let img = document.createElement('img');
		let img_url=newObject.pic
		var new_url = img_url.split("/view")[0];		
		result = new_url.replace("file/d/", "uc?id=");
		console.log("result is",result+'&export=view')
        img.setAttribute('src', result+'&export=view');
		img.setAttribute("alt",newObject.gallary_event);
		//img.style = 'width:100%; height:200px;';
		img.setAttribute("border","0");
		//ele.append(img)
		
		
		div1.append(a);
		div1.append(img);
		//div.append(div1);
		
		//output.append(ul);
		output1.append(div1);
		//document.body.appendChild(output);
		
		
		
       
    });
   
    
        
  
}



/*
let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

console.log("146"+list.length)


for(let i = 0; i<list.length; i++){
	console.log(list.length)
	//alert("Notify")
    list[i].addEventListener('click', function(){
        for(let j = 0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k<itemBox.length; k++){
            itemBox[k].classList.remove('active');
            itemBox[k].classList.add('hide');
        
        if(itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
            itemBox[k].classList.remove('hide');
            itemBox[k].classList.add('active');
        }
    }
    })

 
}

*/