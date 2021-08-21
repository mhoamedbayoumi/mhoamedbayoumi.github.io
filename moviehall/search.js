const image_api='https://image.tmdb.org/t/p/w1280'; // frist part of image api requist
var btn=document.getElementById('searchbutton');     // get button to add event
function get_search(movie_name){
    search_api=fetch('https://api.themoviedb.org/3/search/movie?api_key=5e1be4931462d1bed591049354026c8a&query='+movie_name)
    .then(response=>response.json())
    .then(data=>{
      var search_section=document.querySelector(".search-section"); // select the main div that contain all searched movies
      for(var i=0;i<20;i++)
      {
        var movie_div=document.createElement('div');
        // add css style to the div we created
        movie_div.classList.add("searched_movies");
        // add html tags in div
        movie_div.innerHTML= `<h1>${data.results[i].title}</h1>
                              <img src='${image_api+(data.results[i].poster_path)}' alt="photo">
                              <h3>${data.results[i].vote_average}</h3>
                              <p>${data.results[i].overview}</p>`;
                              // append div in the container div
                              search_section.appendChild(movie_div);
      }
      
    })
  }
  btn.addEventListener('click',function(){
    // empty the main div
    document.querySelector(".search-section").innerHTML="";
    var searchbox=document.querySelector('.searchtext').value;
    get_search(searchbox);
  })


  // search page animation
gsap.from(".search-header",{duration:1,y:'-900%',delay:0.5});
gsap.from(".searchtext",{duration:1,x:'-900%',delay:0.9});

// phone responsive web navbar icon

var nav=document.getElementById("navicon");
nav.addEventListener('click',function(){
  document.querySelector("ul").style="display:flex;flex-direction: column;position: absolute;transform: translateX(50%);transition: 1s;padding-top:1em";
})
nav.addEventListener("dblclick",function(){
  document.querySelector("ul").style="dispaly:none;";
})