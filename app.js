var correctPoint  = 0;
var arrayindex= 0;
var myVar;
var t = document.getElementById("scoreDiv");
t.setAttribute('style', 'visibility:hidden');
var d = document.getElementById("questionDiv");
d.setAttribute('style', 'visibility:hidden');

var questionArray = [
    {
        question : "Q1. Objective Resolution was passed by the Constituent Assembly of Pakistan on:",
        op1 : "March 12, 1947",
        op2 : "March 12, 1948",
        op3 : "March 12, 1949",
        correctAnswer : "March 12, 1949"
    },
    {
        question : "Q2. The world's highest mountain is in __________.",
        op1 : "China",
        op2 : "Pakistan",
        op3 : "Nepal",
        correctAnswer : "Nepal"
    },
    {
        question : "Q3. The largest ocean of the world is __________.",
        op1 : "Atlanta",
        op2 : "Pacific",
        op3 : "Indian",
        correctAnswer : "Pacific"
    },
    {
        question : "Q4. The Capital of Canada is __________.",
        op1 : "Tirane",
        op2 : "Ottawa",
        op3 : "Athens",
        correctAnswer : "Ottawa"
    },
    {
        question : "Q5. The currency of Israel is _________.",
        op1 : "Euro",
        op2 : "Shekel",
        op3 : "Forint",
        correctAnswer : "Shekel"
    },
    {
        question : "Q6. The highest part of the Earth is __________ .",
        op1 : "Mount Everest",
        op2 : "K2",
        op3 : "Norway",
        correctAnswer : "Mount Everest"
    },
    {
        question : "Q7. The deepest part of the Earth is __________ .",
        op1 : "Dead Sea",
        op2 : "Mariana Trench",
        op3 : "South Africa",
        correctAnswer : "Mariana Trench"
    },
{
        question : "Q8. Emirates is an airline of __________.",
        op1 : "Saudi Arabia",
        op2 : "Qatar",
        op3 : "UAE",
        correctAnswer : "UAE"
    },
    {
        question : "Q9. The Earth surface is divided in __________ Continents.",
        op1 : "5",
        op2 : "6",
        op3 : "7",
        correctAnswer : "7"
    },
    {
        question : "Q10. The hottest desert of the world is?",
        op1 : "Sahara Desert",
        op2 : "Arabian Desert",
        op3 : "Cholistan Desert",
        correctAnswer : "Sahara Desert"
    },
];

pageload();
function pageload(){
    document.getElementById("ques").innerHTML = questionArray[0].question;
    document.getElementById("opt1").innerHTML = questionArray[0].op1;
    document.getElementById("option1").value = questionArray[0].op1;
    document.getElementById("opt2").innerHTML = questionArray[0].op2;
    document.getElementById("option2").value = questionArray[0].op2;
    document.getElementById("opt3").innerHTML = questionArray[0].op3;
    document.getElementById("option3").value = questionArray[0].op3;
}
function startQuiz(){
    myVar = setInterval(myTimer , 1000);
    var min = 1;
    var sec= 60;    
    function myTimer(){   
         sec--;
         if(sec == 0){
             if(min > 0){
             min--;
             sec = 60;
             }
             else{
                 clearInterval(myVar);
                 alert("Time's Up!");
                 scoring();

             }
         }
         document.getElementById("timer").innerHTML ="Time Remaining: " + min + ":" + sec;
         
     }
    document.getElementById("startQuiz").setAttribute('style' , 'visibility:hidden');
    d.setAttribute('style'  , 'visibility:visible');
    document.getElementById("nextButton").setAttribute('disabled' , 'true');
    
         
}

function enableNextButton(){
    var radioName = document.querySelector('input[name="radio"]:checked');
    console.log(radioName);
    if(radioName){
        document.getElementById("nextButton").disabled = false;
        

    }
}

function next(){
    arrayindex++;
    var correctAnswer = questionArray[arrayindex-1].correctAnswer;
    console.log(correctAnswer);
    var radioName = document.querySelector('input[name="radio"]:checked').value;
    console.log(radioName);

    if(radioName == correctAnswer){
        correctPoint++;
        console.log(correctPoint);
    }
    else{
        correctPoint;
    }

    if(questionArray[arrayindex] ===  undefined){
        clearInterval(myVar);
        scoring();
    }
    else{

        document.getElementById("ques").innerHTML = questionArray[arrayindex].question;
        document.getElementById("opt1").innerHTML = questionArray[arrayindex].op1;
        document.getElementById("option1").value = questionArray[arrayindex].op1;
        document.getElementById("opt2").innerHTML = questionArray[arrayindex].op2;
        document.getElementById("option2").value = questionArray[arrayindex].op2;
        document.getElementById("opt3").innerHTML = questionArray[arrayindex].op3;
        document.getElementById("option3").value = questionArray[arrayindex].op3;

        document.getElementById("nextButton").setAttribute('disabled' , 'true');
        var ele = document.getElementsByName("radio");
   for(var i=0;i<ele.length;i++)
      ele[i].checked = false;


    }
    

}
function scoring(){
    var scores = (correctPoint / questionArray.length) * 100;
        scores = Math.round(scores);
        
        console.log(scores);
        d.setAttribute('style', 'visibility:hidden');
        t.setAttribute('style' , 'visibility: visible');
        document.getElementById("score").innerHTML = scores + "%";
        document.getElementById("answer").innerHTML = correctPoint;
        if(scores >= 65 ){
            document.getElementById("result").innerHTML = "Congratulations! <br/> You have successfully pass the Quiz."

        }
        else{
            document.getElementById("result").innerHTML = "Sorry! <br/> You are failed. <br/> Better Luck Next Time."
        }
}