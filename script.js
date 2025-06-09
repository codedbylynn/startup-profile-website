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
