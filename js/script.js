////////////////navigation bar////////////////
const NavBar = ["HOME", "SERVICE" , "ABOUT", "CASE STUDY", "BLOG"];
const NavLink = ["#", "#", "#", "#", "#"];
let NavBarLength = NavBar.length;
let ul = "<ul>";

for(i=0; i< NavBarLength; i++){
    ul +=`<li><a href=${NavLink[i]}>${NavBar[i]}</a></li>`
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
SlidArray.forEach((item) => {
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const img = document.createElement("img");
    let next = 1;
    if(item.id === next){
        img.setAttribute("src", item.img);
        div.appendChild(img);
    }

})

