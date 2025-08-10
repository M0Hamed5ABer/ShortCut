// Main Page Search (Program List)
const programSearch = document.getElementById("programSearch");
if (programSearch) {
  programSearch.addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let sections = document.querySelectorAll(".program-list section");

    sections.forEach((section) => {
      let links = section.querySelectorAll("a");
      let matchFound = false;

      links.forEach((link) => {
        let text = link.textContent.toLowerCase();
        if (text.includes(filter)) {
          link.style.display = "block";
          matchFound = true;
        } else {
          link.style.display = "none";
        }
      });

      section.style.display = matchFound ? "block" : "none";
    });
  });
}

// Shortcut Page Search with hidden keywords
const shortcutSearch = document.getElementById("shortcutSearch");
if (shortcutSearch) {
  shortcutSearch.addEventListener("keyup", function () {
    let filter = this.value.toLowerCase();
    let rows = document.querySelectorAll("#shortcutsTable tbody tr");

    rows.forEach((row) => {
      let text = (
        row.textContent +
        " " +
        row.getAttribute("data-keywords")
      ).toLowerCase();
      row.style.display = text.includes(filter) ? "" : "none";
    });
  });
}

// --- تحميل حالة الوضع المظلم عند فتح أي صفحة ---
const savedDarkMode = localStorage.getItem("darkMode");
if (savedDarkMode === "enabled") {
  document.body.classList.add("dark-mode");
} else {
  document.body.classList.remove("dark-mode");
}

// --- تفعيل زر التبديل إذا كان موجود ---
const toggleDarkModeBtn = document.getElementById("toggleDarkMode");
if (toggleDarkModeBtn) {
  toggleDarkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    // حفظ الحالة
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
  });
}
