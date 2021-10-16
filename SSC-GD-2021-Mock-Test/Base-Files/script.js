const mainFunc = () => {
  //To remove main Container
  var remMain = document.getElementById("mainContainer");
  remMain.parentNode.removeChild(remMain);

  fetch("https://joinindianforces.in/SSC-GD-2021-Mock-Test/tests.json", {
    cache: "no-store",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      appendData(data);
    })
    .catch(function (err) {
      console.log("error: " + err);
    });
  const appendData = (data) => {
    var externalContainer = document.getElementById("extContainer");

    var mainContainer1 = document.createElement("div");
    mainContainer1.id = "mainContainer";
    mainContainer1.className = "row";

    externalContainer.appendChild(mainContainer1);

    var mainContainer = document.getElementById("mainContainer");
    for (var i = 0; i < data.length; i++) {
      var colContainer = document.createElement("div");
      colContainer.className = "col-lg-4";
      var cardContainer = document.createElement("div");
      cardContainer.className = "card";
      var cardBody = document.createElement("div");
      cardBody.className = "card-body";
      var heading = document.createElement("h5");
      heading.className = "card-title";
      var icon = document.createElement("i");
      icon.className = "fas fa-pen";
      heading.appendChild(icon);
      heading.innerHTML = data[i].TitleName;
      var cardText = document.createElement("p");
      cardText.className = "card-text";
      var list1 = document.createElement("li");
      list1.innerHTML = `No: of Questions - ${data[i].noQ}`;
      cardText.appendChild(list1);
      var list2 = document.createElement("li");
      list2.innerHTML = `Maximum Score - ${data[i].maxS}`;
      cardText.appendChild(list2);
      var list3 = document.createElement("li");
      list3.innerHTML = `Difficulty Level - ${data[i].difL}`;
      cardText.appendChild(list3);
      var button = document.createElement("button");
      button.type = "button";
      button.setAttribute("onclick", `test(${data[i].id})`);
      button.className = "btn btn-warning";
      button.innerHTML = "Take Test";
      cardBody.appendChild(heading);
      cardBody.appendChild(cardText);
      cardBody.appendChild(button);
      cardContainer.appendChild(cardBody);
      colContainer.appendChild(cardContainer);
      mainContainer.appendChild(colContainer);
    }
  };
};

const test = (testId) => {
  //To remove main Container
  var remMain = document.getElementById("mainContainer");
  remMain.parentNode.removeChild(remMain);

  //To get external container
  var externalContainer = document.getElementById("extContainer");

  //To create main container row
  var mainContainer = document.createElement("div");
  mainContainer.id = "mainContainer";
  mainContainer.className = "row";

  //To create column
  var colContainer = document.createElement("div");
  colContainer.className = "col-lg-6";

  //To cerate card
  var card = document.createElement("div");
  card.className = "card shadow";
  var cardBody = document.createElement("div");
  cardBody.className = "card-body";

  //To create instruction head
  var instructionsHead = document.createElement("h3");
  instructionsHead.innerHTML = "Read Instructions";
  instructionsHead.className = "instructionsHead";
  cardBody.appendChild(instructionsHead);

  //To create instructions
  var instructions = document.createElement("p");
  instructions.className = "instructions";
  var list1 = document.createElement("li");

  //Fetch details
  fetch("https://joinindianforces.in/SSC-GD-2021-Mock-Test/tests.json", {
    cache: "no-store",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].id == testId) {
          maxQ = data[i].noQ;
          maxM = data[i].maxS;
          list1.innerHTML = `There are total ${maxQ} questions for ${maxM} marks.`;
          instructions.appendChild(list1);

          var list2 = document.createElement("li");
          list2.innerHTML =
            "If a question is marked wrong 0.25 marks will be deducted.";
          instructions.appendChild(list2);

          var list3 = document.createElement("li");
          list3.innerHTML = `Total time will be ${maxQ + 5} Minutes.`;
          instructions.appendChild(list3);
        }
      }
    })
    .catch(function (err) {
      console.log("error: " + err);
    });

  cardBody.appendChild(instructions);

  //Roll Number Input
  var rollNo = document.createElement("input");
  rollNo.type = "number";
  rollNo.placeholder = "Enter Roll Number";
  rollNo.className = "inputField";
  rollNo.id = "rollNumber";
  rollNo.setAttribute("onkeyup", "checkRoll()");
  cardBody.appendChild(rollNo);
  var lineBreak = document.createElement("br");
  cardBody.appendChild(lineBreak);

  // To create Back and Start button
  var buttonBack = document.createElement("button");
  buttonBack.type = "button";
  buttonBack.className = "btn btn-danger btnInstruction";
  buttonBack.innerHTML = "Back";
  buttonBack.setAttribute("onclick", "mainFunc()");
  cardBody.appendChild(buttonBack);

  //To create Start button
  var buttonStart = document.createElement("button");
  buttonStart.type = "button";
  buttonStart.id = "startExambtn";
  buttonStart.className = "btn btn-success btnInstruction";
  buttonStart.disabled = true;
  buttonStart.innerHTML = "Start";
  buttonStart.setAttribute("onclick", `startExam(${testId})`);
  cardBody.appendChild(buttonStart);

  card.appendChild(cardBody);
  colContainer.appendChild(card);
  mainContainer.appendChild(colContainer);
  externalContainer.appendChild(mainContainer);
};

//Roll Number check function
const checkRoll = () => {
  var a = document.getElementById("rollNumber").value;
  if (a === "" || a.length > 8 || a.length < 8) {
    document.getElementById("startExambtn").disabled = true;
  } else {
    document.getElementById("startExambtn").disabled = false;
  }
};

const startExam = (testId) => {
  //To get Roll Number
  var rollExtract = document.querySelector('input[id="rollNumber"]').value;

  localStorage.setItem("rollNumber", rollExtract);

  //To remove main Container
  var remMain = document.getElementById("mainContainer");
  remMain.parentNode.removeChild(remMain);

  //To get external container
  var externalContainer = document.getElementById("extContainer");

  //To create main container row
  var mainContainer = document.createElement("div");
  mainContainer.id = "mainContainer";
  mainContainer.className = "row";

  //To create column
  var colContainer = document.createElement("div");
  colContainer.className = "col-lg-12";

  //To create timer
  var card = document.createElement("div");
  card.className = "card shadow text-center";
  var cardBody = document.createElement("div");
  cardBody.className = "card-body";

  var timeHead = document.createElement("h5");
  timeHead.innerHTML = "Time Left";
  timeHead.id = "timeHead";
  timeHead.className = "timeHead";
  cardBody.appendChild(timeHead);

  var timmer = document.createElement("div");
  timmer.id = "countdown";
  timmer.className = "timmer";

  var hour = document.createElement("div");
  var hourSpan = document.createElement("span");
  hourSpan.className = "hours";
  hourSpan.id = "hours";
  hourSpan.innerHTML = "00";
  var hourText = document.createElement("div");
  hourText.className = "smalltext";
  hourText.innerHTML = "Hours";
  hour.appendChild(hourText);
  hour.appendChild(hourSpan);
  timmer.appendChild(hour);

  var minute = document.createElement("div");
  var minuteSpan = document.createElement("span");
  minuteSpan.className = "minutes";
  minuteSpan.id = "minutes";
  minuteSpan.innerHTML = "00";
  var minuteText = document.createElement("div");
  minuteText.className = "smalltext";
  minuteText.innerHTML = "Minutes";
  minute.appendChild(minuteText);
  minute.appendChild(minuteSpan);
  timmer.appendChild(minute);

  var second = document.createElement("div");
  var secondSpan = document.createElement("span");
  secondSpan.className = "seconds";
  secondSpan.id = "seconds";
  secondSpan.innerHTML = "00";
  var secondText = document.createElement("div");
  secondText.className = "smalltext";
  secondText.innerHTML = "Seconds";
  second.appendChild(secondText);
  second.appendChild(secondSpan);
  timmer.appendChild(second);

  cardBody.appendChild(timmer);

  card.appendChild(cardBody);
  colContainer.appendChild(card);

  //Quiz container
  var quizContainermain = document.createElement("div");
  quizContainermain.id = "quiz";

  //Quiz container inner
  fetch("https://joinindianforces.in/SSC-GD-2021-Mock-Test/tests.json", {
    cache: "no-store",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var quizContainer = document.getElementById("quiz");

      for (var i = 0; i < data.length; i++) {
        if (data[i].id == testId) {
          //Fetching Stad and end Time
          localStorage.setItem("startTime", data[i].examStart);
          localStorage.setItem("endTime", data[i].examEnd);

          for (var j = 0; j < data[i].questions.length; j++) {
            //For Card
            var card = document.createElement("div");
            card.className = "card shadow";
            var cardBody = document.createElement("div");
            cardBody.className = "card-body";

            //For Question Number
            var questionNumber = document.createElement("p");
            questionNumber.className = "questionNumber";
            questionNumber.innerHTML = `Question ${j + 1} of ${
              data[i].questions.length
            }`;
            cardBody.appendChild(questionNumber);

            //For Line
            var line = document.createElement("hr");
            cardBody.appendChild(line);

            //For Question
            var question = document.createElement("p");
            question.className = "question";
            question.innerHTML = data[i].questions[j].question;
            cardBody.appendChild(question);

            for (var k = 0; k < data[i].questions[j].option.length; k++) {
              var option = document.createElement("input");
              option.type = "radio";
              option.id = `option${k}`;
              option.value = k + 1;
              option.name = "question" + (j + 1);
              var label = document.createElement("label");
              label.className = "option";
              label.setAttribute = ("for", `option${k}`);
              label.innerHTML = data[i].questions[j].option[k].option;
              cardBody.appendChild(option);
              cardBody.appendChild(label);
              var lineBreak = document.createElement("br");
              cardBody.appendChild(lineBreak);
            }

            //For button
            var clearButton = document.createElement("button");
            clearButton.type = "button";
            clearButton.className = "btn btn-danger btnClear";
            clearButton.setAttribute(
              "onclick",
              `clearSelection("${"question" + (j + 1)}")`
            );
            clearButton.innerHTML = "Clear Selection";
            cardBody.appendChild(clearButton);
            var lineBreak = document.createElement("br");
            cardBody.appendChild(lineBreak);

            card.appendChild(cardBody);
            quizContainer.appendChild(card);
          }

          MathJax.typesetPromise();

          //For Submit
          var submitButton = document.createElement("button");
          submitButton.type = "button";
          submitButton.className = "btn btn-success btnSubmit";
          submitButton.id = "submitBtn";
          submitButton.disabled = true;
          submitButton.setAttribute("onclick", `submitAnswers(${testId})`);
          submitButton.innerHTML = "Submit";
          quizContainer.appendChild(submitButton);
        }
      }
      (function () {
        const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

        var startTime = localStorage.getItem("startTime");
        var endTime = localStorage.getItem("endTime");

        let examEnd = endTime,
          countDown = new Date(examEnd).getTime(),
          x = setInterval(function () {
            let examStart = new Date(startTime).getTime(),
              currentTime = new Date().getTime(),
              distance = countDown - currentTime;

            if (currentTime >= examStart && currentTime < countDown) {
              let headline = document.getElementById("timeHead");
              headline.innerText = "Time Left";
              let countdown = document.getElementById("countdown");
              countdown.removeAttribute("style");
              let questions = document.getElementById("quiz");
              questions.removeAttribute("style");
              let submitBtn = document.getElementById("submitBtn");
              if (submitBtn.disabled === true) {
                submitBtn.disabled = false;
              }

              (document.getElementById("hours").innerText = Math.floor(
                (distance % day) / hour
              )),
                (document.getElementById("minutes").innerText = Math.floor(
                  (distance % hour) / minute
                )),
                (document.getElementById("seconds").innerText = Math.floor(
                  (distance % minute) / second
                ));
            } else if (
              countDown <= currentTime &&
              currentTime < countDown + 500
            ) {
              submitAnswers(testId);
            } else if (countDown < currentTime) {
              let headline = document.getElementById("timeHead");
              headline.innerText = "Exam Ended!";
              let countdown = document.getElementById("countdown");
              countdown.style.display = "none";
              let submitBtn = document.getElementById("submitBtn");
              if (submitBtn.disabled === false) {
                submitBtn.disabled = true;
              }
              clearInterval(x);
            } else if (currentTime < examStart) {
              let headline = document.getElementById("timeHead");
              headline.innerHTML = "Exam not Started!";
              let countdown = document.getElementById("countdown");
              countdown.style.display = "none";
              let questions = document.getElementById("quiz");
              questions.style.display = "none";
            }
          }, 100);
      })();
    })
    .catch(function (err) {
      console.log("error: " + err);
    });

  colContainer.appendChild(quizContainermain);
  mainContainer.appendChild(colContainer);
  externalContainer.appendChild(mainContainer);
};

//clear selection function
const clearSelection = (name) => {
  const radioBtns = document.querySelectorAll(
    "input[type='radio'][name='" + name + "']"
  );
  radioBtns.forEach((radioBtn) => {
    if (radioBtn.checked === true) radioBtn.checked = false;
  });
};

//Submit Answers
const submitAnswers = (testId) => {
  var score = 0;
  fetch("https://joinindianforces.in/SSC-GD-2021-Mock-Test/tests.json", {
    cache: "no-store",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {
        if (data[i].id == testId) {
          for (var j = 0; j < data[i].questions.length; j++) {
            var a = document.querySelector(
              `input[name="question${j + 1}"]:checked`
            );
            var b = data[i].questions[j].answer;
            if (a == null) {
              continue;
            } else {
              if (a.value == b) {
                score += 1;
              } else {
                score -= 0.25;
              }
            }
          }
        }
      }
      var roll = localStorage.getItem("rollNumber");

      //To save data
      $.ajax({
        url: "https://docs.google.com/forms/d/e/1FAIpQLSe8uk54G2us5M5oHTJYG8JWtH48cNyUsSOahINlc6RKom7GBw/formResponse?",
        data: { "entry.1956923164": roll, "entry.1449291632": score },
        type: "POST",
        dataType: "xml",
      });

      alert("Test Completed. Result will be published soon!");
      location.reload();
    })
    .catch(function (err) {
      console.log("error: " + err);
    });
};

mainFunc();
