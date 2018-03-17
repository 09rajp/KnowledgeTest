var userAnswer = "";
    var correctA= 0;
    var incorrectAnswer = 0;
    var questionNum =0;

$(document).ready(function () {
    console.log("ready");

    // Object holds many values
    // var questionDisplayed = [question1, question2];

    var randomQuestions = [
        {
            question: "Currently who is the best soccer player in the world?",
            choices: ['Ronaldo', 'Messi', 'Almiron', 'Mia'],
            answer: 'Ronaldo',
            userAnswer: "",
            correct: ''
        },
        {
            question: "Which MLS team holds the highest attendance record?",
            choices: ['L.A Galaxy', 'New York F.C.', 'Atlanta United', 'Seattle Sounders'],
            answer: 'Atlanta United',
            userAnswer: "",
            correct: true
        }, {
            question: "What country is hosting the 2018 World Cup?",
            choices: ['Russia', 'Mexico', 'Spain', 'Dubai'],
            answer: 'Russia',
            userAnswer: "",
            correct: true
        }, {
            question: "Which country has won the most World Cups?",
            choices: ['Brazil', 'Guatemala', 'U.S.A', 'Uruguay'],
            answer: 'Brazil',
            userAnswer: "",
            correct: true
        }, {
            question: "Which team has won the most UEFA Champions League titles?",
            choices: ['Real Madrid', 'Barcelona', 'PSG', 'Manchester United'],
            answer: 'Real Madrid',
            userAnswer: "",
            correct: true
        }, {
            question: "Where did Atlanta United begin playing their home games?",
            choices: ['Georgia', 'Turner Field', 'Bobby Dodd Stadium', 'Marietta'],
            answer: 'Boddy Dodd Stadium',
            userAnswer: "",
            correct: true
        }, {
            question: "Which player listed below does NOT play for Atlanta United?",
            choices: ['Martinez', 'Messi', 'Almiron', 'Villalba'],
            answer: 'Messi',
            userAnswer: "",
            correct: true
        }, {
            question: "When did Atlanta United join the MLS?",
            choices: ['2000', '2016', '2017', '2018'],
            answer: '2017',
            userAnswer: "",
            correct: true
        }, {
            question: "Which league listed below is not from Europe?",
            choices: ['Premier League', 'La Liga', 'Serie A', 'M.L.S'],
            answer: 'M.L.S',
            userAnswer: "",
            correct: true
        }, {
            question: "Who is the best female U.S soccer player of all time",
            choices: ['Martha', 'Morgan', 'Ronaldinha', 'Mia Han'],
            answer: 'Mia Ham',
            userAnswer: "",
            correct: true
        }
    ];
    
    var z = 9;
    for (let q = 9; q <= randomQuestions.length; q--) {
        $("#questionspart").text(randomQuestions[9].question);
        $("#options1").text(randomQuestions[9].choices[0]);
        $("#options2").text(randomQuestions[9].choices[1]);
        $("#options3").text(randomQuestions[9].choices[2]);
        $("#answer").text(randomQuestions[9].choices[3]);
    }
    
        //display one questions at a time, questions will start from last (9), then go --,

        //if function to see whetehr userGuess is the answer from the randomQuestions array.
        //

    var lastQuestion = randomQuestions[9].question;
    randomQuestions[9].display
    


    var questionsinOrder = randomQuestions[z];
    // create a timer
    var value = $(".values");
    console.log(value);
    //create a function to define the time
    // set a variable to get the timer id
    var i = 30;
    // var startButton = $("#startbutton");
    $("#startbutton").on("click", function () {
        setInterval(testFunction, 1000);
    });
    function testFunction () {
        if (i>= 0) {
        $("p").text(i);

            i--;
        }
        else {
            // img = '<img src = "./assets/css/images/nextbutton.jpg'
            clearInterval(testFunction);
            $("p").text("Your time is up");
            // display next question
        }
    }   

    
    

    })