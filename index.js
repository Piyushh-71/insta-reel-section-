const Video_base = "./video/";
const reels = [
  {
    username: "akash_vibes",
    likeCount: 12800,
    isLiked: false,
    commentCount: 340,
    caption: "Life hits different when you stop rushing it.",
    video: Video_base + "reel.mp4",
    userProfile: "https://i.pravatar.cc/150?img=12",
    shareCount: 220,
    isFollowed: false,
  },
  {
    username: "rhea.codes",
    likeCount: 9400,
    isLiked: true,
    commentCount: 190,
    caption: "Late night coding + cold coffee = pure magic.",
    video: Video_base + "reel2.mp4",
    userProfile: "https://i.pravatar.cc/150?img=32",
    shareCount: 140,
    isFollowed: true,
  },
  {
    username: "travelwithsid",
    likeCount: 22400,
    isLiked: false,
    commentCount: 630,
    caption: "Sunsets like these make everything worth it.",
    video: Video_base + "reel3.mp4",
    userProfile: "https://i.pravatar.cc/150?img=18",
    shareCount: 510,
    isFollowed: false,
  },
  {
    username: "neha_fit",
    likeCount: 6400,
    isLiked: true,
    commentCount: 150,
    caption: "No excuses today. We move 💪",
    video: Video_base + "reel4.mp4",
    userProfile: "https://i.pravatar.cc/150?img=47",
    shareCount: 70,
    isFollowed: true,
  },
  {
    username: "dj_arjun",
    likeCount: 17800,
    isLiked: true,
    commentCount: 410,
    caption: "Beats that hit harder than my emotions.",
    video: Video_base + "reel5.mp4",
    userProfile: "https://i.pravatar.cc/150?img=23",
    shareCount: 330,
    isFollowed: false,
  },
  {
    username: "streetfood.sonu",
    likeCount: 9500,
    isLiked: false,
    commentCount: 280,
    caption: "Chaat so good it should be illegal 😭🔥",
    video: Video_base + "reel6.mp4",
    userProfile: "https://i.pravatar.cc/150?img=5",
    shareCount: 190,
    isFollowed: false,
  },
  {
    username: "minimal.me",
    likeCount: 4200,
    isLiked: true,
    commentCount: 110,
    caption: "Peace > Everything.",
    video: Video_base + "reel7.mp4",
    userProfile: "https://i.pravatar.cc/150?img=61",
    shareCount: 90,
    isFollowed: true,
  },
  {
    username: "gamingwithtara",
    likeCount: 28900,
    isLiked: true,
    commentCount: 870,
    caption: "Clutched a 1v4 and didn’t break a sweat 🔥",
    video: Video_base + "reel8.mp4",
    userProfile: "https://i.pravatar.cc/150?img=8",
    shareCount: 650,
    isFollowed: false,
  },
  {
    username: "artbykavi",
    likeCount: 7200,
    isLiked: false,
    commentCount: 200,
    caption: "Every stroke tells a story 🎨",
    video: Video_base + "reel9.mp4",
    userProfile: "https://i.pravatar.cc/150?img=37",
    shareCount: 120,
    isFollowed: true,
  },
  {
    username: "techno_rider",
    likeCount: 15200,
    isLiked: true,
    commentCount: 300,
    caption: "New bike + open road = freedom.",
    video: Video_base + "reel10.mp4",
    userProfile: "https://i.pravatar.cc/150?img=28",
    shareCount: 260,
    isFollowed: false,
  },
];
let sum = "";
reels.forEach(function (elem) {
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
                <button>${elem.isFollowed ? "Follow" : "UnFollow"}</button>
              </div>
              <h3>${elem.caption}</h3>
            </div>
            <div class="right">
              <div class="like">
                <h4 class="like-icon icon">${
                  elem.isLiked
                    ? ' <i class ="love ri-heart-3-fill"></i> '
                    : '<i class="ri-heart-3-line"></i>'
                }</h4>
                <h6>${elem.likeCount}</h6> </div>
              <div class="comment">
                <h4 class="comment-icon icon">
                  <i class="ri-chat-3-line"></i>
                </h4>
                <h6>${elem.commentCount}</h6>
              </div>
              <div class="share">
                <h4 class="share-icon icon">
                  <i class="ri-share-forward-line"></i>
                </h4>
                <h6>${elem.shareCount}</h6>
              </div>
              <div class="menu">
                <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
              </div>
            </div>
          </div>`;
});

let allreels = document.querySelector(".all-reels");

allreels.innerHTML = sum;
