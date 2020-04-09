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









document.getElementById("auto").addEventListener('click',(e)=>
{
    console.log("auto");
    document.querySelector(".inp").style.display="none";
    document.querySelector(".ips").style.display="flex";

    fuon1();
    console.log("auto");
})


document.getElementById("manual").addEventListener('click',(e)=>
{
    console.log("manual");
    document.querySelector(".ips").style.display="none";
    document.querySelector(".inp").style.display="flex";

    fuon2();
    console.log("manual");
})










/////////////////////////////////////////////////////////////////////
function fuon1()
{
//on loading image
    window.imgCan.onload=()=>
    {
        ctx.drawImage(window.imgCan,0,0,c.width,c.height);
        draw();
    }

    const textInterpret=(e)=>
    {
        let id=e.target.id;
        let text=e.target.value;

        if(id==="topText")
        {
            window.topText=text;
        }
        else if(id==="bottomText")
        {
            window.bottomText=text;
        }
        else if(id==="high")
        {
            window.high=text;
        }
    }
    const input=[document.getElementById("topText"),document.getElementById("bottomText"),document.getElementById("high")];
    input.forEach((i)=>
    {
        i.addEventListener("input",textInterpret);
    });



    const draw=()=>{
        
        ctx.textAlign="center";
        ctx.font="42px impact";
        fsize=parseInt(ctx.font[0])*10+parseInt(ctx.font[1]);
        ctx.fillStyle="white";
        //top
        ctx.fillText(window.topText, c.width/2, parseInt(window.high)+fsize);
        ctx.lineWidth=2;
        ctx.strokeStyle='black';
        ctx.strokeText(window.topText, c.width/2, parseInt(window.high)+fsize);

        //bottom
        ctx.fillText(window.bottomText, c.width/2, c.height-window.high);
        ctx.lineWidth=2;
        ctx.strokeStyle='black';
        ctx.strokeText(window.bottomText, c.width/2, c.height-window.high);
    }
    //refresh
    refresh.addEventListener("click",()=>{
        ctx.drawImage(window.imgCan,0,0,c.width,c.height);
        draw();
    })

    var save= document.getElementById('save');
    save.addEventListener('click', function (e) {
        var dataURL = c.toDataURL('image/png');
        document.getElementById("cor").href=dataURL;
        
    });

}


function fuon2()
{
    //on loading image
    window.imgCan.onload=()=>
    {
        ctx.drawImage(window.imgCan,0,0,c.width,c.height);
    }

    const sudo=[
        document.getElementById("superText"),
        document.getElementById("superSize"),
        document.getElementById("superY")]
    window.sudoText="Your Text";
    window.sudoSize="42";
    window.sudoY="100";
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
    }
    sudo.forEach((sud)=>{
        sud.addEventListener("input",fxnS);
    });

    let draw=()=>
    {
        ctx.drawImage(window.imgCan,0,0,c.width,c.height);
        ctx.fillStyle="white";
        ctx.textAlign='center';
        ctx.font=`${window.sudoSize}px impact`;
        ctx.fillText(window.sudoText, c.width/2, parseInt(window.sudoY));
        ctx.lineWidth=2;
        ctx.strokeStyle='black';
        ctx.strokeText(window.sudoText, c.width/2, parseInt(window.sudoY));
        
        ctx.save();
        console.log(sudoText,sudoSize,sudoY);
    }
    //bug in add
    let add=()=>
    {
        ctx.restore();
        ctx.fillStyle="white";
        ctx.textAlign='center';
        ctx.font=`${window.sudoSize}px impact`;
        ctx.fillText(window.sudoText, c.width/2, parseInt(window.sudoY));
        ctx.lineWidth=2;
        ctx.strokeStyle='black';
        ctx.strokeText(window.sudoText, c.width/2, parseInt(window.sudoY));
        
        console.log(sudoText,sudoSize,sudoY);
    }


    document.getElementById("clicked").addEventListener("click",draw);
    document.getElementById("plus").addEventListener("click",add);
}