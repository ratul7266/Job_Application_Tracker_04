document.addEventListener("DOMContentLoaded", () => {
  const postContainer = document.getElementById("post-container");
  const totalCount = document.getElementById("total-count");
  const interviewCount = document.getElementById("interview-count");
  const rejectedCount = document.getElementById("rejected-count");
  const availableJobs = document.getElementById("available-jobs");
  const noJobsSection = document.getElementById("no-jobs-section");
  const filterButtons = document.querySelectorAll(".filter-btn");

  // update total counts
  function updateCounts() {
    const allSections = postContainer.querySelectorAll("section");
    const interviews = postContainer.querySelectorAll(".status-interview");
    const rejected = postContainer.querySelectorAll(".status-rejected");

    totalCount.textContent = allSections.length;
    interviewCount.textContent = interviews.length;
    rejectedCount.textContent = rejected.length;

    updateAvailableJobs();
  }

  // update visible jobs count & no jobs section
  function updateAvailableJobs() {
    let visibleCount = 0;
    postContainer.querySelectorAll("section").forEach((post) => {
      if (post.style.display !== "none") visibleCount++;
    });
    availableJobs.textContent = visibleCount;
    noJobsSection.classList.toggle("hidden", visibleCount > 0);
  }

  // change status of a job
  function changeStatus(section, status) {
    const badge = section.querySelector(".not-applied");

    // check previous status
    const wasNotApplied =
      !section.classList.contains("status-interview") &&
      !section.classList.contains("status-rejected");

    // remove old status classes
    section.classList.remove("status-interview", "status-rejected");

    if (status === "interview") {
      badge.textContent = "INTERVIEW";
      badge.className =
        "btn btn-soft text-white bg-emerald-700 mb-2 not-applied";
      section.classList.add("status-interview");
    } else if (status === "rejected") {
      badge.textContent = "REJECTED";
      badge.className = "btn btn-soft text-white bg-rose-700 mb-2 not-applied";
      section.classList.add("status-rejected");
    }

    // reduce total if this was NOT APPLIED before
    if (wasNotApplied) {
      const currentTotal = parseInt(totalCount.textContent);
      totalCount.textContent = currentTotal - 1;
    }

    updateCounts();
  }

  // delete a job
  function deleteSection(section) {
    section.remove();
    updateCounts();
  }
  // Event delegation for buttons inside sections
  postContainer.addEventListener("click", (e) => {
    const section = e.target.closest("section");
    if (!section) return;

    if (e.target.closest(".interview-btn")) changeStatus(section, "interview");
    else if (e.target.closest(".rejected-btn"))
      changeStatus(section, "rejected");
    else if (e.target.closest(".mobile-del")) deleteSection(section);
  });

  // Filter buttons
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterButtons.forEach((b) =>
        b.classList.remove("bg-primary", "text-white"),
      );
      btn.classList.add("bg-primary", "text-white");

      const status = btn.dataset.status;

      postContainer.querySelectorAll("section").forEach((post) => {
        let postStatus = "not-applied";
        if (post.classList.contains("status-interview"))
          postStatus = "interview";
        else if (post.classList.contains("status-rejected"))
          postStatus = "rejected";

        post.style.display =
          status === "all" || postStatus === status ? "block" : "none";
      });

      updateAvailableJobs();
    });
  });

  // trigger default filter
  document.querySelector('[data-status="all"]').click();
  updateCounts();
});
