
// Like Button Alert
const btn = document.getElementById('likeBtn');
btn.onclick = function btnLikedAlert(){
    alert('Like Sent!')
}

function openMenu(){
    var x = document.getElementById("menuOpened");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block"
    }
}