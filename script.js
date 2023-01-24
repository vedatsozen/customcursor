const cursor = document.querySelector('.cursor');
const cursorstar = document.querySelector('.star');



const positionElement = (e)=> {
  const mouseY = e.clientY;
  const mouseX = e.clientX;
   
  cursor.style.transform = `translate3d(${mouseX + 20 }px, ${mouseY  }px, 0)`;
  
  cursorstar.style.transform = `translate3d(${mouseX + 20 }px, ${mouseY }px, 0)`;


 
}

window.addEventListener('mousemove', positionElement)