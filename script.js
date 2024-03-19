
window.addEventListener("DOMContentLoaded", (event) => {

    let inputtext = document.getElementById("ip");
    let inptext;
    let imgc = document.getElementById('qrc')

    function getImage() {
        var url = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
        inptext = inputtext.value
        const finalurl = url.concat(inptext);
        if (inptext.length <= 0) {
            alert("EMPTY INPUT");
            return
        }
        imgc.style.display = 'block';
        imgc.src = finalurl;
        document.body.style.backgroundColor = "#6096BA";
    }
    const button = document.getElementById("button")
    button.addEventListener('click', function () {
        getImage();
    })




});
