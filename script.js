window.addEventListener("DOMContentLoaded", (event) => {
    const inputBox = document.getElementById("ip");
    const imgc = document.getElementById('qrc');
    const colors = ["#6096BA", "#a3cef1", "#8b8c89", "#e7ecef"];
    inputBox.addEventListener('input', function() {
        if (inputBox.value === '') {
            imgc.style.display = 'none';
        } else {
            imgc.src='';
            imgc.style.display = 'block'; // Show the image container
        }
    });
    function getImage() {
        const url = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=";
        const inptext = inputBox.value;
        const finalurl = url.concat(inptext);

        if (inptext.length <= 0) {
            alert("EMPTY INPUT");
            return;
        }

        imgc.style.display = 'block';
        imgc.src = finalurl;

        document.body.style.backgroundColor = colors[0];
    }

    const button = document.getElementById("button");
    button.addEventListener('click', function () {
        getImage();
    });
});
