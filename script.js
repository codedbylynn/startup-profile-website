const featuresCarousel= document.querySelector('.features-carousel');
const navDots=document.querySelectorAll('.nav-dot');
const featuresCards = document.querySelectorAll('.feature-card')

let activeCardIndex = 0;

function updateActiveDot()
{
  navDots.forEach(dot => dot.classList.remove('active'))

  if(navDots[activeCardIndex]){
    navDots[activeCardIndex].classList.add('active')
  }
}
function scrollToCard(index)
{
  if(featuresCards[index]){
    featuresCarousel.scrollLeft = featuresCards[index].offsetLeft;
    activeCardIndex = index;
    updateActiveDot();
  }
}
navDots.forEach((dot, index) =>{
  dot.addEventListener('click',() =>{
    scrollToCard(index);
  });
});
featuresCarousel.addEventListener('scroll', () =>{
  let newActiveIndex = 0;
  for (let i = 0; i < featuresCards.length; i++){
    const card = featuresCards[i];
    if(card.offsetLeft <= featuresCarousel.scrollLeft + (featuresCarousel.offsetWidth /2)){
      newActiveIndex = i; }
      else{
        break;
      }
  }
if (newActiveIndex !== activeCardIndex){
  activeCardIndex = newActiveIndex;
  updateActiveDot();
};
});

window.addEventListener('load',() => {
  featuresCarousel.scrollLeft = 0;
  updateActiveDot()
});

  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question =>{
    question.addEventListener('click',()=>{
      question.classList.toggle('active');
      const answer = question.nextElementSibling;
      answer.classList.toggle('active')

      if (answer.classList.contains('active')){
        answer.style.maxHeight = answer.scrollHeight + "px";
      } else{
        answer.style.maxHeight = "0";
      }
    })
  })
  const farmersBtn = document.getElementById('farmers-btn');
  const partnersBtn = document.getElementById('partners-btn');

  const farmersContent = document.getElementById('farmers-content');
  const partnersContent = document.getElementById('partners-content');

   function activateTab(activeButton, activeContent){
    farmersContent.classList.remove('active');
    partnersContent.classList.remove('active');

    farmersBtn.classList.remove('active');
    partnersBtn.classList.remove('active');

    activeButton.classList.add('active');
    activeContent.classList.add('active');
   }

   farmersBtn.addEventListener('click', () => {
    activateTab(farmersBtn, farmersContent);
    });
    partnersBtn.addEventListener('click', () => {
      activateTab(partnersBtn,partnersContent);
    })
   
   document.addEventListener('DOMContentLoaded', () => {
    if(farmersBtn.classList.contains('active')){
      farmersContent.classList.add('active');
    } else if(partnersBtn.classList.contains ('active')){
      partnersContent.classList.add('active');
    }
   })

   document.addEventListener('DOMContentLoaded', () => {
    const visitorCountElement = document.getElementById('visitor-count');

    if(visitorCountElement){
      let visitCount = localStorage.getItem('agroConnectVisitCount');

      if(visitCount === null){
          visitCount = 0;
      } else {
        visitCount = parseInt(visitCount);
      }

      visitCount++;

      localStorage.setItem('agroConnectVisitCount', visitCount);

      visitCountElement.textContent = visitCount;
      }
    })
    document.addEventListener('DOMContentLoaded', () => {
      const mobileMenu = document.getElementById('mobile-menu');
      const navLinks = document.getElementById('nav-links');

      if(mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
          navLinks.classList.toggle('active');
          mobileMenu.classList.toggle('active');
        });
      }
    })