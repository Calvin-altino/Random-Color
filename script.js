const btn = document.getElementById('btn');
const color = document.getElementById('color');





btn.addEventListener('click', ()=>{

    let str = '#'


    for(let x = 0; x < 6; x++){
       str += (Math.floor(Math.random() * 10));
    }

    document.body.style.backgroundColor = str;
    color.innerText = str;
})