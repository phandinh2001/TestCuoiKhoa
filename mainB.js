let myBtn = document.getElementById('myBtn');
let myInput = document.getElementById('myInput');
let copy = document.getElementById("copy");
let bgrColor = document.getElementById('bgrColor');
let btnSumbit = document.getElementById('btnSumbit');
let myColor,copyColor;
myBtn.addEventListener('click', function(){
   let r = Math.floor(Math.random()*255);
   let g = Math.floor(Math.random()*255);
   let b = Math.floor(Math.random()*255);
    myColor = `rgb(${r}, ${g}, ${b})`;
    document.getElementById("demo").innerText = myColor;
})

copy.addEventListener('click', function(){
    copyColor = myColor;
    if(copyColor != undefined)
        alert(`Copy mã màu thành công `);
    else 
    alert(`Bạn chưa chọn mã màu`)
})

bgrColor.style.backgroundColor = myInput.value;

btnSumbit.addEventListener('click',function(){
    bgrColor.style.backgroundColor = myInput.value;
    console.log(myInput.value);
})
   