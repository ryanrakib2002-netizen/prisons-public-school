function showPage() {

  // সব section খুঁজে বের করা
  const pages = document.querySelectorAll("main .page");

  // URL থেকে কোন পেজ চাওয়া হয়েছে তা নেওয়া
  let pageId = window.location.hash.substring(1);

  // কোনো page না থাকলে Home দেখাবে
  if (!pageId) {
    pageId = "home";
  }

  // প্রথমে সব page বন্ধ
  pages.forEach(function(page) {
    page.style.display = "none";
  });

  // নির্দিষ্ট page চালু
  const selectedPage = document.getElementById(pageId);

  if (selectedPage) {
    selectedPage.style.display = "block";
  } else {
    document.getElementById("home").style.display = "block";
  }

  // পেজের একদম উপরে নিয়ে যাবে
  window.scrollTo(0, 0);
}


// ওয়েবসাইট প্রথমবার চালু হলে
document.addEventListener("DOMContentLoaded", function() {
  showPage();
});


// মেনুর কোনো লিংকে চাপলে
window.addEventListener("hashchange", function() {
  showPage();
});
