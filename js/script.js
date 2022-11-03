////////////////navigation bar////////////////
const NavBar = ["HOME", "SERVICE" , "BLOG", "CASE STUDY", "REGISTRATION"];
let NavBarLength = NavBar.length;
let ul = "<ul>";

for(i=0; i< NavBarLength; i++){
    ul +=`<li><a href=${NavBar[i].toLowerCase()}.html>${NavBar[i]}</a></li>`
}
ul += "</ul>";
document.getElementById("nav").innerHTML = ul;

// slider..............................//

 const SlidArray = [
     { 
        id: 1,
        name: "We provide best IT solution",
        title: "Naxly bring the power of data science and artificial intelligence to every business.",
        img:  "https://preview.colorlib.com/theme/itkol/assets/img/hero/xhero-img.png.pagespeed.ic.5EnILQZFRo.webp"

    },
    { 
        id: 2 ,
        name: "We provide best IT solution",
        title: "Naxly bring the power of data science and artificial intelligence to every business.",
        img: "https://markedium.com/wp-content/uploads/2021/04/Untitled-design5.png"

    },
    { 
        id: 3,
        name: "We provide best IT solution",
        title: "Naxly bring the power of data science and artificial intelligence to every business.",
        img:  "https://static.seekingalpha.com/cdn/s3/uploads/getty_images/1350320510/image_1350320510.jpg?io=getty-c-w640"

    },
    { 
        id: 4,
        name: "We provide best IT solution",
        title: "Naxly bring the power of data science and artificial intelligence to every business.",
        img: "https://imageio.forbes.com/specials-images/imageserve/5f77700591bc4fcc93c3c1cc/China-continues-to-move-forward-with-advances-in-using-robotics-and-AI-in/960x0.jpg?format=jpg&width=960"
    },
];
const div = document.getElementById("slider");
let Arrow_l = document.getElementById("fa-arrow-left");
let Arrow_r = document.getElementById("fa-arrow-right");
const h2 = document.createElement("h2");
const p = document.createElement("p");
const img = document.createElement("img");
div.appendChild(h2)
div.appendChild(p);
div.appendChild(img);
let next = 0;

const slider = (item) => {
    img.setAttribute("src", SlidArray[item].img);
    h2.innerText = SlidArray[item].name;
    p.innerText = SlidArray[item].title;
}
slider(next);
Arrow_r.addEventListener("click", () => {
    if(next == SlidArray.length - 1){
        next = 0;
    }else {
        next ++;
    }
    slider(next);
})
 Arrow_l.addEventListener("click", () => {
    if(next == 0){
       next = SlidArray.length - 1;  
    }else {
        next --;
    }
    slider(next);
 })
setInterval (() => {
    if(next == 0){
        next = SlidArray.length - 1;  
     }else {
         next --;
     }
     slider(next);
}, 5000);

// slider circles..............................

SlidArray.forEacf (item => {


})