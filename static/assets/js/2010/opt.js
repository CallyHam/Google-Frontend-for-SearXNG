const optLink = document.getElementById("opt-handle");
const optIcon = document.getElementById("opt-icon");
const opt = document.getElementById("opt");

optLink.onclick = () => {
  if (opt.style.display === "none") {
    opt.style.display = "block";
    optIcon.classList.remove("plus");
    optIcon.classList.add("minus");
  } else if (opt.style.display === "block") {
    opt.style.display = "none";
    optIcon.classList.remove("minus");
    optIcon.classList.add("plus");
  }
};
