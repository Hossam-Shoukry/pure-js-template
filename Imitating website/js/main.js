
let statu = true;
let setTime;
if(localStorage.getItem("main-page-color")){
    document.querySelectorAll(".setting-box .setting-colors span").forEach((e)=>{
        e.classList.remove("active");
        if(e.dataset.color ===localStorage.getItem("main-page-color")){
            e.classList.add("active");
        }
    });
    document.documentElement.style.setProperty("--main-color" , localStorage.getItem("main-page-color"))
}

document.querySelector(".toggle-button").onclick=function(){
 document.querySelector(".setting-box").classList.toggle("open");
 document.querySelector(".fa-gear").classList.toggle("rotate");   
}
if(localStorage.getItem("status")){
    document.querySelectorAll(".setting-box .setting-colors button").forEach(function(e){
        e.classList.remove("active");
        if(e.dataset.status === localStorage.getItem("status")){
            e.classList.add("active");
        }
    })
}
if(localStorage.getItem("status") =="play"){
    statu = true;
    backgroundMovement();
}else{
    statu = false
    clearInterval(setTime);
}
if(localStorage.getItem("backgroundimg")){
    document.querySelector(".part1").style.backgroundImage = localStorage.getItem("backgroundimg");
}




let colors = document.querySelectorAll(".setting-box .setting-colors span");

colors.forEach(function(span){
    span.addEventListener("click" , function(e){
        localStorage.setItem("main-page-color" , e.target.dataset.color);
        document.documentElement.style.setProperty("--main-color" , localStorage.getItem("main-page-color"));
        colors.forEach(function(e){
            e.classList.remove("active");
        })
        e.target.classList.add("active");
    })
});

let backgroundStatus = document.querySelectorAll(".setting-box .setting-colors button");

backgroundStatus.forEach(function(button){
    button.addEventListener("click" , function(e){
        localStorage.setItem("status" , e.target.dataset.status);
        backgroundStatus.forEach(function(e){
            e.classList.remove("active");
        })
        e.target.classList.add("active");
        if(localStorage.getItem("status") =="play"){
statu = true
backgroundMovement();
        }else{
            statu = false;
            clearInterval(setTime);
        }
    });
    
});
let landing = document.querySelector(".part1");
function backgroundMovement(){
if(statu===true){
    setTime = setInterval(function(){
        let backArr = ["02.jpg" ,"03.jpg","04.jpg","05.jpg","06.jpg"]
        let counter =Math.floor(Math.random() * backArr.length);
        localStorage.setItem("backgroundimg" , 'url("/images/'+backArr[counter]+'")')
        landing.style.backgroundImage = localStorage.getItem("backgroundimg");
        },1000);
}
};
let skillsSection = document.querySelector(".our-skills");
let skillsDescribtion = document.querySelectorAll(".skills .skill-describtion");
window.onscroll = function(){
    let skillsSectionHeight = skillsSection.offsetHeight;
    let aboveSkillsSection = skillsSection.offsetTop;
    let windowHeight = this.innerHeight;
    let scrollPageHeight = this.pageYOffset;
    skillsDescribtion.forEach(function(skill){

    if(scrollPageHeight >= (skillsSectionHeight+aboveSkillsSection-windowHeight)){
        skill.style.width = skill.dataset.width;
    }else{
        skill.style.width=0;
    }
});
};
/********************************************************************************************************* */

let gellery = document.querySelectorAll(".gellery .gellerycontent .gellerys");
gellery.forEach(function(gellery){
    gellery.addEventListener("click" , function(e){
        let overlay = document.createElement("div");
        overlay.className = "gellery-overlay";
        let poupImg = document.createElement("div");
        poupImg.className="popup-image"
        let image = document.createElement("img");
        image.src = e.target.src;
        let h2 = document.createElement("h2");
        let imgText = document.createTextNode(image.src);
        let close = document.createElement("span");
        close.appendChild(document.createTextNode("X"));
close.className="close";
        poupImg.appendChild(close);
        h2.appendChild(imgText);
        poupImg.appendChild(h2)
        poupImg.appendChild(image);
        document.body.appendChild(overlay);
        document.body.appendChild(poupImg);

    });
});
document.addEventListener("click" , function(e){
    if(e.target.classList.contains("close")){
        e.target.parentNode.remove();
        document.querySelector(".gellery-overlay").remove();
    }
});

/************************************************************* */
const bullets = document.querySelectorAll(".nav-bullets .bullet");


bullets.forEach(function(e){
    e.addEventListener("click" , function(e){
   e.preventDefault();
   document.querySelector(e.target.dataset.section).scrollIntoView({
    behavior:'smooth'
   });

    });
});
/*************************************************************************************************** */
let menu = document.querySelectorAll(".button button");
let menuLinks = document.querySelector(".media-links");

menu.forEach(function(butt){
butt.addEventListener("click" , function(e){
    e.stopPropagation();
    menuLinks.style.display = "block";
})
})

document.addEventListener("click" , function(e){
    if(e.target !== menu && e.target !== menuLinks){
        e.stopPropagation();
menuLinks.style.display = "none";
    }
});

console.log(menu);


/****************************************************** */
//try some methods by constructor way
class user {
constructor(menu, links ){
   this.m = menu,
   this.l=links;
}
method(){
    this.m.forEach(function(e){
        e.addEventListener("click" , function(e){
            console.log(e.target.nodeName);
        })
    })
}
}

let userOne1 = new user(menu , menuLinks);


function back(method){
return method;
}back(userOne1.method());
/******************************************************************************************* */



let arr = [10,20,30,40,50,"A","B"];
console.log(arr);
arr.copyWithin(3 ,-3);
console.log(arr);



  