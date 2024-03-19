
window.addEventListener("DOMContentLoaded", (event) => {

    let inputtext = document.getElementById("ip");
    let inptext;
    let imgc=document.getElementById('qrc')

    function getImage() {
        var url = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="
        inptext=inputtext.value
        const finalurl=url.concat(inptext);
        imgc.style.display='block';
        // fetch(finalurl)
        // .then(response =>
        //     {
        //         if(response.ok) {
        //             console.log("Fetched");
        //         }else{
        //             console.log("ERROR");
        //         }
        //     })
        //     .then(data=>{
        //         setImage(data);
        //     })
        //     .catch(error=>{
        //         console.log(error);
        //     });
        imgc.src=finalurl;
    }
    // function setImage() {
    //     console.log("Working :)")
    // }
    const button = document.getElementById("button")
    button.addEventListener('click', function () {
        getImage();
    })




});
