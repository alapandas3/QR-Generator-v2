
window.addEventListener("DOMContentLoaded", (event) => {


    let inputtext = document.getElementById("ip");
    let inptext;
    let imgc = document.getElementById('qrc')
    let colors = ["#6096BA", "#a3cef1", "#8b8c89", "#e7ecef",];
    function getImage() {
        var url = " https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="
        inptext = inputtext.value
        const finalurl = url.concat(inptext);
        if (inptext.length <= 0) {
            alert("EMPTY INPUT");
            return
        }
        imgc.style.display = 'block';
        imgc.src = finalurl;
        // imgc.onload = function () {
            document.body.style.backgroundColor = colors[0]; 
            // colors[Math.floor(Math.random() * 10)];
        // }
    }
    const button = document.getElementById("button")
    button.addEventListener('click', function () {
        getImage();
        // animateBg(0);
    })




});
