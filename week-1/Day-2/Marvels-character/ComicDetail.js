let output = document.getElementById("output");
    let id = JSON.parse(localStorage.getItem("comic"));
    console.log("id",id);

    async function getData() {
        let res = await fetch(
            `https://gateway.marvel.com:443/v1/public/comics/${id}?apikey=0ddf46d4352404a37ba270cd3fb21d3a`
        );
        let data = await res.json();
        let temp = await data.data.results[0];
        await printData(temp);
    }

    function printData(data) {
        let src = data.thumbnail.path + "." + data.thumbnail.extension;
        let img = document.createElement("img");
        img.setAttribute("src", src);

        let title = document.createElement("h2");
        title.innerHTML = data.title;

        let description = document.createElement("p");
        description.innerHTML = data.textObjects[0].text;

        output.append(img, title, description);
    }

    getData();