const shareBtn = document.getElementById("shareBtn");
const text = shareBtn.getAttribute("text");
const link = shareBtn.getAttribute("link");

shareBtn.addEventListener("click", (event) => {
  if (navigator.share) {
    navigator
      .share({
        text: text,
        url: link,
      })
      .then(() => {
        console.log("Thanks for sharing!");
      })
      .catch((err) => console.error(err));
  } else {
    alert(
      "The current browser does not support the share function. Please, manually share the link"
    );
  }
});
