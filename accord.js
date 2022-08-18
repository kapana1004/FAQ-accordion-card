



let allQuestions = document.querySelectorAll(".question");

const removeActive = function(activIndex){
  for (let i=0; i < allQuestions.length; i++) {


   
    if (i != activIndex){

      let answer = allQuestions[i].querySelector(".par");
      answer.classList.remove("active");
      let removIconRotate = allQuestions[i].querySelector(".iconarrow");
      removIconRotate.classList.remove("iconRotate");
      let removeBold = allQuestions[i].querySelector(".bold");
      removeBold.classList.remove("questionActive");
    }
    
    
      
    
    
    }
  
}



for (let i=0; i < allQuestions.length; i++) {

allQuestions[i].addEventListener("click", function(){
      removeActive(i);
      
      let answer = allQuestions[i].querySelector(".par");
      answer.classList.toggle("active");
      
      let arrowIcon = allQuestions[i].querySelector(".iconarrow");
      arrowIcon.classList.toggle("iconRotate");

      let questionAct = allQuestions[i].querySelector(".bold");
      questionAct.classList.toggle("questionActive");
      
      

      


})

}









// let toggleFaq = (e) => {
//   let answer = e.currentTarget.nextElementSibling;
//   let question = e.currentTarget.children[0];
//   let arrowIcon = e.currentTarget.children[1];
//   if (answer.style.display === "none") {
//     answer.style.display = "block";
//     question.style.fontWeight = "700";
//     question.style.color = "hsl(14, 88%, 65%)";
//     arrowIcon.style.transform = "rotate(180deg)";
//   } else {
//     answer.style.display = "none";
//     question.style.fontWeight = "400";
//     question.style.color = "hsl(238, 29%, 16%)";
//     arrowIcon.style.transform = "rotate(0deg)";
//   }
// };

// for (let question of allQuestions) { 

//  let answer = question.nextElementSibling;
//   answer.style.display = "none";
//   question.addEventListener("click", toggleFaq);


// }
 



// https://github.com/giuse92/faq-accordion-card/commit/136a2d44dfe1d626a1ff3306a1bf4fe067688a0e#diff-a493911cce6d7ca19a7be9aeed7cd061d2f676a65e843a240d919a817e34e292