document.addEventListener("DOMContentLoaded",function(){
    const btn = document.getElementById("btn1");
    const hex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

    btn.addEventListener('click',function(){
    let color = '#';
    for(i=0;i<6;i++){
        color += hex[Math.floor(Math.random() * hex.length)];
    }
        document.body.style.backgroundColor = color;
        document.getElementById("txt").textContent = 'Backgound Color :'+color+'';
    })
    console.log(Math.random() * hex.length)
});