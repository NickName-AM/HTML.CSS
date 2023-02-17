(function () {
  [...document.querySelectorAll(".control")].forEach(button => {
    button.addEventListener("click", function() {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    })
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  })
})();

const email = "maharjanebik061@gmail.com";

document.getElementById("emailcopy").addEventListener("mouseover", function() {
  this.innerText = "Click To Copy!";
});

document.getElementById("emailcopy").addEventListener("mouseout", function() {
  this.innerText = email;
});

document.getElementById("emailcopy").addEventListener("click", function() {
  navigator.clipboard.writeText(email);
  this.innerText = "Copied!"
})