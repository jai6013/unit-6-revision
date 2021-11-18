const api_key = "563492ad6f91700001000001b192f238960e4802bba1c8d7a9982cbc";
const data = [
  {
    title: "Metal",
    src: "https://media.istockphoto.com/photos/rusty-painted-metal-background-picture-id1318168616?b=1&k=20&m=1318168616&s=170667a&w=0&h=cFpXOe4OnLY9prvcV93sh9f4Wz_LNqklQmaUob38xgI=",
  },
  {
    title: "Football",
    src: "https://media.istockphoto.com/photos/american-football-ball-on-white-background-picture-id172201273?b=1&k=20&m=172201273&s=170667a&w=0&h=_vphpxcb2cQvoU7pHz8i_AxVA_VCIa4q_W-Kmg4GprE=",
  },
  {
    title: "Secret Santa",
    src: "https://media.istockphoto.com/photos/christmas-gift-in-office-workplace-picture-id1284630047?b=1&k=20&m=1284630047&s=170667a&w=0&h=yPymulI1Y_MXZkBNPlG8YzE6fUwnVHnAHmlsqW2xeRk=",
  },
  {
    title: "Steve Irwin",
    src: "https://images.unsplash.com/photo-1588073882362-b4309c60cea0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHN0ZXZlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Inspiring",
    src: "https://media.istockphoto.com/photos/teamwork-friendship-hiking-help-each-other-trust-assistance-in-of-picture-id1255203350?b=1&k=20&m=1255203350&s=170667a&w=0&h=pwRoZJaOeLy2OTg06B19QbYpOCXe3WxBROBCi-H2XWQ=",
  },
  {
    title: "Family",
    src: "https://images.unsplash.com/photo-1532377416656-e35d0e574765?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGZhbWlseXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Cat",
    src: "https://media.istockphoto.com/photos/kitten-at-home-garden-wall-picture-id1273661469?b=1&k=20&m=1273661469&s=170667a&w=0&h=K-b-88J89oSBIwbD0WhhDoOvybcbjfePJoOHS0grHHA=",
  },
  {
    title: "Youtube",
    src: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eW91dHViZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Funny",
    src: "https://media.istockphoto.com/photos/happy-puppy-dog-smiling-on-isolated-yellow-background-picture-id1267466399?b=1&k=20&m=1267466399&s=170667a&w=0&h=KvxHe6yir1ZBtHVp4hYLxDv-g3nkvmzhi-sn0D9w9VQ=",
  },
  {
    title: "Food",
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Cute",
    src: "https://media.istockphoto.com/photos/portrait-of-african-baby-toddler-smiling-sitting-on-bed-indoor-picture-id1311426758?b=1&k=20&m=1311426758&s=170667a&w=0&h=mFGdHj1PELUVWfSTMkRyfYXOpAlXZMALkPmYGbD7rdc=",
  },
];

function showTags(data) {
  data.forEach(({ title, src }) => {
    var card = document.createElement("div");
    card.addEventListener("click", () => getRes(title,pageNo));
    card.className = "card";
    var img = document.createElement("img");
    img.src = src;
    img.className = "tagsImg";
    var cardTitle = document.createElement("div");
    cardTitle.innerText = title;
    card.append(img, cardTitle);
    var exploreMoreContent = document.getElementById("exploreMoreContent");
    exploreMoreContent.append(card);
  });
}

setTimeout(() => {
  showTags(data);
}, 100);
const showAllImages = (data) => {
  let mainDiv = document.getElementById("image-grid");
  const { photos } = data;
  photos.forEach(({ src }) => {
    let subDiv = document.createElement("div");
    let randomHeight = randomizer() + "px";
    subDiv.style.height = randomHeight;
    subDiv.style.lineHeight = randomHeight;
    let image = document.createElement("img");
    image.classList.add("pexel-img");
    image.src = src.original;

    subDiv.append(image);

    mainDiv.append(subDiv);
  });
};

const getData = async (pageNo) => {
  console.log(pageNo);
  if(pageNo === undefined)
  return
  const response = await fetch(
    `https://api.pexels.com/v1/curated?page=${pageNo}
    `,
    {
      headers: {
        Authorization: api_key,
      },
    }
  );

  const data = await response.json();
  showAllImages(data);
};

function randomizer() {
  let arr = [200, 300, 400];
  let index = Math.floor(Math.random() * 3);
  return arr[index];
}

function colorRandomizer() {
  let num = Math.floor(Math.random() * 255);
  return num;
}
window.addEventListener('load', () => getData(pageNo))

function throttleFunction() {
  const query = document.getElementById("inputBox").value;
  if (query.length < 2) {
    return;
  }
  var timerId;

  timerId = setTimeout(() => {
    main();
    timerId = undefined;
  }, 500);
  const main = () => {
    getRes(query, pageNo);
  };
}

const getRes = (query,pageNo) => {
    if(pageNo === undefined){
        return
    }

  fetch(`https://api.pexels.com/v1/search?query=${query}?page=${pageNo}`, {
    headers: {
      Authorization: api_key,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      showAllImages(res);
    });
};

var pageNo = 1;
window.addEventListener("scroll", () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight > scrollHeight - 5) {
    setTimeout(() => getData(++pageNo), 2000);
  }
});
