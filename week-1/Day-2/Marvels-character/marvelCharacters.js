let input = document.getElementById("input");
    let output = document.getElementById("output");
    let timerId;

    function throttle() {
        if (timerId) return false;

        timerId = setTimeout(() => {
            getData();
            output.style.display = "none";
            timerId = undefined;
        }, 1000);
    }

    async function getData() {
        let value = input.value;
        if (value == "") {
            return false;
        }
        let res = await fetch(
            `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${value}&apikey=0ddf46d4352404a37ba270cd3fb21d3a`
        );
        let data = await res.json();
        let temp = await data.data.results;
        printData(temp);
    }

    function printData(data) {
        output.innerHTML = "";
        output.style.display = "block";
        for (let key of data) {
            let div = document.createElement("div");
            div.setAttribute("class", "character");
            div.innerHTML = key.name;
            output.append(div);
        }
    }