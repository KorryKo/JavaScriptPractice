let answers = [];
let destinyPaths =
    {
        "plot1-1": "plot2",
        "plot1-2": "plot3",
        "plot2-1": "plot3",
        "plot2-2": "end",
        "plot3-1": "end",
        "plot3-2": "end",
        "end-1":"credits",
        "end-2":"credits"
    };

function nextQuestion(plot, answer) {
    return destinyPaths[plot + "-" + answer];
};

function askQuestion(plot) {
    let answer = +prompt(plots[plot].description + plots[plot].answers[1] + plots[plot].answers[2] + '-1 - Выход из игры');
    if(nextQuestion(plot,answer) ==="credits") {
        let storedAnswer = answers[answer-1]; // question
        return alert(`${plots[storedAnswer.plot].description} \n`+
                    `Вы решили: ${plots[storedAnswer.plot].answers[storedAnswer.answer]}`+
                    `\n ${plots["credits"].description}`)   ;
    }
    switch (answer) {
        case 1: storeAnswer(plot,answer);askQuestion(nextQuestion(plot, answer));break;
        case 2: storeAnswer(plot,answer);askQuestion(nextQuestion(plot, answer));break;
        case 0: alert(plots["credits"].description);break;
        case -1:alert(plots["credits"].description);break;
        default:alert("Вы ввели недопустимый символ");askQuestion(plot);
    }
};

function storeAnswer(plot,answer){
    return answers.push({"plot":plot, "answer":answer});
};

askQuestion("plot1");
