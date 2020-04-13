//vars
const fms= 16;

//dom
const c=document.querySelector('canvas');
const context = c.getContext('2d');
const fillArr=[];

//fills
class Fill
{
    constructor(text="",x=30,y=30,size=32,sw=2)
    {
        context.font=`${size}px impact`;
        context.fillStyle='red';
        context.strokeStyle='blue';
        context.lineWidth=sw;
        context.textAlign='center';
        context.fillText(`${text}`, x,y);
        context.strokeText(`${text}`, x,y);
    }
};
//push here





//draw function
const draw=()=>
{
    fillArr.forEach(e=>e);
}
console.log(fillArr);
setInterval(draw,fms);