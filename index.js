const Video_base = "./videos/";

const reels = [
  {
    username: "akash_vibes",
    likeCount: 12800,
    isLiked: false,
    commentCount: 340,
    isComment: true,
    caption: "Life hits different when you stop rushing it.",
    video: Video_base + "reel1.mp4",
    userProfile: "https://i.pravatar.cc/150?img=12",
    shareCount: 220,
    isShared: true,
    isFollowed: false,
  },
  {
    username: "rhea.codes",
    likeCount: 9400,
    isLiked: true,
    commentCount: 190,
    isComment: false,
    caption: "Late night coding + cold coffee = pure magic.",
    video: Video_base + "reel2.mp4",
    userProfile: "https://i.pravatar.cc/150?img=32",
    shareCount: 140,
    isShared: false,
    isFollowed: true,
  },
  {
    username: "travelwithsid",
    likeCount: 22400,
    isLiked: false,
    commentCount: 630,
    isComment: true,
    caption: "Sunsets like these make everything worth it.",
    video: Video_base + "reel3.mp4",
    userProfile: "https://i.pravatar.cc/150?img=18",
    shareCount: 510,
    isShared: true,
    isFollowed: false,
  },
  {
    username: "neha_fit",
    likeCount: 6400,
    isLiked: true,
    commentCount: 150,
    isComment: false,
    caption: "No excuses today. We move 💪",
    video: Video_base + "reel4.mp4",
    userProfile: "https://i.pravatar.cc/150?img=47",
    shareCount: 70,
    isShared: false,
    isFollowed: true,
  },
  {
    username: "dj_arjun",
    likeCount: 17800,
    isLiked: true,
    commentCount: 410,
    isComment: true,
    caption: "Beats that hit harder than my emotions.",
    video: Video_base + "reel5.mp4",
    userProfile: "https://i.pravatar.cc/150?img=23",
    shareCount: 330,
    isShared: true,
    isFollowed: false,
  },
  {
    username: "streetfood.sonu",
    likeCount: 9500,
    isLiked: false,
    commentCount: 280,
    isComment: false,
    caption: "Chaat so good it should be illegal 😭🔥",
    video: Video_base + "reel6.mp4",
    userProfile: "https://i.pravatar.cc/150?img=5",
    shareCount: 190,
    isShared: false,
    isFollowed: false,
  },
  {
    username: "minimal.me",
    likeCount: 4200,
    isLiked: true,
    commentCount: 110,
    isComment: true,
    caption: "Peace > Everything.",
    video: Video_base + "reel7.mp4",
    userProfile: "https://i.pravatar.cc/150?img=61",
    shareCount: 90,
    isShared: true,
    isFollowed: true,
  },
  {
    username: "gamingwithtara",
    likeCount: 28900,
    isLiked: true,
    commentCount: 870,
    isComment: false,
    caption: "Clutched a 1v4 and didn’t break a sweat 🔥",
    video: Video_base + "reel8.mp4",
    userProfile: "https://i.pravatar.cc/150?img=8",
    shareCount: 650,
    isShared: false,
    isFollowed: false,
  },
  {
    username: "artbykavi",
    likeCount: 7200,
    isLiked: false,
    commentCount: 200,
    isComment: true,
    caption: "Every stroke tells a story 🎨",
    video: Video_base + "reel9.mp4",
    userProfile: "https://i.pravatar.cc/150?img=37",
    shareCount: 120,
    isShared: true,
    isFollowed: true,
  },
  {
    username: "techno_rider",
    likeCount: 15200,
    isLiked: true,
    commentCount: 300,
    isComment: false,
    caption: "New bike + open road = freedom.",
    video: Video_base + "reel10.mp4",
    userProfile: "https://i.pravatar.cc/150?img=28",
    shareCount: 260,
    isShared: false,
    isFollowed: false,
  },
];
let allreels = document.querySelector(".all-reels");

function adddata() {
  let sum = "";
  reels.forEach(function (elem, idx) {
    sum =
      sum +
      `<div class="reel">
            <video autoplay muted loop src="${elem.video}"></video>
            <div class="bottom">
              <div class="user">
                <img
                  src="${elem.userProfile}"
                  alt=""
                />
                <h4>${elem.username}</h4>
                <button id="${idx}" class = "Follow"  >${
        elem.isFollowed ? "Follow" : "UnFollow"
      }</button>
              </div>
              <h3>${elem.caption}</h3>
            </div>
            <div class="right">
              <div id = "${idx}" class="like">
                <h4 class="like-icon icon">${
                  elem.isLiked
                    ? ' <i class ="love ri-heart-3-fill"></i> '
                    : '<i class="ri-heart-3-line"></i>'
                }</h4>
                <h6>${elem.likeCount}</h6> </div>
              <div id = "${idx}" class="Comment">
                <h4 class="comment-icon icon">
                  <i class="ri-chat-3-line"></i>
                </h4>
                <h6>${elem.commentCount}</h6>
              </div>
              <div id = "${idx}" class="Share">
              <h4 class="share-icon icon">${
                elem.isShared
                  ? '<i class="ri-share-forward-fill"></i>'
                  : '<i class="ri-share-forward-line"></i>'
              }
</h4>


                <h6>${elem.shareCount}</h6>
              </div>
              <div class="menu">
                <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
              </div>
            </div>
          </div>`;
  });

  allreels.innerHTML = sum;
}

adddata();
allreels.addEventListener("click", function (dets) {
  if (dets.target.className == "like") {
    if (!reels[dets.target.id].isLiked) {
      reels[dets.target.id].likeCount++;
      reels[dets.target.id].isLiked = true;
    } else {
      reels[dets.target.id].likeCount--;
      reels[dets.target.id].isLiked = false;
    }
  } else if (dets.target.className == "Follow") {
    if (!reels[dets.target.id].isFollowed) {
      reels[dets.target.id].isFollowed = true;
    } else {
      reels[dets.target.id].isFollowed = false;
    }
  } else if (dets.target.className == "Comment") {
    if (!reels[dets.target.id].isComment) {
      reels[dets.target.id].commentCount++;
      reels[dets.target.id].isComment = true;
    } else {
      reels[dets.target.id].commentCount--;
      reels[dets.target.id].isComment = false;
    }
  } else if (dets.target.className == "Share") {
    if (!reels[dets.target.id].isShared) {
      reels[dets.target.id].shareCount++;
      reels[dets.target.id].isShared = true;
    } else {
      reels[dets.target.id].shareCount--;
      reels[dets.target.id].isShared = false;
    }
  }
  adddata();
});
