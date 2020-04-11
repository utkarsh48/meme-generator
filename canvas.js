//doms

const imgFile=document.getElementById("imgFile");
const test=document.getElementById("test");
const c=document.getElementById("c");
const refresh=document.getElementById("refresh");

//canvas context
const ctx=c.getContext("2d");


//image API
window.imgCan=new Image();
//vars

window.high=100;
window.topText="";
window.bottomText="";
window.height0="";
window.width0="";

//get image file and load it into image object

const funk1=(e)=>
{
    var files=e.target.files;

    const read=new FileReader();
    read.readAsDataURL(files[0]);
    read.addEventListener("load",(e)=>
    {
        window.imgCan.src=e.target.result;
    });
}


imgFile.addEventListener("input",funk1);

//on loading image
window.imgCan.onload=()=>
{
    window.height0=window.imgCan.height;
    window.width0=window.imgCan.width;
    c.height=window.height0;
    c.width=window.width0;
    const w=screen.width;
    const h=screen.height;
    while(c.height >h  || c.width >w)
    {
        c.height/=1.1;
        c.width/=1.1;
    }
    console.log(h,c.height,w,c.width);
    ctx.drawImage(window.imgCan,0,0,c.width,c.height);
}

const sudo=[
    document.getElementById("superText"),
    document.getElementById("superSize"),
    document.getElementById("superY"),
    document.getElementById("superX")]
window.sudoText="Your Text";
window.sudoSize="42";
window.sudoY="100";
window.sudoX="100";


const fxnS=(e)=>
{
    if(e.target.id==="superText")
    {
        window.sudoText=e.target.value;
    }
    else if(e.target.id==="superSize")
    {
        window.sudoSize=e.target.value;
    }
    else if(e.target.id==="superY")
    {
        window.sudoY=e.target.value;
    }
    else if(e.target.id==="superX")
    {
        window.sudoX=e.target.value;
    }
    draw();

}
sudo.forEach((sud)=>{
    sud.addEventListener("input",fxnS);
});

class drawing
{
    constructor(text,x,y)
    {

        ctx.fillStyle="white";
        ctx.textAlign='center';
        ctx.font=`${window.sudoSize}px Teko`;
        ctx.fillText(text,x,y);
        ctx.lineWidth=2;
        ctx.strokeStyle='black';
        ctx.fillText(text,x,y);
    }
}




const draw=()=>
{
    ctx.drawImage(window.imgCan,0,0,c.width,c.height);
    ctx.fillStyle="white";
    ctx.textAlign='center';
    ctx.font=`${window.sudoSize}px Teko`;
    ctx.fillText(window.sudoText, parseInt(window.sudoX), parseInt(window.sudoY));
    ctx.lineWidth=2;
    ctx.strokeStyle='black';
    ctx.strokeText(window.sudoText, parseInt(window.sudoX), parseInt(window.sudoY));
    
}

//document.getElementById("clicked").addEventListener("click",draw);
//document.getElementById("plus").addEventListener("click",draw0);







//save
var save= document.querySelectorAll('.save');
save.forEach((s)=>
{   s.addEventListener('click', function (e) 
    {
        var dataURL = c.toDataURL('image/png');
        document.querySelectorAll(".cor").forEach((i)=>
        {
            i.href=dataURL;
        });
        
        console.log("saved");
    });
});


//templates opener
document.querySelector('#extend').addEventListener('click',(e)=>{
    if(document.querySelector('#ext').style.display==="flex")
    {
        document.querySelector('#ext').style.display="none";
    }
    else
        document.querySelector('#ext').style.display="flex";
})




/*

//doms


const imgFile=document.getElementById("imgFile");
const test=document.getElementById("test");
const c=document.getElementById("c");
const refresh=document.getElementById("refresh");

//canvas context
const ctx=c.getContext("2d");
//image API
window.imgCan=new Image();
//vars

window.high=100;
window.topText="";
window.bottomText="";
window.height0="";
window.width0="";

//get image file and load it into image object

const funk1=(e)=>
{
    var files=e.target.files;

    const read=new FileReader();
    read.readAsDataURL(files[0]);
    read.addEventListener("load",(e)=>
    {
        window.imgCan.src=e.target.result;
    });
}


imgFile.addEventListener("input",funk1);

//on loading image
window.imgCan.onload=()=>
{
    window.height0=window.imgCan.height;
    window.width0=window.imgCan.width;
    c.height=window.height0;
    c.width=window.width0;
    const w=screen.width;
    const h=screen.height;
    while(c.height >h  || c.width >w)
    {
        c.height/=1.1;
        c.width/=1.1;
    }
    console.log(h,c.height,w,c.width);
    ctx.drawImage(window.imgCan,0,0,c.width,c.height);
}

const sudo=[
    document.getElementById("superText"),
    document.getElementById("superSize"),
    document.getElementById("superY"),
    document.getElementById("superX")]
window.sudoText="Your Text";
window.sudoSize="42";
window.sudoY="100";
window.sudoX="100";


const fxnS=(e)=>
{
    if(e.target.id==="superText")
    {
        window.sudoText=e.target.value;
    }
    else if(e.target.id==="superSize")
    {
        window.sudoSize=e.target.value;
    }
    else if(e.target.id==="superY")
    {
        window.sudoY=e.target.value;
    }
    else if(e.target.id==="superX")
    {
        window.sudoX=e.target.value;
    }
    draw();

}
sudo.forEach((sud)=>{
    sud.addEventListener("input",fxnS);
});

class drawing
{
    
}




const draw=()=>
{
    ctx.drawImage(window.imgCan,0,0,c.width,c.height);
    ctx.fillStyle="white";
    ctx.textAlign='center';
    ctx.font=`${window.sudoSize}px Teko`;
    ctx.fillText(window.sudoText, parseInt(window.sudoX), parseInt(window.sudoY));
    ctx.lineWidth=2;
    ctx.strokeStyle='black';
    ctx.strokeText(window.sudoText, parseInt(window.sudoX), parseInt(window.sudoY));
    
    ctx.save();
    console.log(sudoText,sudoSize,sudoY);
}
const draw0=()=>
{
    ctx.restore();
}
//document.getElementById("clicked").addEventListener("click",draw);
document.getElementById("plus").addEventListener("click",draw0);

























//save
var save= document.querySelectorAll('.save');
save.forEach((s)=>
{   s.addEventListener('click', function (e) 
    {
        var dataURL = c.toDataURL('image/png');
        document.querySelectorAll(".cor").forEach((i)=>
        {
            i.href=dataURL;
        });
        
        console.log("saved");
    });
});


//templates opener
document.querySelector('#extend').addEventListener('click',(e)=>{
    if(document.querySelector('#ext').style.display==="flex")
    {
        document.querySelector('#ext').style.display="none";
    }
    else
        document.querySelector('#ext').style.display="flex";
})


*/