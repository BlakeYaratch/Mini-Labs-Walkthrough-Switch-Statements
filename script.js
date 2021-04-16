var userQuestion = document.getElementById("input");

function MagicResponse() {
  document.getElementById("question").innerHTML = userQuestion.value;
  randomNumber = Math.floor(Math.random() * 10) + 1;
  switch (randomNumber) {
    case 1:
      response = "Yes";
      break;
    case 2:
      response = "No";
      break;
    case 3:
      response = "Why would you?";
      break;
    case 4:
      response = "Why wouldnt you?";
      break;
    case 5:
      response = "Go get some Ice Cream";
      break;
    case 6:
      response = "Try asking again";
      break;
    case 7:
      response = "I don't think so";
      break;
    case 8:
      response = "Neither";
      break;
    case 9:
      response = "Nothing";
      break;
    case 10:
      response = "Maybe someday";
      break;
  }
  document.getElementById("response").innerHTML = response;
}
