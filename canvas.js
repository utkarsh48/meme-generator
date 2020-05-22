window.num=0;
var imgBg = document.querySelector('#img');
var plusBtn=document.querySelector('#plus');
var minusBtn=document.querySelector('#minus');
var appendie=document.querySelector('div.app');
var fillArr=new Array();
//dom

const c=document.querySelector('canvas');
const context = c.getContext('2d');

context.fillRect(0,0,c.height,c.width);

//dimentions of canvas
var redrawImage=(img)=>{
    while(img.height > c.height || img.width > c.width)
    {
        img.height/=1.1;
        img.width/=1.1;
        if(c.width==0)//exception
        {
            break;
        }
    }
    c.height=img.height;
    c.width=img.width;
    context.clearRect(0,0,img.width,img.height);
    context.drawImage(img,0,0,img.width,img.height);
}
    
//file input
const fileHandler=(e)=>{
    var imgFile = e.target.files[0];
    var reader = new FileReader();
    reader.onload=(f)=>{
        var data = f.target.result;
        
        //image loader
        const image = new Image();
        image.onload=(e)=>{
            window.imgSrc=e.target;
            redrawImage(window.imgSrc);
        }

        //image source provider
        image.src=data;
        //console.log(data);
    }
    reader.readAsDataURL(imgFile);
}

imgBg.addEventListener('change',fileHandler);
//image loading done

//text inputs
class Texter{
    constructor(){
        this.y=25;
        this.x=25;
        this.size=32;
        this.text="";
        this.oColor="black";
        this.fColor="white";
        this.stroke=2;
        this.superAppend();
        window.num+=1;

    }
    realize=(e)=>{
        //interpret incomming input
        if(e.target.name==='superText'){
            this.text=e.target.value;
        }
        else if(e.target.name==='superSize'){
            this.size=e.target.value;
        }
        else if(e.target.name==='superY'){
            this.y=e.target.value;
        }
        else if(e.target.name==='superX'){
            this.x=e.target.value;
        }
        else if(e.target.name==='fColor'){
            this.fColor=e.target.value;
        }
        else if(e.target.name==='oColor'){
            this.oColor=e.target.value;
        }
        else if(e.target.name==='superStroke'){
            this.stroke=e.target.value;
        }
        //creating
        this.create();
    }
    create=()=>
    {
        context.font=`${this.size}px Teko`;
        context.fillStyle=this.fColor;
        context.strokeStyle=this.oColor;
        context.lineWidth=this.stroke;
        context.textAlign='center';
        context.fillText(`${this.text}`, this.x,this.y);
        context.strokeText(`${this.text}`, this.x,this.y);
    }
    superAppend=()=>{
        let temp = document.createElement('div');
        temp.classList.add(`instantNo${window.num}`, 'appendie');
        let tempArrayOfInputs=new Array();
        let childTempArrayOfInputs=new Array();
        tempArrayOfInputs.push(document.createElement('label'));
        tempArrayOfInputs[0].classList.add('appendieLabel');
        tempArrayOfInputs[0].for='superText';
        tempArrayOfInputs[0].innerHTML="Text:";

        tempArrayOfInputs.push(document.createElement('input'));
        tempArrayOfInputs[1].classList.add("appendieInput");
        tempArrayOfInputs[1].name='superText';
        tempArrayOfInputs[1].placeholder="Your Text Here";
        tempArrayOfInputs[1].type='text';

        tempArrayOfInputs.push(document.createElement('label'));
        tempArrayOfInputs[2].classList.add('appendieLabel');
        tempArrayOfInputs[2].for='superSize';
        tempArrayOfInputs[2].innerHTML="Size:";

        tempArrayOfInputs.push(document.createElement('input'));
        tempArrayOfInputs[3].classList.add("appendieInput");
        tempArrayOfInputs[3].name='superSize';
        tempArrayOfInputs[3].type="range";
        tempArrayOfInputs[3].min="10";
        tempArrayOfInputs[3].max="100";
        tempArrayOfInputs[3].value="32";

        tempArrayOfInputs.push(document.createElement('label'));
        tempArrayOfInputs[4].classList.add('appendieLabel');
        tempArrayOfInputs[4].for='superX';
        tempArrayOfInputs[4].innerHTML="X-offset:";

        tempArrayOfInputs.push(document.createElement('input'));
        tempArrayOfInputs[5].classList.add("appendieInput");
        tempArrayOfInputs[5].name='superX';
        tempArrayOfInputs[5].type="range";
        tempArrayOfInputs[5].min="0";
        tempArrayOfInputs[5].max="640";
        tempArrayOfInputs[5].value="25";

        tempArrayOfInputs.push(document.createElement('label'));
        tempArrayOfInputs[6].classList.add('appendieLabel');
        tempArrayOfInputs[6].for='superY';
        tempArrayOfInputs[6].innerHTML="Y-offset:";

        tempArrayOfInputs.push(document.createElement('input'));
        tempArrayOfInputs[7].classList.add("appendieInput");
        tempArrayOfInputs[7].name='superY';
        tempArrayOfInputs[7].type="range";
        tempArrayOfInputs[7].min="0";
        tempArrayOfInputs[7].max="640";
        tempArrayOfInputs[7].value="25"

        tempArrayOfInputs.push(document.createElement('button'));
        tempArrayOfInputs[8].id="subAppendieBtn";
        tempArrayOfInputs[8].innerHTML="Expand";
        tempArrayOfInputs[8].addEventListener('click',(e)=>{
            //tempArrayOfInputs[9].classList.toggle("hide")
            if(e.target.innerHTML=='Collapse'){
                e.target.innerHTML='Expand';
                tempArrayOfInputs[9].style.display="none";
            }
            else{
                tempArrayOfInputs[9].style.display="flex";
                e.target.innerHTML='Collapse';
            }
        });

        tempArrayOfInputs.push(document.createElement('div'));
        //tempArrayOfInputs[9].id="subAppendie";
        tempArrayOfInputs[9].classList.add("subAppendie");
        tempArrayOfInputs[9].style.display="none";

        childTempArrayOfInputs.push(document.createElement('label'));
        childTempArrayOfInputs[0].classList.add('appendieLabel');
        childTempArrayOfInputs[0].for='fColor';
        childTempArrayOfInputs[0].innerHTML="Fill Color:";

        childTempArrayOfInputs.push(document.createElement('input'));
        childTempArrayOfInputs[1].classList.add("appendieInput");
        childTempArrayOfInputs[1].name='fColor';
        childTempArrayOfInputs[1].type="color";
        childTempArrayOfInputs[1].value='#ffffff';

        childTempArrayOfInputs.push(document.createElement('label'));
        childTempArrayOfInputs[2].classList.add('appendieLabel');
        childTempArrayOfInputs[2].for='oColor';
        childTempArrayOfInputs[2].innerHTML="Outline Color:";

        childTempArrayOfInputs.push(document.createElement('input'));
        childTempArrayOfInputs[3].classList.add("appendieInput");
        childTempArrayOfInputs[3].name='oColor';
        childTempArrayOfInputs[3].value='#000000';
        childTempArrayOfInputs[3].type="color";

        childTempArrayOfInputs.push(document.createElement('label'));
        childTempArrayOfInputs[4].classList.add('appendieLabel');
        childTempArrayOfInputs[4].for='superStroke';
        childTempArrayOfInputs[4].innerHTML="Outline Width:";

        childTempArrayOfInputs.push(document.createElement('input'));
        childTempArrayOfInputs[5].classList.add("appendieInput");
        childTempArrayOfInputs[5].name='superStroke';
        childTempArrayOfInputs[5].type="range";
        childTempArrayOfInputs[5].min="0";
        childTempArrayOfInputs[5].max="15";
        childTempArrayOfInputs[5].value="2";

        childTempArrayOfInputs.forEach((tw)=>{
            tw.addEventListener('input',(e)=>{this.realize(e)
            });
            tempArrayOfInputs[9].appendChild(tw);
        });

        tempArrayOfInputs.forEach((t)=>{
            t.addEventListener('input',(e)=>{this.realize(e)
            });
            temp.appendChild(t);
        });
        appendie.appendChild(temp);
    }
};

plusBtn.addEventListener("click",()=>{
    fillArr.push(new Texter());
});

//mastermind
window.onload=function(){
    window.addEventListener('input',(e)=>{
        redrawImage(window.imgSrc);
        fillArr.forEach((i)=>{
            i.create();
        });
    });
}


