const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => navLinks.classList.toggle('show'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('show')));
// ===============================
// School Website Page Navigation
// ===============================

function showPage() {
  const pages = document.querySelectorAll("main > section");
  const currentPage = window.location.hash.substring(1) || "home";

  pages.forEach(function(page) {
    page.style.display = "none";
  });

  const selectedPage = document.getElementById(currentPage);

  if (selectedPage) {
    selectedPage.style.display = "block";
  } else {
    document.getElementById("home").style.display = "block";
  }

  window.scrollTo(0, 0);
}

// ওয়েবসাইট চালু হলে
document.addEventListener("DOMContentLoaded", showPage);

// মেনুতে ক্লিক করলে
window.addEventListener("hashchange", showPage);
