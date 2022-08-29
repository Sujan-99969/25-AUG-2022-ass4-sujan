let modal = document.getElementById("myModal");
let modelImg = document.getElementById("imgpopup")
let imgZoom = document.getElementsByClassName("zoom");

imgZoom.onclick = function(){
    modal.style.display = "block";
    modelImg.src = this.src;
    console.log(imgZoom);

}

document.addEventListener("click", myFunction);

let imageZoom = imgZoom.addeventListener("click" ,function(){
    modal.style.display = "block";
    modelImg.src = this.src;
    console.log(imageZoom);
})