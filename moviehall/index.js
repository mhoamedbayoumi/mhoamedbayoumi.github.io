// tmdb api 
const tmdb_api ='https://api.themoviedb.org/3/movie/550?api_key=5e1be4931462d1bed591049354026c8a';
const api_key='/api_key=5e1be4931462d1bed591049354026c8a';
const image_api='https://image.tmdb.org/t/p/w1280';
const base_url='https://api.themoviedb.org/3/';
const pop_movie='https://api.themoviedb.org/3/movie/popular?api_key=5e1be4931462d1bed591049354026c8a&language=en-US';
// select main div
const main = document.querySelector('.main');
var api=fetch("https://api.themoviedb.org/3/movie/popular?api_key=5e1be4931462d1bed591049354026c8a&language=en-US")
.then(response=>response.json())
.then(data=>{
  console.log(data.results);
  console.log(data.results[1].poster_path);
  // make popular movie banner
  function createbanner()
  {
    document.getElementById("banner").src='https://image.tmdb.org/t/p/w1280'+(data.results[1].backdrop_path);
    document.getElementById("banner").classList.add("banner");
    document.getElementById("movie-name").textContent=data.results[1].title;
    document.getElementById("movie-desc").textContent=data.results[1].overview;
  }
  createbanner();
  function go_trailer(){
    link=document.getElementById("movie-trailer").href="https://www.youtube.com/results?search_query="+data.results[1].title;
  }
  go_trailer();
  
  //create trinding movies row 

  function trinding_row(){
    var row=document.getElementById("trinding-row");
    for(var i=0;i<20;i++){
      var imgs=document.createElement("img");
      imgs.src=image_api+data.results[i].poster_path;
      // add style to img
      imgs.classList.add("trinding-cards");
      // append img in trinding row div
      row.appendChild(imgs);
    }
  }
  trinding_row();
})

// series api slider

var api_des=fetch("https://api.themoviedb.org/3/tv/popular?api_key=5e1be4931462d1bed591049354026c8a&language=en-US&page=1")
.then(response=>response.json())
.then(data=>{
  console.log(data.results);
  var series=document.getElementById("trinding-series-row");
  // make 20 cards of trending series 
  for(var i=0;i<20;i++)
  {
      var img=document.createElement("img");
      img.src=image_api+data.results[i].poster_path;
      // add style to img
      img.classList.add("trinding-series");
      // append img in series row div
      series.appendChild(img);
  }
});


// top rated movies slider

var api_top=fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=5e1be4931462d1bed591049354026c8a&language=en-US&page=1")
.then(response=>response.json())
.then(data=>{
  console.log(data.results);
  var top_rated=document.getElementById("top-rated-row");
  for(var i=0;i<20;i++)
  {
      var img=document.createElement("img");
      img.src=image_api+data.results[i].poster_path;
      // add style to img
      img.classList.add("top-movies");
      // append img in top rated row
      top_rated.appendChild(img);
  }
})

// in theatres slider

var api_theatres=fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=5e1be4931462d1bed591049354026c8a&language=en-US&page=1")
.then(response=>response.json())
.then(data=>{console.log(data.results);
  var in_theatres=document.getElementById("theatres-row");
  for(var i=0;i<20;i++)
  {
      var img=document.createElement("img");
      img.src=image_api+data.results[i].poster_path;
      img.classList.add("theatres-movies");
      in_theatres.appendChild(img);
  }
})
 

// up coming movie
var api_upcoming=fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=5e1be4931462d1bed591049354026c8a&language=en-US&page=1")
.then(response=>response.json())
.then(data=>{console.log(data.results);
  var up_coming=document.getElementById("upcoming-row");
  for(var i=0;i<20;i++)
  {
      var img=document.createElement("img");
      img.src=image_api+data.results[i].poster_path;
      img.classList.add("upcoming-movies");
      up_coming.appendChild(img);
  }
})

// creating the start animation
function lunch_animation()
{
gsap.from("nav",{duration:1,y:'-100%',delay:0.5});
gsap.from("nav",{duration:1,opacity:'0'});
gsap.from('.banner',{duration:1,x:'-500%',ease:'sine(1,0.3)',delay:1.2});
gsap.from('.movie-name',{duration:1,x:'-500%',ease:'sine(1,0.3)',delay:1.3});
gsap.from('.movie-trailer',{duration:1,opacity:'0',delay:2});
gsap.from('.movie-desc',{duration:1,x:'100%',ease:'sine(1,0.3)',delay:1.5});
}
lunch_animation();

// creating 3d animation in 3d section

document.getElementById('modelviewer').onclick= function model_veiwer()
{
  const modelViewer = document.getElementById('modelviewer');
  const orbitCycle = [
    '45deg 55deg 4m',
    '-60deg 110deg 2m',
    modelViewer.cameraOrbit
  ];

  setInterval(() => {
    const currentOrbitIndex = orbitCycle.indexOf(modelViewer.cameraOrbit);
    modelViewer.cameraOrbit =
        orbitCycle[(currentOrbitIndex + 1) % orbitCycle.length];
  }, 3000);
}



// phone responsive web navbar icon

var nav=document.getElementById("navicon");
nav.addEventListener('click',function(){
  console.log("worked nav!");
  document.querySelector("ul").style="display:flex;flex-direction: column;position: absolute;transform: translateX(50%);transition: 1s;padding-top:1em";
})
nav.addEventListener("dblclick",function(){
  document.querySelector("ul").style="dispaly:none;";
})