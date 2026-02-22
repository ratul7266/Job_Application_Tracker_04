// click delete img and remove section
const deleteImg = document.querySelectorAll('.mobile-del');
const postContainer = document.getElementById('post-container');
const noPostSection = document.querySelector('#no-post section');

// del img work 
deleteImg.forEach(function(img){
    img.addEventListener('click', function(){
         const delImg = this.closest('section');
    if(delImg) delImg.remove();

        if(postContainer.children.length === 0){
        noPostSection.classList.remove('hidden');
    }else{
        noPostSection.classList.add('hidden');
    }
    });
    
});

// total and jobs counting 
document.addEventListener('DOMContentLoaded', function () {

  const postContainer = document.getElementById('post-container');
  const totalCount = document.getElementById('total-count');
  const availableJobs = document.getElementById('available-jobs');
  const noJobsSection = document.getElementById('no-jobs-section');

  function updateTotal() {
    const sections = postContainer.querySelectorAll('section');
    const count = sections.length;

    totalCount.textContent = count;
    availableJobs.textContent = count;

    if (count === 0) {
      noJobsSection.classList.remove('hidden');
    } else {
      noJobsSection.classList.add('hidden');
    }
  }
  updateTotal();

  const deleteBtns = document.querySelectorAll('.mobile-del');

  deleteBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {

      const card = this.closest('section');
      if (card) {
        card.remove();
      }

      updateTotal(); // delete হলে আবার count update
    });
  });

});


// Available Jobs btn and btn-section 
const btn = document.querySelectorAll(".filter-btn");
const postsContent = document.querySelectorAll("#post-container section");
const buttons = document.querySelectorAll(".filter-btn");

// সব post ধরি
const posts = document.querySelectorAll("#post-container section");

// প্রতিটা button এ click event বসাই
buttons.forEach(function(button) {

  button.addEventListener("click", function() {

    // 🔵 Step 1: সব button থেকে active style সরাই
    buttons.forEach(function(btn) {
      btn.classList.remove("bg-primary");
      btn.classList.remove("text-white");
    });

    // 🔵 Step 2: যেটায় click হয়েছে সেটায় active style দেই
    button.classList.add("bg-primary");
    button.classList.add("text-white");

    const status = button.getAttribute("data-status");
    posts.forEach(function(post) {
      if (status === "all") {
        post.style.display = "block";
      } 
      else if (post.getAttribute("data-status") === status) {
        post.style.display = "block";
      } 
      else {
        post.style.display = "none";
      }

    });

  });

});

// all highlights default 
window.addEventListener("DOMContentLoaded", function () {
  const defaultBtn = document.querySelector('[data-status="all"]');
  defaultBtn.click();
});