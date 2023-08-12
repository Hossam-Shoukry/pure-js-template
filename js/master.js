// control background interval
let backgroundinterval ;
//Random Background option
let backgroundOption = true;

//check if there is local storage color option
if( localStorage.getItem("color_option") !== null){
    document.documentElement.style.setProperty('--main-color' ,  localStorage.getItem("color_option"));
    // remove active class from all children

    document.querySelectorAll(".colors-list li").forEach(function(element){
        element.classList.remove("active");
        //add active class on element with data color === local storage

        if(element.dataset.color ===  localStorage.getItem("color_option")){
            element.classList.add("active");
        }
        
    });

}
// افحص اذا كان هناك قيمة للكلاس بنعم او لا
if(localStorage.getItem("set")){

    document.querySelectorAll(".random-backgrounds span").forEach(function(e){
        e.classList.remove("active");
        //اذا كانت الداتا سيت تساوى القيمة الموجودة فى المخزن المحلى لوكال ستوراج ضيف الكلاس الذى يتم تطبيق المواصفات المطلوبة عليه
        if(e.dataset.background == localStorage.getItem("set")){
            e.classList.add("active");
        }
    })   
}

if(localStorage.getItem("set") === "yes"){
    backgroundOption =true;
    randomizeimg();
}else{
    backgroundOption =false;
    clearInterval(backgroundinterval);
}
if(localStorage.getItem("backgroundColor")){
    document.querySelector(".landing-page").style.backgroundImage = localStorage.getItem("backgroundColor");
}

//toggle spin  class on icon
document.querySelector(".toggle-settings .fa-gear").onclick = function(){
    this.classList.toggle("fa-spin");
    // toggle class open on main setting box بمجرد ما انقر على العنصر هيضيف كلاس الكلاس ده واخد تنسيقات تحريك العنصر على الشمال الى ان يتم اختفاءه
document.querySelector(".settings-box").classList.toggle("open");
}
/****************************************************************************************************** */
// hide and show local storage
if(localStorage.getItem("hidOrShow") == "hide"){
    document.querySelectorAll(".bullets-option span").forEach(function(e){
        e.classList.remove("active");
        if(e.dataset.display===localStorage.getItem("hidOrShow") ){
            e.classList.add("active");
        }
    });
    document.querySelector(".nav-bullets").style.display = "none"
    
}else{
    document.querySelector(".nav-bullets").style.display = "block"
}
//Switch Colors
const colorsLi = document.querySelectorAll(".colors-list li");
// loop on all ist items
colorsLi.forEach(function(li){
    //click on every list items
li.addEventListener("click" , function(e){
//get color from li data-color set color on root
localStorage.setItem("color_option" ,e.target.dataset.color);
document.documentElement.style.setProperty('--main-color' , localStorage.getItem("color_option"));
    // remove active class from all children
e.target.parentElement.querySelectorAll(".active").forEach(function(element){
    element.classList.remove("active");
})

e.target.classList.add("active");
});
});
/********************************************************************************************************** */
//Switch Random Background option
const randomBackgroundElement = document.querySelectorAll(".random-backgrounds span");
// loop on all spans
randomBackgroundElement.forEach(function(random){
    //click on every list items
random.addEventListener("click" , function(e){
    // remove active class from all children
randomBackgroundElement.forEach(function(e){
    e.classList.remove("active");
})
e.target.classList.add("active");
localStorage.setItem("set" , e.target.dataset.background);

if(e.target.dataset.background == "yes"){
   backgroundOption =true;
   randomizeimg();
}else{
    backgroundOption =false;
    clearInterval(backgroundinterval);
}


});
});

//select landing page element

let landingPage  = document.querySelector(".landing-page");
 //get array of images 
 let imgsArray = ["02.jpg" , "03.jpg" , "04.jpg" , "05.jpg" , "06.jpg" , "07.jpg"];


// varibale to  control the inteval
/******************************************************************************************************** */
//function to rndomize imgs
function randomizeimg(){
    if(backgroundOption == true){
// get random number
backgroundinterval = setInterval(()=>{
    //طباعة المتغير داخل الدالة ليتم طباعة رقم مختلف فى كل مرة
 let randomNumber = Math.floor(Math.random() *imgsArray.length);
  //change background image url
  localStorage.setItem("backgroundColor" , 'url("images/' + imgsArray[randomNumber] +'")');
landingPage.style.backgroundImage = localStorage.getItem("backgroundColor");
},1000);
 
    }
    
}randomizeimg(); 
 
/******************************************************************************************************** */

//select skills selector 
let ourSkills = document.querySelector(".skills");
window.onscroll = function(){

//skills offset Top مجموع طول العناصر الموجودة فوق سيكشن المهارات
    let skillsOffsetTop = ourSkills.offsetTop;

    // skills outer height طول سيكش المهارات نفسه
let skillsOuterheight = ourSkills.offsetHeight;

//windwo height طول النافذة الحالية الى انا شغال فيها يعنى طول النافذة الى ظاهرالى بدون ما اعمل سكرول
let windwoHeight = this.innerHeight;

//windwo scrolltop طول النافذة كاملة يعنى طول الاسكرول كامل من اول جزء فى صفحة الويب لاخر جزء
let windwoScrollTop = this.pageYOffset;
let  allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {
if (windwoScrollTop >= (skillsOffsetTop + skillsOuterheight - windwoHeight)) {
skill.style.width = skill.dataset.progress;
}else{
    skill.style.width = 0
}
}
)};

/********************************************************************************************************* */
//create popup with the image
let ourGellery = document.querySelectorAll(".gellery img");
ourGellery.forEach(function(img){
    img.addEventListener("click" , function(e){
//create overlay element
let overlay = document.createElement("div");
// add calss to overlay
overlay.className="popup-overlay";

//append overlay to body
document.body.appendChild(overlay);
// create the poup box
let popupBox = document.createElement("div");
//add class to the popu box
popupBox.className="popup-box";
// create heading to img if img alt is not null
if(img.alt !== null){
    //create heading
    let imgHeading = document.createElement("h3");
    //create text for heading
    
    let imgText = document.createTextNode(img.alt);
    
    //append text to heading
imgHeading.appendChild(imgText);
//append heading to popup box
popupBox.appendChild(imgHeading);
}
//create the image
let popupImage = document.createElement("img");
//set img source
popupImage.src=e.target.src;

//add image to popup box
popupBox.appendChild(popupImage);
//append the popu box to body

document.body.appendChild(popupBox);
//create the close span انشاء زر لاغلاق الصورة المنبثقة
let closeButton = document.createElement("span");
//create the close button text
let closeButtonText = document.createTextNode("X");
//append text to close button
closeButton.appendChild(closeButtonText);
//add class to close button
closeButton.className ='close-button';
//add close button to popu box
popupBox.appendChild(closeButton);

    })
})
//close popup
document.addEventListener("click" ,function(e){
if(e.target.className === "close-button"){
    // remove the current popup
    e.target.parentNode.remove();
    // remove overlay
    document.querySelector(".popup-overlay").remove();
}
});
/****************************************************************************************************** */
//Select all bullets
const allbullets =document.querySelectorAll(".nav-bullets .bullet");

/********************************************************************************************************** */
 //Select All Links
 const allLinks =document.querySelectorAll(".links a");

/******************************************************************************************************** */
//طريقة اخرى لعمل سكرول على الاجزاء بمجرد الضغط على اللينك
function scrollToSomewhere(elements){

    elements.forEach(function(ele){
    ele.addEventListener("click",function(e){
        
        e.preventDefault();
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        });
        
    });
    });
}scrollToSomewhere(allbullets);
scrollToSomewhere(allLinks);
/**************************************************************************************************** */
//create show and hide bullets box
let bulletsSpan = document.querySelectorAll(".bullets-option span");
let bulletsContainer = document.querySelector(".nav-bullets");
bulletsSpan.forEach(function(span){

    span.addEventListener("click" , function(e){

if(e.target.dataset.display === "show"){

bulletsContainer.style.display = "block";

}else{

    bulletsContainer.style.display = "none";

}
bulletsSpan.forEach(function(e){
    e.classList.remove("active")
});
e.target.classList.add("active");
localStorage.setItem("hidOrShow" , e.target.dataset.display);
    });

});

/******************************************************************************************************** */
//Reset button
document.querySelector(".reset-option").onclick=function(){
    localStorage.removeItem("hidOrShow");
    localStorage.removeItem("color_option");
    //reload my window
    window.location.reload();
} 
/******************************************************************************************************* */
//برمجة كلاس يظهر معها سهم القائمة المتوافقة مع اجهزة الموبايل الصغيرة 
let toggleBtn = document.querySelector(".toggle-menu");
let tLinks = document.querySelector(".links");


toggleBtn.onclick=function(e){
    //stop propagation عشان الشرط يتحقق على العناص الى جوا الزرار برضو
   e.stopPropagation();
    //toggle class "menu-active"
this.classList.toggle("menu-active");
    //toggle class "open"
    tLinks.classList.toggle("open");
};
/******************************************************************************************************* */
//click at anywhere in the page to close the element you want
document.addEventListener("click" , function(e){
if(e.target !== toggleBtn && e.target!==tLinks){
//check if menu is open شوف القائمة مفتوحة ولا لا
if(tLinks.classList.contains("open")){
    toggleBtn.classList.toggle("menu-active");
    //toggle class "open"
    tLinks.classList.toggle("open");
}
}
});
    //stop propagation عشان الشرط يتحقق على العناص الى جوا الزرار برضو
tLinks.onclick = function(e){
e.stopPropagation();
}
