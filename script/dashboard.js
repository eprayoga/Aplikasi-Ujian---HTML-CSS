// Sidebar "Dashboard"
const sidebar = document.querySelector(".sidebar")
const sidebarToggle = document.getElementById("sidebar-toggle")
const main = document.querySelector(".main")

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active")
  sidebarToggle.classList.toggle("is-active")
  main.classList.toggle("nav-active")
})