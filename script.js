const users = [
    {
        username: "travel_diaries",
        userlocation: "Paris, France",
        userprofile: "https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userPost: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        like: false,
        likeCount: 1200,
        commentCount: 45,
        shareCount: 30,
        caption: "Enjoying the sunset at the Eiffel Tower. #ParisVibes #TravelGoals",
        timeAgoUploaded: 5
    },
    {
        username: "foodie_lover",
        userlocation: "Mumbai, India",
        userprofile: "https://images.unsplash.com/photo-1487069838269-7c05365b400b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userPost: "https://images.unsplash.com/photo-1554978991-33ef7f31d658?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        like: false,
        likeCount: 530,
        commentCount: 20,
        shareCount: 12,
        caption: "The best vada pav I've ever had! 🌮❤ #MumbaiStreetFood",
        timeAgoUploaded: 12
    },
    {
        username: "fitness_freak",
        userlocation: "New York, USA",
        userprofile: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userPost: "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=3532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        like: false,
        likeCount: 800,
        commentCount: 60,
        shareCount: 25,
        caption: "Start your day with some yoga. #FitnessGoals #HealthyLiving",
        "timeAgoUploaded": 24
    },
    {
        username: "artsy_corner",
        userlocation: "London, UK",
        userprofile: "https://images.unsplash.com/photo-1647205552933-12e3dfdb77b5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userPost: "https://plus.unsplash.com/premium_photo-1692650759141-ed71d789ef1b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        like: false,
        likeCount: 950,
        commentCount: 78,
        shareCount: 40,
        caption: "New piece in the gallery. Let me know your thoughts! 🎨 #AbstractArt",
        timeAgoUploaded: 7
    },
    {
        username: "adventure_seeker",
        userlocation: "Kyoto, Japan",
        userprofile: "https://images.unsplash.com/photo-1681562978415-bbf1dfe59353?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        userPost: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        like: true,
        likeCount: 600,
        commentCount: 33,
        shareCount: 18,
        caption: "The serenity of Kyoto's bamboo forest. 🌳 #NatureLover",
        timeAgoUploaded: 18
    }
]

function showCard(){
  let clutter = "";
  users.forEach(function(element,index){
      clutter += `<div id="post">
          <div id="top">
            <div id="left">
              <div id="img">
                <img
                  src= ${element.userprofile}
                  alt=""
                />
              </div>
              <div id="left-details">
                <h3>
                 ${element.username}
                  <span
                    ><img src="./assets/icons8-blue-tick-48.png" alt=""
                  /></span>
                </h3>
                <div id="songDetails">
                 <i class="ri-map-pin-line"></i>
                  <h3>${element.userlocation}</h3>
                </div>
              </div>
            </div>
            <div id="right">
              <button>Follow</button>
              <i class="ri-more-2-fill"></i>
            </div>
          </div>
          <div id="mainImg">
            <img
              src=  ${element.userPost}
              alt=""
            /> 
          <i id="mainHeart" class="ri-heart-fill"></i>
          </div>
          <div id="bottom">
            <div id="bottomUp">
              <!-- icons -->
              <div id="icons">
               <span id = ${index}>${element.like ?' <i style = "color:red"  class="ri-heart-fill"></i> ': '<i class="ri-heart-line"></i>'}</span>
                <h5 class="counter">${element.likeCount}</h5>
              
                <i id="comment" class="ri-chat-ai-line"></i>
                 <span>${element.commentCount}</span>
                <i id="share" class="ri-send-plane-fill"></i>
                 <span>${element.shareCount}</span>
              </div>
              <img src="./assets/icons8-save-32.png" alt="" />
            </div>
            <p>
              <b>${element.username} </b>${element.caption}
            </p>
            <h4>View all comments</h4>
            <h5>${element.timeAgoUploaded} days ago</h5>
          </div>
        </div>`
  })  
  
  let container = document.querySelector(".container");
  container.innerHTML = clutter;
}
showCard();


// var post = document.querySelectorAll("#post");
// // console.log(post);
// post.forEach(function(val){
//     // console.log(val)

//     var heart = val.querySelector("#heart");
//     var mainImg = val.querySelector("#mainImg")
//     var mainHeart = val.querySelector("#mainHeart")
//     var likeCount = val.querySelector(".counter");
//     // console.log(likeCount);
//     let flag =0
//     // console.log(heart)
//     heart.addEventListener("click", function(event){
//       console.log(event.target)
//       // console.log("first")
//         if(flag === 0){
//                  heart.style.color = "red";
//                  likeCount++;
//                  console.log(likeCount);
//                  flag =1;
//         }
//         else{
//             heart.style.color = "black";
//             flag=0;
//         }
       
//     })

//     // mainImg.addEventListener("dblclick", function(){
//     //     mainHeart.style.transform = "translate(-50%,-50%) scale(3)"
        
//     //     setTimeout(function(){
//     //         mainHeart.style.transform = " translate(-50%,-50%) scale(0)"
//     //     },2000)
//     // })
// })




// let container = document.querySelector(".container");
// container.addEventListener("click", function(dets) {
//   const userId = dets.target.id;  // Store the id for readability
//   // console.log(userId)
 
//   // Check if the userId is valid and exists in users
 
//   if (userId && users[userId]) {
//     const parentElement = dets.target.parentElement; 
//     // Get the parent element of the clicked heart
//     const likeCounter = parentElement.querySelector(".counter"); 
//     // Find the counter within the parent
  

//     //let  likeCounter = document.querySelector(".counter");

//     // Toggle like state
//     if (!users[userId].like) {
//       users[userId].likeCount++;
//       users[userId].like = true;
//       dets.target.style.color = "red";  // Change heart color to red
//     } else {
//       users[userId].likeCount--;
//       users[userId].like = false;
//       dets.target.style.color = "black";  // Change heart color to black
//     }
//     // Update the displayed like count
//     likeCounter.innerText = users[userId].likeCount;
//   }
// });








let container = document.querySelector(".container");

container.addEventListener("click", function(details){
    // console.log(details.target.id);
        //  console.log(users[details.target.id].like); 
        // console.log(users[details.target.id].username = "kazi"); 

        if(users[details.target.id].like){
          users[details.target.id].like = false;  /// wrote this line so that , it can like and dislike only one time
          users[details.target.id].likeCount--;
        }
        else{
          users[details.target.id].like = true; 
          users[details.target.id].likeCount++;
        }

        showCard();
  })
