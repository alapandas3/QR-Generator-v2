function loader(text) {

    document.getElementById("loader").style.display = "block";

    const url = `https://api.qrserver.com/v1/create-qr-code/?data=${text}&size=300x300&amp&color=fff&bgcolor=2d81ff`;
    let img = document.getElementById("one");
    let title = document.getElementById("title");

    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            img.src = URL.createObjectURL(blob);
            title.textContent = `Hey ${text} your Quote of the Day is:`;


            document.getElementById("loader").style.display = "flex";
            document.getElementById("loader").style.justifyContent = "center";
            document.getElementById("loader").style.alignItems = "center";
            document.getElementById("loader").innerHTML = "Loading....";
            document.getElementById("loader").style.display = "none";
            document.getElementById("one").style.display = "block";
        });
}

function worker() {
    const textinp = document.getElementById("input").value;
    const url = `https://api.quotable.io/random`;
    let quote = document.getElementById("quote");

    document.getElementById("input").disabled = true;
    document.getElementById("button").disabled = true;
    if (textinp != '') {
        fetch(url)
            .then(response => response.text())
            .then((response) => {
                var i = JSON.parse(response);

                quote.innerHTML = '"' + i.content + '"';
            })
            .catch(err => console.log(err))

        loader(textinp);
        document.getElementById("input").disabled = false;
        document.getElementById("button").disabled = false;

    }
    else {
        quote.innerHTML = '';
    }
}
