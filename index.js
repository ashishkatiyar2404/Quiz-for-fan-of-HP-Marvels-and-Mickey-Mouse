const chalk = require('chalk');             

var readlineSync = require('readline-sync'); //import file

var playerName = readlineSync.question(chalk.hex('#DEADED').bold("Hey Buddy What's your good name? 🧐 \n"));  //read username

var score = 0;                             // for users score

console.log(chalk.green("Welcome "+playerName+" to the Harry Potter, Marvels and Mickey Mouse Quiz.\n\nThere will be some questions and you just have to write the option name and press Enter\nLet's see you are a true fan of your super fav. or Not.🤪\n"));  

console.log(chalk.white.bgRed.bold("Rules:- +1 For Right Answer\n-1 For Wrong Answer"));


var userIn = readlineSync.question(chalk.red("Choose your fav One:-\n a.Harry Potter\n b.Marvels\n c.Mickey Mouse\n"));


//-------------------------------------------------ARRAY(Questions)--------------------------------------------------//
var questions_Harry =[
  {
    quest: chalk.blueBright(`
    1.From what King’s Cross platform does the Hogwarts Express leave?           
    a.Eight and One-quarter
    b.Nine and Three-quarters
    c.Five and a Half
    d.Eleven\n`),
    ans:"b"
  },
  {
    quest:chalk.blueBright(`
    2.Who has given Harry Potter the Invisibility cloak?          
    a.Dumbledore
    b.Mad-eye Moody
    c.Professor Snape
    d.Dobby\n`),
    ans:"b"
  },
  {
    quest:chalk.blueBright(`
    3.What does Mrs. Weasley give Harry for Christmas every year?
    a.fruit cake
    b.A new sweater
    c.Chocolate frogs
    d.Bertie Bott’s every flavour beans\n`),
    ans:"b"
  },
  {
    quest:chalk.blueBright(`
    4. "You're a little scary sometimes, you know that? Brilliant... but scary." Who is Ron giving this awkward compliment to?
    a.Potter
    b.Hermione
    c.Draco Malfoy
    d.Dumbledore\n`),
    ans:"b"
  },
  {
    quest:chalk.blueBright(`
    5.What object must be caught in order to end a Quidditch match?
    a.The Golden Snitch
    b.Broomsticks
    c.Goggles
    d.Cups\n`),
    ans:"a"
  },
  {
    quest: chalk.blueBright(`
    6.Where does Dumbledore’s Army meet in ‘Harry Potter and the Order of the Phoenix’?           
    a.The Room of Requirement
    b.The Gryffindor Common Room
    c.Hagrid’s House
    d.The Shrieking Shack\n`),
    ans:"a"
  },
  {
    quest:chalk.blueBright(`
    7.Who delivers baby Harry to Dumbledore in Privet Drive at the start of the movie?           
    a.Severus Snape
    b.Hagrid
    c.Minerva McGonagall
    d.Vernon Dursley\n`),
    ans:"b"
  },
  {
    quest:chalk.blueBright(`
    8. What type of broom does Malfoy give to all the Slytherin players in order to make the team??
    a.Bluebottle
    b.Air Wave Gold
    c.Australian Flyabout
    d.Nimbus\n`),
    ans:"d"
  }

];



var questions_Marvels =[
  {
    quest: chalk.blueBright(`
    1.What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe?           
    a.2005
    b.2008
    c.2012
    d.2010\n`),
    ans:"b"
  },
  {
    quest:chalk.blueBright(`
    2.What is the name of Thor’s hammer?           
    a.Vanir
    b.Mjolnir
    c.Aesir
    d.Norn\n`),
    ans:"a"
  },
  {
    quest:chalk.blueBright(`
    3.In the Incredible Hulk, what does Tony tell Thaddeus Ross at the end of the film?
    a.That he wants to study The Hulk
    b.That he knows about S.H.I.E.L.D.
    c.That they are putting a team together
    d.That Thaddeus owes him money\n`),
    ans:"c"
  },
  {
    quest:chalk.blueBright(`
    4.What is Captain America’s shield made of?
    a.Adamantium
    b.Vibranium
    c.Promethium
    d.Carbonadium\n`),
    ans:"b"
  },
  {
    quest:chalk.blueBright(`
    5.The Flerkens are a race of extremely dangerous aliens that resembles what?
    a.Cats
    b.Ducks
    c.Reptiles
    d.Raccoons\n`),
    ans:"a"
  },
  {
    quest: chalk.blueBright(`
    6.What does Thor want another of when he’s in the diner?    
    a.A slice of pie
    b.A pint of beer
    c.A stack of pancakes
    d.A cup of coffee\n`),
    ans:"d"
  },
  {
    quest:chalk.blueBright(`
    7.What is the name of the little boy Tony befriends while stranded in the Iron Man 3?  
    a.Harry
    b.Henry
    c.Harley
    d.Holden\n`),
    ans:"b"
  },
  {
    quest:chalk.blueBright(`
    8.What does the Winter Soldier say after Steve recognizes him for the first time?
    a.“Who the hell is Bucky?”
    b.“Do I know you?”
    c.“He’s gone.”
    d.“What did you say?\n`),
    ans:"a"
  }

];




var questions_Mickey =[
  {
    quest: chalk.blueBright(`
    1.What was Mickey's name originally going to be?      
    a.Matthew
    b.Mark
    c.Maurice
    d.Mortimer\n`),
    ans:"d"
  },
  {
    quest:chalk.blueBright(`
    2.What is the name of Mickey's dog?    
    a.Pluto
    b.Goofy
    c.Jupiter
    d.benji\n`),
    ans:"a"
  },
  {
    quest:chalk.blueBright(`
    3.What is the name of Mickey's girlfriend?
    a.Mandy
    b.Minnie
    c.Maureen
    d.Mavis\n`),
    ans:"b"
  },
  {
    quest:chalk.blueBright(`
    4.Mickey Mouse was the first cartoon character to earn a star on the Hollywood Walk of Fame?
    a.True
    b.False
    c.Partially true
    d.Wrong Question\n`),
    ans:"a"
  },
  {
    quest:chalk.blueBright(`
    5.What was the name of the 1928 animated short in which Mickey Mouse made his debut?
    a.Motorboat Millie
    b.LifeBoat Lilly
    c.Tugboat billy
    d.Steamboat Willie\n`),
    ans:"d"
  },
  {
    quest: chalk.blueBright(`
    6.Who was the first person to provide the voice for Mickey Mouse?       
    a.Mickey Roney
    b.Walt Disney
    c.Walt Whitman
    d.Mickey Dolenz\n`),
    ans:"b"
  },
  {
    quest : chalk.blueBright(`
    7.Mickey made his video game debut in which Nintendo game?           
    a.Mickey's Racing Adventure
    b.Castle of Illusion Starring Mickey Mouse
    c.Mickey mopusecapade
    d.Disney's Magical Quest\n`),
    ans:"c"
  },
  {
    quest : chalk.blueBright(`
    8.In which Disney movie did Mickey play the 'Sorcerer's Apprentice'?
    a.Cinderella
    b.Bambi
    c.Fantasia
    d.Treasure Planet\n`),
    ans:"c"
  }

];




//---------------------------------------------FUNCTIONS-------------------------------------------------------------------------//

                                                //  FUNCTION1
function harry_function(questions_H, solution) {
  var userAnsInput = readlineSync.question(questions_H)
  if(userAnsInput === solution) {
    console.log(chalk.white.bgRed.bold('🤩 You are right..\n'+'Your current score: '+(++score)+'\n------------------------------'));
  }
  else{
    console.log(chalk.white.bgRedBright.bold('🥺 You are wrong\n'+'Your current score: '+(--score)+'\n--------------------------------'));
  }
}

                                                          //FUNCTION2
function marvels_function(questions_Mar, solution) {
  var userAnsInput = readlineSync.question(questions_Mar)
  if(userAnsInput === solution) {
    console.log(chalk.white.bgRed.bold('🤩 You are right..\n'+'Your current score: '+(++score)+'\n------------------------------'));
  }
  else{
    console.log(chalk.white.bgRedBright.bold('🥺 You are wrong\n'+'Your current score: '+(--score)+'\n--------------------------------'));
  }
}

                                                       //FUNCTION3
function mickey_function(questions_Mic, solution) {
  var userAnsInput = readlineSync.question(questions_Mic)
  if(userAnsInput === solution) {
    console.log(chalk.white.bgRed.bold('🤩 You are right..\n'+'Your current score: '+(++score)+'\n------------------------------'));
  }
  else{
    console.log(chalk.white.bgRedBright.bold('🥺 You are wrong\n'+'Your current score: '+(--score)+'\n--------------------------------'));
  }
}




//------------------------------------------------loop for array---------------------------------------------------------------//
                                               

if(userIn === 'a') {                                             //Harry Potter
    for(var i =0;i<questions_Harry.length; i++) {
      var currentQuestion = questions_Harry[i];
      harry_function(currentQuestion.quest,currentQuestion.ans)
   }
}
else if(userIn === 'b') {                                      // Marvels
  for(var j =0;j<questions_Marvels.length; j++) {
      var currentQuestion = questions_Marvels[j];
      marvels_function(currentQuestion.quest,currentQuestion.ans)
   }
}
else if(userIn === 'c') {                                      // Mickey Mouse
  for(var k =0;k<questions_Mickey.length; k++) {
      var currentQuestion = questions_Mickey[k];
      mickey_function(currentQuestion.quest,currentQuestion.ans)
   }
}
else{
  console.log("Bbye if you wanna play again refresh it😕");
}




//------------------------------------Hightest score and the output of quiz or users score---------------------------------------//
                              

if(userIn === 'a') {
    if(score > 3) {
     console.log("Your Score is : "+score+"🥳" +"\nThe Hightest Scores are🔥 : 1.Rahul - 8😀\n2.Shivarth - 7😀\n3.Dev Joshi -  6😀\nSend me Screenshot and i will update this list");
   }
  else{
      console.log("Good Try "+playerName+" Better Luck Next Time\nThanks for Playing This...🥳");
  }
}
else if(userIn === 'b') {
         if(score > 3) {
     console.log("Your Score is : "+score+"🥳" +"\nThe Hightest Scores are🔥 : 1.Ashish Singh - 7😀\n2.Aakash - 7😀\n3.Somil -  6😀\nSend me Screenshot and i will update this list");
   }
  else{
      console.log("Good Try "+playerName+" Better Luck Next Time\nThanks for Playing This...🥳");
  }
}
else if(userIn === 'c') {
     if(score > 3) {
     console.log("Your Score is : "+score+"🥳" +"\nThe Hightest Scores are🔥 : 1.Aditya - 6😀\n2.Priyansh - 6😀\n3.Aazad -  5😀\nSend me Screenshot and i will update this list");
   }
  else{
      console.log("Good Try "+playerName+" Better Luck Next Time\nThanks for Playing This...🥳");
  }
}
else{
  console.log("Bbye if you wanna play again refresh it😕");
}