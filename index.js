const Video_base = "./videos/";

const reels = [
  {
    ismuted: true,
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
    ismuted: true,
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
    ismuted: true,
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
    ismuted: true,
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
    ismuted: true,
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
    ismuted: true,
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
    ismuted: true,
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
    ismuted: true,
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
    ismuted: true,
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
    ismuted: true,
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

const allreels = document.querySelector(".all-reels");

function adddata() {
  let sum = "";
  reels.forEach(function (elem, idx) {
    sum += `
      <div class="reel">
        <video 
          autoplay 
          loop 
          playsinline
          ${elem.ismuted ? "muted" : ""}
          data-id="${idx}"
          src="${elem.video}">
        </video>

        <div class="mute" id="${idx}">
          ${
            elem.ismuted
              ? '<i class="ri-volume-mute-fill"></i>'
              : '<i class="ri-volume-up-fill"></i>'
          }
        </div>

        <div class="bottom">
          <div class="user">
            <img src="${elem.userProfile}" alt="" />
            <h4>${elem.username}</h4>
            <button id="${idx}" class="Follow">
              ${elem.isFollowed ? "UnFollow" : "Follow"}
            </button>
          </div>
          <h3>${elem.caption}</h3>
        </div>

        <div class="right">
          <div id="${idx}" class="like">
            <h4 class="like-icon icon">
            ${
              elem.isLiked
                ? '<i class="love ri-heart-3-fill"></i>'
                : '<i class="ri-heart-3-line"></i>'
            }
            </h4>
            <h6>${elem.likeCount}</h6>
          </div>

          <div id="${idx}" class="Comment">
            <h4 class="comment-icon icon">
              <i class="ri-chat-3-line"></i>
            </h4>
            <h6>${elem.commentCount}</h6>
          </div>

          <div id="${idx}" class="Share">
            <h4 class="share-icon icon">
              ${
                elem.isShared
                  ? '<i class="ri-share-forward-fill"></i>'
                  : '<i class="ri-share-forward-line"></i>'
              }
            </h4>
            <h6>${elem.shareCount}</h6>
          </div>

          <div class="menu">
            <h4 class="menu-icon icon">
              <i class="ri-more-2-fill"></i>
            </h4>
          </div>
        </div>
      </div>
    `;
  });

  allreels.innerHTML = sum;
}

adddata();

/* =====================
   AUTO MUTE / UNMUTE ON SCROLL
   ===================== */

function checkActiveReel() {
  const videos = document.querySelectorAll(".reel video");
  const midScreen = window.innerHeight / 2;

  videos.forEach((vid) => {
    const rect = vid.getBoundingClientRect();
    const id = vid.dataset.id; // string index

    if (rect.top < midScreen && rect.bottom > midScreen) {
      // ACTIVE REEL
      vid.play();
      vid.muted = reels[id].ismuted === true; // respect user's mute choice
    } else {
      // NON-ACTIVE REELS
      vid.pause();
      vid.muted = true;
    }
  });
}

const container = document.querySelector(".all-reels");

container.addEventListener("scroll", checkActiveReel);
window.addEventListener("load", checkActiveReel);

/* =====================
   CLICK HANDLERS (LIKE / FOLLOW / COMMENT / SHARE / MUTE)
   ===================== */

allreels.addEventListener("click", function (dets) {
  const target = dets.target;
  const likeDiv = target.closest(".like");
  const followBtn = target.closest(".Follow");
  const commentDiv = target.closest(".Comment");
  const shareDiv = target.closest(".Share");
  const muteDiv = target.closest(".mute");

  if (likeDiv) {
    const id = likeDiv.id;
    if (!reels[id].isLiked) {
      reels[id].likeCount++;
      reels[id].isLiked = true;
    } else {
      reels[id].likeCount--;
      reels[id].isLiked = false;
    }
  } else if (followBtn) {
    const id = followBtn.id;
    reels[id].isFollowed = !reels[id].isFollowed;
  } else if (commentDiv) {
    const id = commentDiv.id;
    if (!reels[id].isComment) {
      reels[id].commentCount++;
      reels[id].isComment = true;
    } else {
      reels[id].commentCount--;
      reels[id].isComment = false;
    }
  } else if (shareDiv) {
    const id = shareDiv.id;
    if (!reels[id].isShared) {
      reels[id].shareCount++;
      reels[id].isShared = true;
    } else {
      reels[id].shareCount--;
      reels[id].isShared = false;
    }
  } else if (muteDiv) {
    const id = muteDiv.id;
    reels[id].ismuted = !reels[id].ismuted;
  }

  // re-render UI + re-apply active reel logic

  adddata();
  checkActiveReel();
});
