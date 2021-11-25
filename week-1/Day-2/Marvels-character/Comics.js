let output = document.getElementById("output");
    let timerId;

    async function getData() {
        let res = await fetch(
            `https://gateway.marvel.com:443/v1/public/comics?formatType=comic&noVariants=true&orderBy=focDate&apikey=0ddf46d4352404a37ba270cd3fb21d3a`
        );
        let data = await res.json();
        let temp = await data.data.results;
        console.log(temp);
        printData(temp);
    }

    function printData(data) {
        output.innerHTML = "";
        for (let key of data) {
            let name = document.createElement("h3");
            name.setAttribute("class", "name");
            name.innerHTML = key.title;

            let img = document.createElement("img");
            img.setAttribute("class", "thumbnail");
            let src = key.thumbnail.path + "." + key.thumbnail.extention;
            img.setAttribute(
                "src",
                key.thumbnail.path + "." + key.thumbnail.extension
            );

            let div = document.createElement("div");
            div.setAttribute("class", "outerDiv");
            div.append(img);
            div.append(name);
            div.addEventListener("click", () => {
                localStorage.removeItem("comic");
                localStorage.setItem("comic", JSON.parse(key.id));
                location.href = "./ComicDetail.html";
            });
            output.append(div);
        }
    }

    getData();