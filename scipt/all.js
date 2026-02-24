
document.addEventListener("DOMContentLoaded", () => {
  const postContainer = document.getElementById("post-container");
  const totalCount = document.getElementById("total-count");
  const interviewCount = document.getElementById("interview-count");
  const rejectedCount = document.getElementById("rejected-count");


  // update total counts
  function updateCounts() {
    const allSections = postContainer.querySelectorAll("section");
    const interviews = postContainer.querySelectorAll(".status-interview");
    const rejected = postContainer.querySelectorAll(".status-rejected");

    totalCount.textContent = allSections.length;
    interviewCount.textContent = interviews.length;
    rejectedCount.textContent = rejected.length;

    updateAvailableJobs(); // filter applied count update
  }

  // trigger default filter
  document.querySelector('[data-status="all"]').click();
});