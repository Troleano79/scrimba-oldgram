const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const body = document.getElementById("body")
const heartEl = document.querySelectorAll(".likebtn")
const likesEl = document.getElementById("likes-el")


function renderPost(){
  for (const i in posts){
    let newPost = document.createElement("section")
    newPost.innerHTML = `<div class="header-user">
        <img id="avatar-profile-el" class="user-avatar" src="${posts[i].avatar}">

        <div class="username-location">
          <h1 id="name-el">${posts[i].name}</h1>
          <p  id="location-el">${posts[i].location}</p>
        </div>

      </div>

      <img id="post-img-el" class="post-img" src="${posts[i].post}">

      <div class="interaction-btn">
        <img id="like-btn${i}" class="btn likebtn" src="images/icon-heart.png">
        <img class="btn" src="images/icon-comment.png">
        <img class="btn" src="images/icon-dm.png">
      </div>

      <div class="likes-comment">
        <h1><span id="likes-el" class="like-count${i}">${posts[i].likes}</span> Likes</h1>
        <h1 id="username-el">${posts[i].username}: <span id="comment-el" class="comment">${posts[i].comment}</span></h1>
      </div>`
    body.appendChild(newPost)
  }
}

renderPost()
