const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');


hamburger.addEventListener('click', () => {
 hamburger.classList.toggle('active');
 menu.classList.toggle('active');
});


document.querySelectorAll('.navlinks').forEach((n) =>
 n.addEventListener('click', () => {
   hamburger.classList.toggle('active');
   menu.classList.toggle('active');
 })
);
