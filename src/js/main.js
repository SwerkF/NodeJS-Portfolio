particlesJS("particles-js", {"particles":
{"number":{"value":61,"density":
{"enable":true,"value_area":800}},"color":
{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":4},"image"
:{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":
{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":
{"enable":false,"distance":150,"color":"#ffffff","opacity":1,"width":1.2603387160299326},"move":
{"enable":true,"speed":1.5754233950374157,"direction":"top","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}}
,"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"bubble"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":
{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":1.5},"repulse":{"distance":200,"duration":0.4},"push":
{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles = 0, update;  if(document.querySelector('.js-count-particles')) { count_particles = document.querySelector('.js-count-particles') }; update = function() 
{ if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) 
{ count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;

const name = 'OLIWER SKWERES';
const arrayName = name.split('');

const nameContainer = document.querySelector('.title-name');
nameContainer.innerHTML = ""
arrayName.forEach(e => {
  const letter = document.createElement('span')
  letter.innerHTML = e;
  letter.classList.add('letter-hover');
  document.querySelector('.title-name').appendChild(letter);
})

let colorChange = 0



let i = 0;
setInterval(function () {
  const letters = document.querySelectorAll('.letter-hover');
  letters[i].style.color = `hsl(${colorChange}, 100%, 50%)`;
  letters[i].style.WebkitTransform = "scale(1.2)"
  if(i <= 0) {
    letters[letters.length - 1].style.color = `#fff`;
    letters[letters.length - 1].WebkitTransform = "scale(1)"
  } else {
    letters[i-1].style.color = `#fff`;
    letters[i].style.WebkitTransform= "scale(1)"
    letters[i-1].style.transition = `0.2s`;
  }
  colorChange += 10;
  i++;
  if(i >= letters.length) {
    i = 0;
  }
}, 140);


