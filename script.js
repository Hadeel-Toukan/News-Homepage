//  const menuIcon = document.getElementById("menu-icon");
//   const links = document.querySelector(".links");

//   menuIcon.addEventListener("click", () => {
//     links.classList.toggle("visible");
//   });

$('.icon').click(function(){
  $('.menu-links').toggle();
  $('.menu-icon').toggle();
});