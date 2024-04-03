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