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

      visitorCountElement.textContent = visitCount;
      }
    });
    document.addEventListener('DOMContentLoaded', () => {
      const mobileMenu = document.getElementById('mobile-menu');
      const navLinks = document.getElementById('nav-links');

      if(mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
          navLinks.classList.toggle('active');
          mobileMenu.classList.toggle('active');
        });
      }
      const chatMessages = document.getElementById('chat-messages');
      const userInput = document.getElementById('user-input');
      const sendButton = document.getElementById('send-button');
      const sampleQuestionBtns = document.querySelectorAll('.sample-q-btn');

      const startupContext =`
    AgroConnect is an innovative agricultural technology startup.
    
    **Origin Story:** The idea for AgroConnect stemmed from a personal struggle experienced by its founder, Lynn Gathoni Migwi. Witnessing her father's hard-grown produce spoil due to lack of buyers inspired the creation of a platform to address the critical problem of market access for farmers. AgroConnect was founded in 2025 to ensure farmers' harvests thrive and their efforts are truly rewarded.
    
    **Our Mission:** To empower Kenyan farmers by connecting them to fair markets and essential resources, ensuring their harvests thrive and their efforts are rewarded.
    
    **Our Vision:** We envision a future where every farmer in Kenya has the tools, knowledge, and market access to achieve sustainable prosperity. We aim to cultivate thriving agricultural communities that contribute significantly to food security and economic growth.
    
    **Products & Services:**
    1.  **MarketLink:** Connects farmers directly with buyers and consumers, providing access to fair prices and expanding opportunities for their produce without intermediaries.
    2.  **Input Hub:** Offers access to quality seeds, fertilizers, and modern farming equipment directly through our platform, ensuring farmers have the best tools for their harvest.
    3.  **(Optional) Farmwise Advisor:** Delivers personalized guidance from agricultural experts and AI-driven recommendations tailored to each farm's unique needs, including weather patterns and crop conditions.
    
    **Key Features & Impact:**
    -   **Direct Market Access (via MarketLink):** Eliminates middlemen, ensuring farmers receive fair prices for their produce and avoid post-harvest losses.
    -   **AI-driven recommendations and expert advice (via FarmWise Advisor):** Boosts productivity, helps farmers make informed decisions, and fosters sustainable agriculture, leading to thriving harvests.
    
    **Team:**
    -   **Lynn Gathoni Migwi:** Chief Executive Officer (CEO) - Vision, Strategy, Business Development, Partnerships, and overall direction of AgroConnect.
    -   **Linet Mwikali:** Chief Technology Officer (CTO) - Platform development, technical architecture, and ensuring the smooth operation of all AgroConnect's digital tools.
    -   **Collins Osebe:** Chief Operating Officer (COO) - Overseeing daily operations, farmer outreach, logistics, and ensuring efficient service delivery.
    
    **Startup Goals (Short-Term):**
    -   Onboard 500 new farmers onto the MarketLink platform in Kenya within the next 6 months.
    -   Increase farmer revenue by an average of 15% for active MarketLink users in the next 12 months.
    -   Expand our Input Hub to include at least 3 new verified local suppliers within the next 9 months.
    
    **How to Support/Join Us:**
    AgroConnect welcomes support from Agricultural NGOs & Cooperatives (for farmer outreach and resource distribution), Government Agricultural Agencies (for policy support, data sharing, and extension services), and Financial Institutions (to explore micro-financing solutions for farmers to access inputs and equipment).
    
    You can also support us by becoming a registered farmer or buyer, spreading the word, or providing feedback.
    
    When local farming meets digital connection, even the smallest harvest can flourish.
    `; 
    if(chatMessages && userInput && sendButton &&  typeof puter!=='undefined' && puter.ai && puter.ai.chat){
      function displayMessage(message, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add(sender === 'user' ?  'message-outgoing' : 'message-incoming');
        messageDiv.innerHTML = `<p>${message}</p>`;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
      async function sendMessage(){
        const message = userInput.value.trim();

        if(message === '') {
          displayMessage("Please enter a question to ask our AI assistant.", "bot");
          return;
        }
        displayMessage(message, 'user');
        userInput.value = '';

        userInput.disabled = true;
        sendButton.disabled = true;
        sendButton.textContent = 'Thinking...';

        try{
          const response = await puter.ai.chat({
            messages: [
              {role: 'system', content: startupContext},
              {role:'user', content: message}
            ]
          });
          if(response && response.content) {
            displayMessage(response.content, 'bot');
          } else {
            displayMessage("Sorry, i couldn't get a response.Please try again.", "bot");

          }
        } catch (error){
          console.error('Puter.ai chat error:', error);

          displayMessage("Oops! There was an error connecting to the AI.Please try again later.", "bot");

        } finally {
          userInput.disabled = false;
          sendButton.disabled = false;
          sendButton.textContent = 'Send';
          userInput.focus();
        }
      }
      sendButton.addEventListener('click', sendMessage);

      userInput.addEventListener('keypress',(e) => {
        if(e.key === 'Enter'){
          sendMessage();
        }
      });

      sampleQuestionBtns.forEach(button => {
        button.addEventListener('click', () => {
          const question = button.dataset.question;
          userInput.value = question;
          sendMessage();
        });
      });
    } 
  else{
    console.error("Chatbot elements or Puter.js not found.Make sure HTMLL IDs are correct and Puter.js script is lloaded in index.html.");
  }
  })
