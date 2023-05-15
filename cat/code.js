//Creates the 2 variables
var budget = 1 ;
var pet;
//Hides so only the choices are available at the beginning
hideElement("catchoice");
hideElement("dogchoice");
hideElement("noChoice");
hideElement("budgetquestion");
hideElement("budgetCount");
hideElement("dogbudget1");
hideElement("dogbudget2");
hideElement("dogbudget3");
hideElement("catbudget1");
hideElement("catbudget2");
hideElement("nobudget");
hideElement("shelter");
hideElement("dogresults");
hideElement("homedog");
hideElement("dog75");
hideElement("dog150");
hideElement("dog250");
hideElement("dog500");
hideElement("dog1000");
hideElement("cattext");
hideElement("cathome");
hideElement("cat100");
hideElement("cat110");
hideElement("cat25");
hideElement("cat50");
hideElement("catlay");
//Hides or shows elements based on which chioce they made, also makes budget = 0 so they can't skip ahead
onEvent("choices","input", function( ) {
  pet = getText("choices");
  if (pet == "Dog") {
    showElement("dogchoice");
    hideElement("catchoice");
    showElement("budgetquestion");
    showElement("budgetCount");
    showElement("dogbudget1");
    showElement("dogbudget2");
    showElement("dogbudget3");
    hideElement("catbudget1");
    hideElement("catbudget2");
    setProperty("dogbudget1", "value", 0);
    setProperty("dogbudget2", "value", 0);
    setProperty("dogbudget3", "value", 0);
    hideElement("noChoice");
    budget = 0;
    setText("budgetCount", "$" + budget);
  } else if (pet == "Cat") {
    showElement("catchoice");
    hideElement("dogchoice");
    showElement("budgetquestion");
    showElement("budgetCount");
    showElement("catbudget1");
    showElement("catbudget2");
    hideElement("dogbudget1");
    hideElement("dogbudget2");
    hideElement("dogbudget3");
    setProperty("catbudget1", "value", 0);
    setProperty("catbudget2", "value", 0);
    hideElement("noChoice");
    budget = 0;
    setText("budgetCount", "$" + budget);
  } else if (pet == "Choose") {
    hideElement("dogchoice");
    hideElement("catchoice");
    hideElement("catchoice");
    hideElement("dogchoice");
    hideElement("noChoice");
    hideElement("budgetquestion");
    hideElement("budgetCount");
    hideElement("dogbudget1");
    hideElement("dogbudget2");
    hideElement("dogbudget3");
    hideElement("catbudget1");
    hideElement("catbudget2");
    hideElement("nobudget");
    budget = 1;
  }
});
//Based on their budget, when the click the results, makes a specific group of elements show and text
onEvent("dogshow", "click", function( ) {
  hideElement("dogshow");
  if (budget <= 25) {
    showElement("dogresults");
    setProperty("dogresults", "text", "Sadly, you can't buy a dog with " + budget + " dollars" + "\n" + "You can try adopting a dog from a dog shelter though!");
    showElement("shelter");
    showElement("homedog");
  } else if (budget <= 75) {
    showElement("dogresults");
    setProperty("dogresults", "text", "You can probably buy a Chihuahua with " + budget + " dollars." + "\n" + "They the smallest dogs in the world!" + "\n" + "Their lifespan is usually 12-20 years!");
    showElement("dog75");
    showElement("homedog");
  } else if (budget <= 150) {
    showElement("dogresults");
    setProperty("dogresults", "text", "You can probably buy a Cavapoo with " + budget + " dollars." + "\n" + "They originate from Australia" + "\n" + "Their lifespan is usually 10-15 years!");
    showElement("dog150");
    showElement("homedog");
  } else if (budget <= 250) {
    showElement("dogresults");
    setProperty("dogresults", "text", "You can probably buy a Blue Heeler with " + budget + " dollars." + "\n" + "They originally developed for droving cattle!" + "\n" + "Their lifespan is usually 12-14 years!");
    showElement("dog250");
    showElement("homedog");
  } else if (budget <= 500) {
    showElement("dogresults");
    setProperty("dogresults", "text", "You can probably buy an American Bully with " + budget + " dollars." + "\n" + "They are a new breed compared to others, coming between the 80's to 90's!" + "\n" + "Their lifespan is usually 8-13 years!");
    showElement("dog500");
    showElement("homedog");
  } else {
    showElement("dogresults");
    setProperty("dogresults", "text", "You can probably buy a Rottweiler with " + budget + " dollars." + "\n" + "They started serving as rescure dogs in New York after 9/11" + "\n" + "Their lifespan is usually 8-10 years!");
    showElement("dog1000");
    showElement("homedog");
  }
});
//Based on their budget, when they click the results button, makes a specific group of elements show and text.
onEvent("catshow", "click", function( ) {
  hideElement("catshow");
  if (budget <= 10) {
    showElement("cattext");
    setProperty("cattext", "text", "Sadly, you can't buy a cat with " + budget + " dollars" + "\n" + "You can try adopting a cat from a cat shelter though!");
    showElement("catlay");
    showElement("cathome");
  } else if ((budget <= 25)) {
    showElement("cattext");
    setProperty("cattext", "text", "You can probably buy a Persian with " + budget + " dollars." + "\n" + "They originatted from acient Persia!" + "\n" + "Their lifespan is usually 12-17 years!");
    showElement("cat25");
    showElement("cathome");
  } else if ((budget <= 50)) {
    showElement("cattext");
    setProperty("cattext", "text", "You can probably buy an American Shorthair with " + budget + " dollars." + "\n" + "They can have more than 80 different colors and patterns!" + "\n" + "Their lifespan is usually 15-20 years!");
    showElement("cat50");
    showElement("cathome");
  } else if (budget <= 100) {
    showElement("cattext");
    setProperty("cattext", "text", "You can probably buy a Siamese with " + budget + " dollars." + "\n" + "They used to be royal cats in Thailand!" + "\n" + "Their lifespan is usually 8-12 years!");
    showElement("cat100");
    showElement("cathome");
  } else {
    showElement("cattext");
    setProperty("cattext", "text", "You can probably buy a Bengal with " + budget + " dollars." + "\n" + "They are the only breed with rosette markings!" + "\n" + "Their lifespan is usually 10-16 years!");
    showElement("cat110");
    showElement("cathome");
  }
});
//Brings them both back to home screen and resets their budget to 0 so they have to redo the previous steps
onEvent("homedog", "click", function( ) {
  setScreen("home");
  budget = 0;
  setProperty("dogbudget1", "value", 0);
  setProperty("dogbudget2", "value", 0);
  setProperty("dogbudget3", "value", 0);
  setProperty("budgetCount", "text", "$0");
});
//Brings them both back to home screen and resets their budget to 0 so they have to redo the previous steps
onEvent("cathome", "click", function( ) {
  setScreen("home");
  budget = 0;
  setProperty("catbudget2", "value", 0);
  setProperty("catbudget1", "value", 0);
  setProperty("budgetCount", "text", "$0");
});
//Next 5 OnEvents use their budget calculating functions to get the user's budget based on their inputs on sliders
onEvent("catbudget1", "input", function( ) {
  catbudgetcalc();
});
onEvent("catbudget2", "input", function( ) {
  catbudgetcalc();
});
onEvent("dogbudget1", "input", function( ) {
  dogbudgetcalc();
});
onEvent("dogbudget2", "input", function( ) {
  dogbudgetcalc();
});
onEvent("dogbudget3", "input", function( ) {
  dogbudgetcalc();
});
//The first 2 reset the screen so previous budgets/attempts are gone and allows the new one so they don't overlap
//The last 2 are faulty checks so if their budget is 0 or haven't chosen an option, they can't go foward
onEvent("confirm", "click", function( ) {
  if (pet == "Dog" && budget > 0) {
    setScreen("dog");
    hideElement("dog1000");
    hideElement("dog150");
    hideElement("dog250");
    hideElement("dog500");
    hideElement("dog75");
    hideElement("shelter");
    hideElement("dogresults");
    hideElement("homedog");
    showElement("dogshow");
  } else if ((pet == "Cat" && budget > 0)) {
    setScreen("cat");
    hideElement("cat50");
    hideElement("cat25");
    hideElement("cat110");
    hideElement("cat100");
    hideElement("catlay");
    hideElement("cattext");
    hideElement("cathome");
    showElement("catshow");
  } else if ((budget == 0)) {
    showElement("nobudget");
    hideElement("noChoice");
  } else if ((pet != "Dog" || pet != "Cat")) {
    showElement("noChoice");
    hideElement("nobudget");
  }
});
//The 2 functions calculate the budget based on slider inputs and change the counter on screen
function dogbudgetcalc() {
  budget = getNumber("dogbudget1") + getNumber("dogbudget2") + getNumber("dogbudget3");
  setText("budgetCount", "$" + budget);
}
function catbudgetcalc() {
  budget = getNumber("catbudget1") + getNumber("catbudget2");
  setText("budgetCount", "$" + budget);
}
