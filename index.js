// onclick for project buttons
function handleClick(value) {
    window.open(value)
}

// light up background behind mouse
document.addEventListener("mousemove", function(event) {
    let x = event.pageX;
    let y = event.pageY;
    let background1 = document.getElementsByTagName("body")[0];
    let brighten = `radial-gradient(circle at ${x}px ${y}px, #daf0e0, #006a3f 50px)`;
    background1.style.background = brighten;
})
// grid carousel
let carousel = document.getElementById("carousel")
let slides = carousel.querySelectorAll(".sections");
let leftButton = document.getElementById("left");
let rightButton = document.getElementById("right");
const getOrder = (elem) => {
    let styles = getComputedStyle(elem);
    let orderValue = styles.order;
    let order = parseInt(orderValue);
    return order;
  }
  slides.forEach((x, i) => {
    x.style.order = i + 1;
  })
  console.log(slides)
  
  const moveRight = _ => {
    slides.forEach(function(slide) {
      order = getOrder(slide)
      if (order > 1) {
        slide.style.order = order -= 1;
      } else {
        slide.style.order = 4;
      }
    });
  }
  rightButton.addEventListener('click', _ => {
    moveRight();
  });
  const moveLeft = _ => {
    slides.forEach(function(slide) {
      order = getOrder(slide)
      if (order < slides.length) {
        slide.style.order = order += 1;
      } else {
        slide.style.order = 1;
      }
    });
  }
  leftButton.addEventListener('click', _ => {
    moveLeft();
  });
  // form 
  let form = document.getElementById("contactForm");
  function handleFromSubmit(event) {
    event.preventDefault()
    let formData = new FormData(event.target);
    let data = {};
    for (var [key, value] of formData.entries()) { 
        data[key] = value ;
    };
    alert(`Sorry ${data.name}, this feature is coming soon! Please send your message to _____.\n
        Subject: ${data.subject}\n
        Message: ${data.message}`)
};
form.addEventListener("submit", handleFromSubmit);
//consider making the sections in container-2 dynamically via JS;
// link to FreeCodeCamp profile?