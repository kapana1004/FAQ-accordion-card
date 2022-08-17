
// const membersLine = document.getElementsByClassName(".members");
// const uploadLine = document.getElementsByClassName(".upload");
// const passwordLine = document.getElementsByClassName(".password");
// const subscriptionLine = document.getElementsByClassName(".subscription");
// const supportLine = document.getElementsByClassName(".support");


// console.log(membersLine);

// let answer1 = document.getElementsByClassName(".membersAnswer");

// function getanswer1 (){

//     answer1.innerHtml = "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan"
   
// }

//         console.log(answer1.value);
    


// membersLine.addEventListener('click', function(){

//     getanswer1 ()
// })


// const questions = document.getElementById("relat");

// let i;

// for (i = 0; i < questions.length; i++) {
//   questions[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     let answer = this.nextElementSibling;
//     if (answer.style.display === "block") {
//       answer.style.display = "none";
//     } else {
//       answer.style.display = "block";
//     }
//   });
// }



let allQuestions = document.querySelectorAll("#relat");

const removeActive = function(){
  for (let i=0; i < allQuestions.length; i++) {


    let answer = allQuestions[i].querySelector(".par");
    answer.classList.remove("active");
    
    
    
      
    
    
    }
  
}

for (let i=0; i < allQuestions.length; i++) {

allQuestions[i].addEventListener("click", function(){
      removeActive();
      let answer = allQuestions[i].querySelector(".par");
      answer.classList.toggle("active");
      let arrowIcon = allQuestions[i].querySelector(".iconarrow");
      arrowIcon.classList.toggle("iconrotate");

      

      console.log(answer);


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