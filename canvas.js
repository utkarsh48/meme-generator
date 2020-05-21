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
        if(c.width==0)/////////////////////////////////remove
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
        this.y=c.height/2;
        this.x=c.width/2;
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
        let tempSub=new Array();
        let tempSubway=new Array();
        tempSub.push(document.createElement('label'));
        tempSub[0].classList.add('appendieLabel');
        tempSub[0].for='superText';
        tempSub[0].innerHTML="Text:";
        
        tempSub.push(document.createElement('input'));
        tempSub[1].classList.add("appendieInput");
        tempSub[1].name='superText';
        tempSub[1].placeholder="Your Text Here";
        tempSub[1].type='text';
        
        tempSub.push(document.createElement('label'));
        tempSub[2].classList.add('appendieLabel');
        tempSub[2].for='superSize';
        tempSub[2].innerHTML="Size:";
        
        tempSub.push(document.createElement('input'));
        tempSub[3].classList.add("appendieInput");
        tempSub[3].name='superSize';
        tempSub[3].type="range";
        tempSub[3].min="10";
        tempSub[3].max="100";
        tempSub[3].value="32";

        tempSub.push(document.createElement('label'));
        tempSub[4].classList.add('appendieLabel');
        tempSub[4].for='superX';
        tempSub[4].innerHTML="X-offset:";
        
        tempSub.push(document.createElement('input'));
        tempSub[5].classList.add("appendieInput");
        tempSub[5].name='superX';
        tempSub[5].type="range";
        tempSub[5].min="0";
        tempSub[5].max="640";
        tempSub[5].value="10";

        tempSub.push(document.createElement('label'));
        tempSub[6].classList.add('appendieLabel');
        tempSub[6].for='superY';
        tempSub[6].innerHTML="Y-offset:";
        
        tempSub.push(document.createElement('input'));
        tempSub[7].classList.add("appendieInput");
        tempSub[7].name='superY';
        tempSub[7].type="range";
        tempSub[7].min="0";
        tempSub[7].max="640";
        tempSub[7].value="10"

        tempSub.push(document.createElement('button'));
        tempSub[8].id="subAppendieBtn";
        tempSub[8].innerHTML="Expand";
        tempSub[8].addEventListener('click',(e)=>{
            //tempSub[9].classList.toggle("hide")
            if(e.target.innerHTML=='Collapse'){
                e.target.innerHTML='Expand';
                tempSub[9].style.display="none";
            }
            else{
                tempSub[9].style.display="flex";
                e.target.innerHTML='Collapse';
            }
        });

        tempSub.push(document.createElement('div'));
        //tempSub[9].id="subAppendie";
        tempSub[9].classList.add("subAppendie");
        tempSub[9].style.display="none";

        tempSubway.push(document.createElement('label'));
        tempSubway[0].classList.add('appendieLabel');
        tempSubway[0].for='fColor';
        tempSubway[0].innerHTML="Fill Color:";

        tempSubway.push(document.createElement('input'));
        tempSubway[1].classList.add("appendieInput");
        tempSubway[1].name='fColor';
        tempSubway[1].type="color";
        tempSubway[1].value='#ffffff';

        tempSubway.push(document.createElement('label'));
        tempSubway[2].classList.add('appendieLabel');
        tempSubway[2].for='oColor';
        tempSubway[2].innerHTML="Outline Color:";

        tempSubway.push(document.createElement('input'));
        tempSubway[3].classList.add("appendieInput");
        tempSubway[3].name='oColor';
        tempSubway[3].value='#000000';
        tempSubway[3].type="color";

        tempSubway.push(document.createElement('label'));
        tempSubway[4].classList.add('appendieLabel');
        tempSubway[4].for='superStroke';
        tempSubway[4].innerHTML="Outline Width:";
        
        tempSubway.push(document.createElement('input'));
        tempSubway[5].classList.add("appendieInput");
        tempSubway[5].name='superStroke';
        tempSubway[5].type="range";
        tempSubway[5].min="0";
        tempSubway[5].max="15";
        tempSubway[5].value="2";

        tempSubway.forEach((tw)=>{
//           tw.classList.add('inplab');
            tw.addEventListener('input',(e)=>{this.realize(e)
            });
            tempSub[9].appendChild(tw);
        });

        tempSub.forEach((t)=>{
//            t.classList.add('inplab');
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


