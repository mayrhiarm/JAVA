// let firstname = "Ade";
// firstname = "Bola";
// let firstname = "Kayode";
// firstname = "seyi";
// console.log(firstname);

// var lastname = 'David';
// lastname = 'Tega';
// var lastname = 'Dami';
// var lastname = 'Mary';
// console.log(lastname)

// const PI = 3.142
// console.log(PI)

//constraints in variable

// let Country = 'Nigeria';
// console.log(Country);

// var state = 'Lagos';
// console.log(state);

// const Continent = 'Africa';
// console.log(Continent);

// let email = "askjeeves@yahoo.com";
// // console.log(email)

// let firstName = "Mariam";

// let lastName = "Sanni";
// let fullName = firstName + " " + lastName;

// console.log(fullName.length);

// console.log(firstName.length);

// console.log(lastName.length);

// console.log(firstName[0]);

// console.log(lastName[3]);

// //string methods

// console.log(firstName.toUpperCase());

// console.log(firstName.toLowerCase());

// //indexOf
// console.log(email.indexOf("@"));
// // console.log(email.indexOf('e'))

// let Surname = email.lastIndexOf("e");
// console.log(email.slice(0, 3));
// console.log(Surname);

// console.log(email.replace("yahoo", "gmail"));
// console.log(email.replace("ask", "faith"));

// let Animal = "hippopotamus";
// console.log(Animal);
// console.log(Animal.toUpperCase());

// console.log(Animal.toLowerCase());

// console.log(Animal.indexOf("t"));

// console.log(Animal.lastIndexOf("o"));

// console.log(Animal.slice(5, 8));

// console.log(Animal.replace("h", "b"));

// // number
// let year = 2022;
// let score = 100;
// let score2 = 200;

// console.log(year);
// console.log(score);

// //math operators +'-,*,/,**,%

// let final_score = score + score2;
// console.log(final_score);

// let minus = score2 - score;
// console.log(minus);

// let mult = score * score2;
// console.log(mult);

// let div = score2 / score;
// console.log(div);

// console.log(2 ** 2);

// console.log(10 % 2);

// //shorthand

// let age = 20;
// let increase = 1;
// let age_increase = age + increase;
// console.log(age_increase);

// //dave
// let newAge = age + 1;
// console.log(newAge);

// //oyin

// // age++
// // console.log(age)

// // age +=2
// // age-=10
// console.log(age);

// // age **= 2
// age %= 3;
// console.log(age);

// console.log(10 / "faith");

// let continent = "Afica";
// console.log(continent);

// let language = "pidgin English";
// console.log(language);

// let ghanaPopulation = 500;
// console.log(ghanaPopulation);

// let finlandPopulation = 800;
// console.log(finlandPopulation);

// let country = "Nigeria";
// console.log(country);

// let nigeriaPopulation = 1000;
// console.log(nigeriaPopulation);

// nigeriaPopulation /= 2;
// let newNigeriaPopulation = nigeriaPopulation / 2;
// console.log(newNigeriaPopulation);

// newNigeriaPopulation++;
// console.log(nigeriaPopulation);

// console.log(newNigeriaPopulation > finlandPopulation);

// console.log(ghanaPopulation < newNigeriaPopulation);

// let description =
//   country +
//   " " +
//   "is in" +
//   " " +
//   continent +
//   " " +
//   "and its'" +
//   " " +
//   nigeriaPopulation +
//   " " +
//   "people that speak" +
//   " " +
//   " " +
//   language;
// console.log(description);

// concatinating variables with strings

//-concatination process

// let blog = 50;
// let statement = "the blog has" + " " + "likes";

// console.log(statement);

// let Score = 90;
// let studentName = "Ashe";
// let school = "Aguda gramma school";

// let response =
//   "Damola did you know" +
//   " " +
//   studentName +
//   " " +
//   "attends" +
//   " " +
//   school +
//   " " +
//   "and" +
//   " " +
//   "had" +
//   " " +
//   Score +
//   " " +
//   "in His test";
// console.log(response);

// `Damola did you know ${studentName} attends ${school} and had ${Score} in His test`;
// console.log(response);

// // ARRAYS for storing list collections of strings, numbers, boolean and other data types

// let friend1 = "onome";
// let friend2 = "temi";
// let friend3 = "tayo";
// console.log(friend1);
// console.log(friend2);
// console.log(friend3);

// let myFriends = ["onome", "temi", "tayo", "faith", "mariam", "salim"];
// console.log(myFriends.join("$"));
// console.log(myFriends.join("_"));
// console.log(myFriends.join("   "));

// console.log(myFriends.length);

// console.log(myFriends.indexOf("salim"));
// console.log(myFriends.concat(["Naija", "Ghana"]));
// console.log(myFriends.push("Rebecca"));
// console.log(myFriends);
// console.log(myFriends.pop());
// console.log(myFriends);
// console.log(myFriends.unshift("mary"));
// console.log(myFriends);

// console.log(myFriends.shift());
// console.log(myFriends);

// let trainees = [
//   "Temilolu",
//   "Onome",
//   "Faith",
//   "Segun",
//   "Tayo",
//   "Mariam",
//   "David",
//   "Ade",
//   "Dami",
//   "salim",
//   "Ashe",
// ];
// console.log(trainees);

// console.log(trainees.shift());
// console.log(trainees);

// console.log(trainees.unshift("pappi"));
// console.log(trainees);

// console.log(trainees.push("Amos"));
// console.log(trainees);

// console.log(trainees.push("Mike"));
// console.log(trainees);

// console.log(trainees.pop());
// console.log(trainees);

// console.log(trainees.unshift("Bobby"));
// console.log(trainees);

// console.log(trainees.unshift("Zack"));
// console.log(trainees);

// console.log(trainees.shift());
// console.log(trainees);

// let newTrainees = ["Queen", "Segun", "Pius", "Emeka"];
// console.log(newTrainees);

// let allTrainees = [...trainees, ...newTrainees];
// console.log(allTrainees);

//Spread operator and array destructure

// const numbers = [1, 2, 3, 4, 5];
// const newNumbers = [6, 7, 8, 9];

// const newArray = numbers.concat(newNumbers)
// const newArray = [...numbers, ...newNumbers];
// console.log(newArray);

//with d spread operator

// let color = null;
// console.log(color);

// let gender = "male";
// console.log(typeof gender);

// let Age = 50;
// console.log(typeof Age);

// let options = true;
// console.log(typeof options);

// let market;
// console.log(typeof market);

// console.log(myFriends.length);
// myFriends[0] = "segun";
// console.log(myFriends);
// myFriends[3] = "Ecgy";
// console.log(myFriends);

// let numbers = [1, 4, 8, 16];
// console.log(numbers);

// let colours = ["pink", "green", "blue", "red", "white", "grey"];
// let [a, b, c, d, e, f] = colours;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

// let [a, , c, d, e, f] = colours;
// console.log(a);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

// let [a, , c, ...rest] = colours;
// console.log(a);
// console.log(c);
// // console.log(a, c, ...rest);
// console.log(a, c, rest);

// console.log(d);
// console.log(e);
// console.log(f);
//let color = colours[0]
//console.log(color)

//comparison operator

// !=
// >
// <
// >=
// <=
// ==
// ===

// let year1 = 2002;

// console.log(year1 > 2001);
// console.log(year1 < 2001);
// console.log(year1 >= 2001);
// console.log(year1 <= 2001);
// console.log(year1 != 2001);

// loose comparison operator
// //==
// let sccore = "100";
// let sccore2 = sccore == 100;
// let sccore3 = sccore != 100;

// console.log(sccore2);
// console.log(sccore3);

//strict comparison operator
// ===

// let score222 = sccore === 100;
// let score333 = sccore !== 100;

// console.log(score222);
// console.log(score333);

// type conversion

// range = "100";
// let adds = range + 200;
// console.log(adds);

// console.log(typeof range);

// range = "100";
// let adds = range - 200;
// console.log(adds);

// range = Boolean("100");
// let adds = range + 200;
// console.log(adds);

// let n = 1;
// let u = 2;
// let m = 3;
// let b = 4;
// let e = 5;
// let r = 6;

// console.log(n, u, m, b, e, r);

// console.log(n);
// console.log(u);
// console.log(m);
// console.log(b);
// console.log(e);
// console.log(r);

// let run = ["cat", "dog", "cow", "pig"];

// for (let i = 0; i < run.length; i++) {
//   console.log(i);
// }
// for (let numbers = 1; numbers < 101; numbers++) {
//   console.log(numbers);
// }

// let colors = ["blue", "pink", "black", "red"];
// console.log(colors);
// for (let a = 0; a < colors.length; a++) {
//   console.log(a);
// }

// for (let i = 1; i < 11; i++) {
//   console.log("lifting weight repeatition" + [i]);
// }

// for (let i = 1; i < 11; i++) {
//   console.log(`lifting weight repeatition ${i}`);
// }

// l (i = 3; i > guys.length -1; i--) {
//    et guys = ['mama', ' papa', 'pikin', 'cousin']
// for console.log(guys[i])
// }

// let colors = ["blue", "pink", "black", "red"];
// let a = 0;

// while (a < colors.length) {
//   console.log(a);
//   a++;
// }

// let babes = ["fatima", "enny", "ajoke", "chioma"];
// let i = 0;
// while (i < babes.length) {
//   console.log(babes[i]);
//   i++;
// }

//conditional statements

// let age = 50;

// if (age === 50) {
//   console.log(" o boy u don old");
// }
// let age = 50;

// let age = 50;
// if (age > 50) {
//   console.log(" good to go");
// } else {
//   console.log("nawa ooo");
// }

// let password = "password1234";
// if (password.length >= 10) {
//   console.log("super strong password");
// } else if (password.length >= 6) {
//   console.log("strong password");
// } else {
//   console.log("weak passwords");
// }

// let password = prompt("type a password");
// if (password.length >= 10) {
//   alert("super strong password");
// } else if (password.length >= 6) {
//   alert("strong password");
// } else {
//   alert("weak passwords");
// }

// logical operators

// || means or
// && means and

// true && true = true
// true && false = false
// false && true = false
// false && false = false

// true || true = true
// true || false = true
// false || true = true
// false || false = false

// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// let PASSWORD = "password1234";

// if (PASSWORD.length >= 12 && PASSWORD.includes("@")) {
//   console.log("thats a strong one");
// } else if (PASSWORD.length >= 8 || PASSWORD.includes("@")) {
//   console.log("password is good");
// } else {
//   console.log("not good atal");
// }
// let Integer = prompt("Please enter a number");

// let n = Integer % 2;

// if (n === 1) {
//   alert("Weird, You have entered an odd number");
// } else if (n === 0) {
//   alert("Not weird, You have entered an even number");
// } else {
//   alert("Please enter a valid number");
// }

// let n = prompt("type a number");
// if (n % 2 == 0) {
//   alert("even number");
// } else if (n % 2 !== 0) {
//   alert("odd number");
// }

// let results = [20, 40, 0, 50, 100, 15, 10];
// for (let r = 0; r < results.length; r++) {
//   console.log("your score is: ", results[r]);
// }

//Break and continue what if we want d cycling to stop at 100
// let results = [20, 40, 0, 50, 100, 15, 10];

// for (let r = 0; r < results.length; r++) {
//   console.log("your score is: ", results[r]);
//   if (results[r] === 100) {
//     console.log("top score!");
//     break;
//   }
// }
// let results = [20, 40, 0, 50, 100, 15, 10];
// for (let r = 0; r < results.length; r++) {
//   if (results[r] === 0) {
//     continue;
//   }
//   console.log("your score is: ", results[r]);
//   if (results[r] === 100) {
//     console.log("top score!");
//     break;
//   }
// }

// let results = [20, 40, 0, 50, 100, 15, 10];

// for (let r = 0; r < results.length; r++) {
//   if (results[r] === 40) {
//     continue;
//   }
//   console.log("your score is", results[r]);
// }

// // let n = prompt('type a number')

// // if (n % 2 == 0) {
// //   alert('even number')
// // } else if (n % 2 !== 0) {
// //   alert('odd number')
// // }

// // for (let r = 0; r < results.length; r++) {
// //   console.log('your score is: ', results[r])
// //   // console.log(`your score is: r ${results}`)
// // }

// // Break & continue what if we wnt d cycling to stop at 100
// let results = [20, 40, 0, 50, 100, 15, 10]

// for (let r = 0; r < results.length; r++) {
//   // console.log('your score is: ', results[r])

//   // what if we dnt wnt to log to awa console 0?
//   if (results[r] === 0) {
//     continue
//   }
//   console.log('your score is: ', results[r])

//   if (results[r] === 100) {
//     console.log('top score!')
//     break
//   }
// }

// let grade = 'A'

// if (grade === 'A') {
//   console.log('you got A')
// } else if (grade === 'B') {
//   console.log('you got B')
// } else if (grade === 'C') {
//   console.log('you got C')
// } else if (grade === 'D') {
//   console.log('you got D')
// } else {
//   console.log('you failed')
// }

//switch statement
// let grade = "B";

// switch (grade) {
//   case "A":
//     console.log("you got A");
//     break;
//   case "B":
//     console.log("you got B");
//     break;
//   case "C":
//     console.log("you got C");
//     break;
//   case "D":
//     console.log("you got D");
//     break;
//   default:
//     console.log("you don fail");
// }

// let grade = prompt("my grade");
// switch (grade) {
//   case "A":
//     alert("you got A");
//     break;
//   case "B":
//     alert("you got B");
//     break;
//   case "C":
//     alert("you got C");
//     break;
//   case "D":
//     alert("you got D");
//     break;
//   default:
//     alert("No Grade");
// }
// let a = prompt("put a number");
// let b = prompt("put another number");

// let result = a * b;
// alert(result);

// let SegunHeight = 10;
// let MariamHeight = 9;

// let SegunWeight = 60;
// let MariamWeight = 70;

// let SegunBMI = SegunWeight / SegunHeight ** 2;
// let MariamBMI = MariamWeight / MariamHeight ** 2;
// console.log(SegunBMI);
// console.log(MariamBMI);

// if (SegunBMI >= MariamBMI) {
//   console.log("Segun BMI is greater");
// } else if (MariamBMI >= SegunBMI) {
//   console.log("Mariam BMI is greater");
// } else {
//   console.log("No BMI Result");
// }

// // Function

// // Function declaration
// greet();
// function greet() {
//   console.log("hafa");
// }

// //function expression
// let country = function (name, time) {
//   console.log(`good day ${name} ${time}`);
// };
// country("faith", "morning");

// //Arrow function
// let salute = () => {
//   console.log("na we dey here");
// };
// salute();

// let spartansFirstscore = 60;
// let spartanssecondscore = 70;
// let spartansthirdscore = 80;

// let spartansTotalscore =
//   spartansFirstscore + spartanssecondscore + spartansthirdscore;
// console.log(spartansTotalscore);

// let spartansAveragescore = spartansTotalscore / 3;
// console.log(spartansAveragescore);

// let AlphaFirstscore = 88;
// let Alphasecondscore = 91;
// let Alphathirdscore = 120;

// let AlphaTotalscore = AlphaFirstscore + Alphasecondscore + Alphathirdscore;
// console.log(AlphaTotalscore);

// let AlphaAveragescore = AlphaTotalscore / 3;
// console.log(AlphaAveragescore);

// if (spartansAveragescore > AlphaAveragescore) {
//   console.log('The Winner Is Spartans');
// } else if (spartansAveragescore < AlphaAveragescore) {
//   console.log('The Winner Is Alpha');
// } else if (spartansAveragescore === AlphaAveragescore) {
//   console.log('Its A Tie');
// } else {
//   console.log('No Winner');
// }

// console.log(
//   spartansAveragescore > AlphaAveragescore
//     ? "The Winner Is Spartans"
//     : "The Winner Is Alapha"
// );

// function greet(number) {
//   let apples = 10;
//   let statement =
//     "faith was able to buy " + apples + " apples last night " + number;
//   console.log(statement);
// }
// greet("on her way home");

// let total = function (sth) {
//   let mango = 20;
//   let result = "temi was able to buy " + mango + " akara last night " + sth;
//   console.log(result);
// };
// total("close to the market");

// function greet(number) {
//   let apples = 10;
//   return (statement =
//     "faith was able to buy " + apples + " apples last night " + number);
//   console.log(statement);
// }
// let ask = greet("on her way home");
// console.log(ask);
// let speak = ask + " from church";
// console.log(speak);

// const totals = (number) => {
//   let orange = 100;
//   let assessment = `Dami ate ${orange} raps of eba ${number}`;
//   console.log(assessment);
//   return assessment;
// };
// let explain = totals("daily");
// let Explanation = `Eggy was wowed that ${explain}`;
// console.log(Explanation);

// let food = [20, 30, 50, 100];

// let trainees = ["segun", "faith", "david", "ashe"];

// let fees = [60, 80, 120];

// function calculate(array) {
//   for (let i = 0; i < array.length; i++) {
//     // if (array[i] === 30) {
//     //   continue;
//     // }
//     // console.log(array[i]);
//     console.log(array[i].toUpperCase());
//   }
// }
// // calculate(food);
// // calculate(trainees);

// let trainees = ["segun", "faith", "david", "ashe"];
// function calculate(array) {
//   let count = 100;
//   let declaration = `john spoke ${count} words to ${array}`;
//   console.log(declaration);
// }
// calculate(trainees);

// let speaker = (birthday, name) => {
//   return birthday - 1987 + 2;
// };
// let spoken = speaker(2022);
// let expression = `ada was born ${spoken} years ago`;
// console.log(expression);

// let age = 20;
// let persontype;

// if (age > 17) {
//   persontype = "adult";
// } else if (age > 12) {
//   persontype = "teen";
// } else {
//   persontype = "kid";
// }
// console.log(persontype);

// age = 51;
// persontype =
//   age === 17 ? "adult" : age < 12 ? "teen" : age > 50 ? "elder" : "kid";
// console.log(persontype);

// let lastname = "eggys";

// function greet() {
//   const lastname = "papito";
//   console.log(lastname);

//   function sabi() {
//     const lastname = "terra muda";
//     console.log(lastname);
//   }
//   sabi();
// }
// greet(lastname);

//callBack and Higher order Functions

// function young(age) {
//   // console.log(`good morning $(name)`);
//   return `good morning ${age}`;
// }

// function greet(name, ashee, ben, pat) {
//   let newname = "faith";
//   console.log(`${name}, my Name is ${newname} ${ashee(name)} ${ben}`);
// }
// greet("Ade", young, "peter");

// function greet(name) {
//   // console.log(`good morning ${name}`);
// }
// // greet("segey");

// let said = (names, David) => {
//   let othername = "Amos";
//   console.log(`${David(names)} my name is ${othername}`);
// };
// said("segey", greet);

// greet('Ade', morning)

// function greet(name) {
//   console.log(`Good morning ${name}`)
// }

// function salute(nomenclature, ask) {
//   ask()
//   let real_name = 'Amos'
//   console.log(`${nomenclature} my name is ${real_name}   `)
// }

// salute('Segey', greet)

// function young(age) {
//   //console.log(`good morning $(name)`)
//   return `good morning ${age}`;
// }

// function greet(name, sth) {
//   let newname = "faith";
//   console.log(`${sth(name)}, my Name is ${newname}`);
// }
// greet("Ade", young);

//classwork

// let calcAverage = (first, second, third) => {
//   return (first + second + third) / 3;
// };
// console.log(calcAverage(1, 2, 3));

// let AlphaFirstscore =  43;
// let Alphasecondscore = 21;
// let Alphathirdscore = 73;

// FinalAlphascore = AlphaFirstscore + Alphasecondscore + Alphathirdscore;
// console.log(FinalAlphascore);

// let AlphaAveragescore = FinalAlphascore / 3;
// console.log(AlphaAveragescore);

// let spartansFirstscore = 63;
// let spartanssecondscore = 55;
// let spartansthirdscore = 47;

// Finalspartansscore =
//   spartansFirstscore + spartanssecondscore + spartansthirdscore;
// console.log(Finalspartansscore);

// let spartansAveragescore = Finalspartansscore / 3;
// console.log(spartansAveragescore);

//faster method

// let alphaScore = (43, 21, 73);

// let spartansScore = (63, 55, 47);

// let TotalalphaScore = 43 + 21 + 73;
// console.log(TotalalphaScore);

// let alphaScoreAvg = TotalalphaScore / 3;
// console.log(alphaScoreAvg);

// let TotalspartansScore = 63 + 55 + 47;
// console.log(TotalspartansScore);

// let spartansScoreAvg = TotalspartansScore / 3;
// console.log(spartansScoreAvg);

//calc Average (more faster method)
// let calcAverage = (first, second, third) => {
//   return (first + second + third) / 3;
// };

// let alphaAverageScore = calcAverage(43, 21, 73);
// let spartansAverageScore = calcAverage(63, 55, 47);

// console.log(alphaAverageScore);
// console.log(spartansAverageScore);

// let checkWinner = (alphaAverageScore, spartansAverageScore) => {
//   if (alphaAverageScore >= 2 * spartansAverageScore) {
//     console.log(`Alpha Wins (${alphaAverageScore} vs ${spartansAverageScore})`);
//   } else if (spartansAverageScore >= 2 * alphaAverageScore) {
//     console.log(
//       `spartans wins 🏆 (${spartansAverageScore} vs ${alphaAverageScore}) `
//     );
//   } else {
//     console.log(`No Winner 😐`);
//   }
// };

// checkWinner(alphaAverageScore, spartansAverageScore);

// checkWinner(300, 100);

//Objects

// let MariamArray = [
//   "David",
//   "Akpan",
//   2022 - 1988,
//   "Developer",
//   ["Onome", "faith", "Ade"],
// ];
// console.log(MariamArray);

// MariamArray[4][0] = "Eggy";
// console.log(MariamArray);

// let user = MariamArray[4].shift();
// let anotherUser = MariamArray[4].unshift("Eggy");
// console.log(user);
// console.log(anotherUser);
// console.log(MariamArray);

// let clientuser = {
//   firstname: "David",
//   lastname: "Akpan",
//   // age: 2022 - 1988,
//   age: 2022,
//   // birthday: 2022,

//   calcAge: function () {
//     return this.age - 1988;
//   },

//   statement: function () {
//     return `${this.firstname} is ${this.calcAge()} years old`;
//     // return clientuser.firstname + " is " + this.calcAge() + " years old";
//   },

//   hasData: true,
//   currentday: Date(16 - 02 - 2022),
//   friends: ["Onome", "faith", "Ade"],
// };
// console.log(clientuser);
// console.log(clientuser.statement());

// // == Dot vs bracket notation

// console.log(clientuser.firstname);
// console.log(clientuser.friends);
// console.log(clientuser.calcAge(2022));

// console.log((clientuser.firstname = "Amos"));
// console.log(clientuser);

// console.log(clientuser["firstname"]);
// console.log(clientuser);

// let clientuser2 = {
//   skincolor: "black",
//   haircolor: "black",
//   gender: "male",
// };

// let Allclients = { ...clientuser, ...clientuser2 };
// console.log(Allclients);

// //function declaration example
// function mary(name, age, location) {
//   console.log(`${name} my age is ${age} and i stay at ${location}`);
// }
// mary("David", 34, "ikeja");

// //function expression example
// let Mariam = function mary(name, age, location) {
//   console.log(`${name} my age is ${age} and i stay at ${location}`);
// };
// Mariam("David", 34, "ikeja");

// //classwork
// let Segun = {
//   fullName: "Oluwasegun Ikotun",
//   mass: 76,
//   height: 1.99,
//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };
// console.log(Segun);
// console.log(Segun.calcBMI());

// let Mariamm = {
//   fullName: "Mariam Sanni",
//   mass: 80,
//   height: 2.1,
//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };
// console.log(Mariamm);
// console.log(Mariamm.calcBMI());

// if (Segun.calcBMI() > Mariamm.calcBMI()) {
//   console.log(
//     `Segun's BMI ${Segun.calcBMI()} is higher than Mariamm's BMI ${Mariamm.calcBMI()}`
//   );
// } else if (Mariamm.calcBMI() > Segun.calcBMI()) {
//   console.log(
//     `Mariamm's BMI ${Mariamm.calcBMI()} is higher than Segun's BMI ${Segun.calcBMI()}`
//   );
// } else {
//   console.log("No BMI");
// }

// BMI =
//   Segun.calcBMI() > Mariamm.calcBMI()
//     ? `Segun's BMI ${Segun.calcBMI()} is higher than Mariamm's BMI ${Mariamm.calcBMI()}`
//     : Mariamm.calcBMI() > Segun.calcBMI()
//     ? "Mariamm's BMI ${Mariamm.calcBMI()} is higher than Segun's BMI ${ Segun.calcBMI()}`"
//     : "no BMI";
// console.log(BMI);

// let people = [
//   { name: "sam", age: 25, positi0n: "developer" },
//   { name: "Onome", age: 35, positi0n: "Artist" },
//   { name: "Faith", age: 45, positi0n: "content writer" },
//   { name: "David", age: 55, positin: "problem solver" },
// ];

// for (a = 0; a < people.length; a++) {
//   console.log(people[a]);

//   console.log(people[a].name.toUpperCase());
// }

// Forach method
// let newPeople = function (person) {
//   console.log(person.name.toUpperCase());
// };
// people.forEach(newPeople);

// people.forEach(function (person) {
//   console.log(person.name.toUpperCase());
// });

// //map
// //it returns a new Array
// //doesnt change d size of the original Array
// //uses values from d original array in making new Array

// new_people = people.map(function (person) {
//   // return person.age * 2
//   return ` <h2> ${person.name} </h2>   `;
// });
// console.log(new_people);

// document.body.innerHTML = new_people.join("");
// console.log(new_people);

//filter
//it returns a new Array

// let youngBlood = people.filter((person) => {
//   return person.age >= 45;
// });

// console.log(youngBlood);

//math Object
//its a built in function

// let number1 = 4.56666;
// let Relay00 = Math.floor(number1);
// console.log(Relay00);

// let number11 = 4.1111;
// let Relay = Math.ceil(number1);

// console.log(Relay);

// let randomnumbers = Math.random();
// console.log(randomnumbers);

// let randomnumbers = Math.floor(Math.random() * 5)
// console.log (randomnumbers)

// let reg = Math.pow(2, 2);
// console.log(reg);
// console.log(Relay);

// let randomnumbers = Math.ceil(Math.random() * 5)
// console.log (randomnumbers)

// Bills = [275, 40, 430];

// let tip1 = 15 / 100;
// let tip2 = 20 / 100;
// tip_total = tip1 + tip2;
// console.log(tip_total);

// for (a = 0; a < Bills.length; a++) {
//   console.log(Bills[a]);

//   let tip =
//     Bills[a] < 50
//       ? 0
//       : Bills[a] > 50 && Bills[a] < 300
//       ? (Bills[a] * 15) / 100
//       : (Bills[0] * 20) / 100;
//   // console.log(tip);
//   console.log(
//     `the tip is ${tip} and the value is ${Bills[a]} total is ${tip + Bills[a]}`
//   );
// }

// // let dogAges = [5, 2, 4, 1, 15, 8, 3];

// // for (i = 0; i < dogAges.length; i++) {
// //   // console.log(dogAges[i]);
// //   function calcAvgHumanAge(dog) {
// //     let humanAge = dog <= 2 ? dog * 2 : 16 + dog * 4;
// //     // console.log(humanAge);
// //     return humanAge;
// //   }
// //   calcAvgHumanAge(dogAges[i]);

// //   newHumanAge = calcAvgHumanAge(dogAges[i]);

// //   if (newHumanAge > 18) {
// //     console.log(newHumanAge);
// //   } else {
// //     continue;
// //   }
// // }

// let dogAge = [5, 2, 4, 1, 15, 8, 3];

// function calcAverageHumanAge(dog) {
//   let humanAge;
//   if (dog <= 2) {
//     humanAge = 2 * dog;
//   } else {
//     humanAge = 16 + dog * 4;
//   }
//   // console.log(humanAge);
//   return humanAge;
// }

// let totalDogAge = 0;
// let averageDogAge = 0;
// let count = 0;

// for (d = 0; d < dogAge.length; d++) {
//   // console.log(dogAge[d]);
//   let z = calcAverageHumanAge(dogAge[d]);
//   //  console.log(`Human age of ${dogAge[d]} is ${z}`);
//   console.log(`Human age of ${dogAge[d]} is ${z}`);
//   if (z >= 18) {
//     count++;
//     totalDogAge = totalDogAge + z;
//     averageDogAge = totalDogAge / count;
//   }
// }
// console.log(totalDogAge);
// console.log(`The average dog age is ${averageDogAge}`);

// const companies = [
//   { name: "company One", category: "Finance", start: 1981, end: 2003 },
//   { name: "company Two", category: "Retail", start: 1992, end: 2008 },
//   { name: "company Three", category: "Auto", start: 1999, end: 2007 },
//   { name: "company Four", category: "Retail", start: 1989, end: 2010 },
//   { name: "company Five", category: "Technology", start: 2009, end: 2014 },
//   { name: "company Six", category: "Finance", start: 1987, end: 2010 },
//   { name: "company Seven", category: "Auto", start: 1986, end: 1996 },
//   { name: "company Eight", category: "technology", start: 1981, end: 1989 },
// ];

// for (c = 0; c < companies.length; c++) {
//   // console.log(companies[c]);

//   // console.log(companies[c].name);

//   if (companies[c].end - companies[c].start >= 10) {
//     console.log(companies[c]);
//   }
// }

// const age = [30, 15, 10, 5, 40, 80, 2, 20, 21, 25];
// console.log(age);

// for (a = 0; a < age.length; a++) {
//   console.log(age[a]);

//   if (age[a] >= 21) {
//     console.log(age[a]);
//   }
// }

//DOM

// document.body.style.backgroundColor = "green";
// // document.body.style.color = 'yellow'
// // document.getElementById('btn').style.color = 'green'
// // document.getElementById('btn').style.backgroundColor = 'purple'

// // let be = document.body
// // let gee = document.getElementById('btn')

// // be.style.backgroundColor = 'red'
// // be.style.color = 'yellow'

// // gee.style.color ='white'
// // gee.style.backgroundColor = 'purple'

// // getElementById
// // -select the element u want
// // -decide d effect to apply
// // - getElementById('element')

// let heading = document.getElementById("title");

// heading.style.color = "red";

// let btn = document.getElementById("btn");
// btn.style.backgroundColor = "blue";

// // getElementByTagName
// // -node-list = array-like object
// // -index,length but not all array method wud work

// let head = document.getElementsByTagName("h2");

// console.log(head);

// head[1].style.color = "purple";

// const items = document.getElementsByTagName("li");

// const newItems = [...items];

// // items.forEach(function(item){
// //   console.log(item);
// // })

// newItems.forEach((item) => {
//   // console.log(item);
//   item.style.color = "violet";
// });

// // getElementByClassName
// // -select the element u want
// // -decide d effect to apply
// // - getElementByClassName('element')

// const listItems = document.getElementsByClassName("special");

// // console.log(listItems)

// listItems[1].style.color = "blue";

// // querySelector and querySelectorAll
// // -select the element u want
// // -decide d effect to apply
// // querySelector('any css') - selects single element
// // querySelectorAll('any css') - selects all,forEach wud work here

// const solution = document.querySelector("#result");

// solution.style.backgroundColor = "indigo";

// // querySelectorAll('any css') - selects all,forEach wud work here

// const list = document.querySelectorAll(".special");

// list.forEach(function (one) {
//   // console.log(one);
//   one.style.color = "yellow";
// });

// // Changing attribute
// const link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://facebook.com");
// link.innerText = "facebook";

// // innerText

// const inner = document.querySelector("p");
// // console.log(inner.innerText);

// inner.innerText = "facebook";

// // classname
// let number = document.getElementById("first");
// let number2 = document.getElementById("second");
// let number3 = document.getElementById("third");

// let classValue = number.className;
// console.log(classValue);

// // // =======classList
// number3.classList.add("colors");

// // // =======classList
// number3.classList.remove("colors");

// // // ---- lets check if an element has a class using contains
// let result = number3.classList.contains("colors");
// console.log(result);

// if (result) {
//   console.log("hello world");
// } else {
//   console.log("doesnt have the class");
// }

//Event
// ===select element
// ---addEventListener()
// ---what Event, what to do?

const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");

// btn.addEventListener("click", function () {
//   // console.log('dami clicked moi');
//   heading.classList.add("red");
// });

function changeColor() {
  let sth = heading.classList.contains("red");
  if (sth) {
    heading.classList.remove("red");
  } else {
    heading.classList.add("red");
  }
}

// btn.addEventListener("click", changeColor());
btn.addEventListener("click", changeColor);













