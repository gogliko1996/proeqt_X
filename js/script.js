////////////////navigation bar////////////////
const NavBar = ["HOME", "SERVICE", "BLOG", "CASE STUDY", "REGISTRATION"];
let NavBarLength = NavBar.length;
let ul = "<ul>";

for (i = 0; i < NavBarLength; i++) {
  ul += `<li><a href=${NavBar[i].toLowerCase()}.html>${NavBar[i]}</a></li>`;
}
ul += "</ul>";
document.getElementById("manu").innerHTML = ul;
document.getElementById("burgermanu").innerHTML = ul;

// slider..............................//

const SlidArray = [
  {
    id: 1,
    name: "We provide best IT solution",
    title:
      "Naxly bring the power of data science and artificial intelligence to every business.",
    img: "https://www.engineering.columbia.edu/files/seas/styles/816x460/public/content/cs_image/2022/28/robot_hero.jpg?itok=TrT_MOb-",
  },
  {
    id: 2,
    name: "IT solutions for startup and enterprises",
    title:
      "Naxly bring the power of data science and artificial intelligence to every business.",
    img: "https://markedium.com/wp-content/uploads/2021/04/Untitled-design5.png",
  },
  {
    id: 3,
    name: "ITKol - Partner for Your Business",
    title:
      "Naxly bring the power of data science and artificial intelligence to every business.",
    img: "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1350320510/image_1350320510.jpg?io=getty-c-w640",
  },
  {
    id: 4,
    name: "Some of Our Great Stuffs",
    title:
      "Naxly bring the power of data science and artificial intelligence to every business.",
    img: "https://imageio.forbes.com/specials-images/imageserve/5f77700591bc4fcc93c3c1cc/China-continues-to-move-forward-with-advances-in-using-robotics-and-AI-in/960x0.jpg?format=jpg&width=960",
  },
];
const div = document.getElementById("slider");
let Arrow_l = document.getElementById("fa-arrow-left");
let Arrow_r = document.getElementById("fa-arrow-right");
const h2 = document.createElement("h2");
const p = document.createElement("p");
const img = document.createElement("img");
div.appendChild(h2);
div.appendChild(p);
div.appendChild(img);
let next = 0;
let currentid = 0;

// slider circles..............................
const divRingBox = document.getElementById("ringbox");
SlidArray.forEach((item) => {
  const divRing = document.createElement("div");
  divRing.setAttribute("id", item.id - 1);
  divRingBox.appendChild(divRing);

  divRing.addEventListener("click", (ivent) => {
    next = ivent.target.id;
    slider(next);
  });

});

const forblack = (id) => {
    document.getElementById(currentid).style.background = "rgba(0,0,0,0)"
    document.getElementById(currentid).style.border = "3px solid #000000"
    document.getElementById(id).style.background = "#000";
    currentid = id;
};

const slider = (item) => {
  forblack(item);
  img.setAttribute("src", SlidArray[item].img);
  h2.innerText = SlidArray[item].name;
  p.innerText = SlidArray[item].title;
};
slider(next);

Arrow_r.addEventListener("click", () => {
  if (next == SlidArray.length - 1) {
    next = 0;
  } else {
    next++;
  }
  slider(next);
});
Arrow_l.addEventListener("click", () => {
  if (next == 0) {
    next = SlidArray.length - 1;
  } else {
    next--;
  }
  slider(next);
});
setInterval(() => {
  if (next == 0) {
    next = SlidArray.length - 1;
  } else {
    next --;
  }
  slider(next);
}, 5000);

// burger menu..............................

const Burger = document.getElementById("burgerbar");
const BurgerManu = document.getElementById("burgermanu");

Burger.addEventListener("click", () =>{
  BurgerManu.classList.toggle("burgermanublock");
})





