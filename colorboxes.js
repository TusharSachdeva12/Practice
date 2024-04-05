let arr=['red', 'blue', 'pink', 'yellow', 'orange', 'cyan', 'purple'];
let a = document.body.querySelectorAll(".box");
let size=arr.length;
a.forEach(element => {
    let random=Math.floor(Math.random()*size)
        element.style.color=arr[random]
});
a.forEach(element => {
    let random=Math.floor(Math.random()*size)
        element.style.backgroundColor=arr[random]
});
/*
let boxes = document.querySelector(".container").children 


function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);
    let val2 = Math.ceil(0 + Math.random()* 255);
    let val3 = Math.ceil(0 + Math.random()* 255);
    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})
*/