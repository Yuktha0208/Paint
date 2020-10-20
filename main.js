canvas.addEventListener("mousedrag",my_mousedrag);

function my_mousedrag(e){
    canvas=document.getElementById("myCanvas");
    ctx=canvas.getContext("2d");
    color="purple";
    
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=5;
    ctx.arc(100,100,40,0,2*Math.PI);
    ctx.stroke();
    
    function circle(mouse_x,mouse_y){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=5;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
    ctx.stroke();
    }
}