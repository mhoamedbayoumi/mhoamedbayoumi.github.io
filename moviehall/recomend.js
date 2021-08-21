const image_api='https://image.tmdb.org/t/p/w1280'; // frist part of image api requist
var btn=document.getElementById("recomendationbutton"); // get button to add event
// search is the movie name
function get_recomendation(search)
{

 recomend_api=fetch('https://api.themoviedb.org/3/search/movie?api_key=5e1be4931462d1bed591049354026c8a&query='+search)
 .then(response=>response.json())
 .then(data=>{
    console.log(data);
    // based on frist movie searched response given id  we recomend new movies 
    var d=data.results[1].id;
    fetch("https://api.themoviedb.org/3/movie/"+d+"/recommendations?api_key=5e1be4931462d1bed591049354026c8a&language=en-US&page=1")
   .then(response=>response.json())
   .then(data=>{
       console.log(data);
       // access the main div the contain recomended movies
       main=document.querySelector('main');
       // make a list of 20 recomendation
       for(var i=0;i<20;i++){
        var imgs=document.createElement("img");
        imgs.src=image_api+data.results[i].poster_path;
        // add css style for imgs
        imgs.classList.add("recomendation-cards");
        // append the images in the main div
        main.appendChild(imgs);
      }
    });
  })
}
btn.addEventListener("click",function(){
    // empty the main div
    document.querySelector("main").innerHTML="";
    // search the movie from input text
    search=document.querySelector("input").value;
    get_recomendation(search);
})

// recomendation page animation
gsap.from(".recomendation-header",{duration:1,y:'-900%',delay:0.5});
gsap.from(".inputtext",{duration:1,x:'-900%',delay:0.9});


// phone responsive web navbar icon

var nav=document.getElementById("navicon");
nav.addEventListener('click',function(){
  console.log("worked nav!");
  document.querySelector("ul").style="display:flex;flex-direction: column;position: absolute;transform: translateX(50%);transition: 1s;padding-top:1em";
})
nav.addEventListener("dblclick",function(){
  document.querySelector("ul").style="dispaly:none;";
})
