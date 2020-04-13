//dom
const imgcont = document.querySelector('#img');
//const c=document.querySelector('#c');
//const ctx=c.getContext('2d');
const plus=document.querySelector('#plus');
const app=document.querySelector('.app');
const c=document.querySelector('canvas');
const context = c.getContext('2d');

//vars
const fms= 100;
const texter=document.querySelector('.texter').innerHTML;
var uCount=1;
const img = new Image();
const frameRate=16;
const e=window.event;
const fillArr=[];

//image loader
const imgFunk=(eve)=>
{
    const file=eve.target.files;
    const read=new FileReader();
    read.addEventListener('load',(e)=>
    {
        img.src=e.target.result;
    });
    read.readAsDataURL(file[0]);
}

imgcont.addEventListener('input',imgFunk);
//checker

document.querySelector('#load').addEventListener('click',()=>{
    fillArr.push(context.drawImage(img,100,100,100,100));
})

plus.addEventListener("click",()=>
{
    fillArr.push(new Fill());
    //add event here
});

//fills class
class Fill
{
    instantNo='Nan';
    text="Your Text";
    x=30;
    y=30;
    size=32;
    sw=2
    inputs=[];
    constructor()
    {
        
        //set object count no
        this.instantNo=parseInt(uCount);

        const ele=document.createElement('div');
        ele.classList.add('texter');
        ele.innerHTML=texter;
        
        const children=[...ele.children].filter(item=>item.tagName==="INPUT");
        children.forEach((i)=>
        {
            i.setAttribute("data-no",uCount);
            i.addEventListener('input',this.inputer);
        });
        app.appendChild(ele);
        
        //universal counter
        uCount++;
    }

    make=()=>
    {
        context.font=`${this.size}px impact`;
        context.fillStyle='red';
        context.strokeStyle='blue';
        context.lineWidth=this.sw;
        context.textAlign='center';
        context.fillText(`${this.text}`, this.x,this.y);
        context.strokeText(`${this.text}`, this.x,this.y);
    }

    //called on each input(secret - ingredient ;p)
    inputer=(e)=>
    {
        //interpret incomming input
        if(e.target.name==='superText')
        {
            this.text=e.target.value;
        }
        else if(e.target.name==='superSize')
        {
            this.size=e.target.value;
        }
        else if(e.target.name==='superY')
        {
            this.y=e.target.value;
        }
        else if(e.target.name==='superX')
        {
            this.x=e.target.value;
        }
        //illusion to make it consize
        this.make();
    }
};
//fillArr.push();
//draw function
const draw=()=>
{
    //context.clearRect(0,0,c.width,c.height);
    context.drawImage(img,0,0,c.width,c.height);
    context.fillStyle='blue';
    
    fillArr.forEach(f=>f.final());
    context.fillText("weeeeeeeee",20,20,150,150);
    
    window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);