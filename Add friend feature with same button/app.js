let addFirend = document.querySelector('#add');
let statusText = document.querySelector('h3')

let check = 0;

addFirend.addEventListener("click", function () {
    if (check === 0) {
        statusText.innerHTML = "Friends";
        statusText.style.color = "green";
        addFirend.style.color = "black"
        addFirend.style.background ="white";
        addFirend.innerHTML = "Remove Friend";
        check = 1;
    }else{
        statusText.innerHTML = "Stranger";
        statusText.style.color = "green";
        addFirend.style.color = "rgb(254, 239, 219)"
        addFirend.style.background ="cornflowerblue";
        addFirend.innerHTML = "Add Friend";
        check = 0;
    }
})
