const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


const postContainer = document.getElementById("container");



domInsertion(posts)





function domInsertion(posts){


  
  
  posts.forEach( el => {

  let imageOrDiv;
  let italianDate = reverseDate(el.created)
  let initials = getInitials(el.author.name);  

  if(el.author.image){
    imageOrDiv = `<img class="profile-pic" src="${el.author.image}" alt="${el.author.name}">`
  }else {
    imageOrDiv = `<div>${initials}</div>`
  }


  let post;

  post = `
    <div class="post">
    <div class="post__header">
        <div class="post-meta">                    
            <div class="post-meta__icon">
                  ${imageOrDiv}              
            </div>
            <div class="post-meta__data">
                <div class="post-meta__author">${el.author.name}</div>
                <div class="post-meta__time">${italianDate}</div>
            </div>                    
        </div>
    </div>
    <div class="post__text">${el.content}</div>
    <div class="post__image">
        <img src="${el.media}" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">${el.likes}</b> persone
            </div>
        </div> 
    </div>            
  </div>
  `;

  postContainer.innerHTML += post;




  function getInitials(name){
    let initialsArray = name.split(" ")
    let initials = `${initialsArray[0][0].toUpperCase()} ${initialsArray[1][0].toUpperCase()}`
    return initials;
  }



  function reverseDate(date){
  let dateReversed;
  let year = date.substring(0, 4);
  let month = date.substring(5, 7);
    let day = date.substring(8)
    dateReversed = `${day}-${month}-${year}`
    return dateReversed
  }
})
}

