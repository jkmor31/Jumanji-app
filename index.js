const express = require("express");

const app = express();
const port = "3400";

app.set("view engine", "ejs");
app.use('/public', express.static('public'));

app.get("/", (req, res) => {
	res.send("my server has started");
})

app.get("/home", (req, res) => {
    res.render("home");
})


//Bravestone Routes
app.get("/brave/:pageId", (req, res) => {
    const page = req.params["pageId"];
    let question = '';
    let answerA = '';
    let answerB = '';
    let answerC = '';
    let answerWin = '';
    if (page == '1') {
        question = 'What is Dr. Bravestone\'s first name? ';
        answerA = 'Greg';
        answerB = 'Xander';
        answerC = 'John';
    } else if (+page == 2) {
        question = 'What is Dr. Bravestone\'s profession? ';
        answerA = 'Zoologist';
        answerB = 'Archaeologist';
        answerC = 'Cartographer';
    } else if (+page == 3) {
        question = 'You find a giant snake in the Jungle. What do you do? ';
        answerA = 'Sing it a lullaby';
        answerWin = 'Punch it!';
        answerC = 'Run away';
    } else {
        question = 'Page Not Found!'
    }
    res.render("brave", {pageId: page, question: question, answerA: answerA, answerB: answerB, answerC: answerC, answerWin: answerWin});
})
app.get("/braveWrong", (req, res) => {
    res.render("braveWrong");
})


//Ruby Routes
app.get("/ruby/:pageId", (req, res) => {
    const page = req.params["pageId"];
    let question = '';
    let answerA = '';
    let answerB = '';
    let answerC = '';
    let answerWin = '';
    if (page == '1') {
        question = 'Who is Ruby Roundhouse an avatar for? ';
        answerA = 'Spencer';
        answerB = 'Martha';
        answerC = 'Fridge';
    } else if (+page == 2) {
        question = 'What is Ruby Roundhouse\'s profession? ';
        answerA = 'Aircraft Pilot';
        answerB = 'Commando';
        answerC = 'Teacher';
    } else if (+page == 3) {
        question = 'You find a giant snake in the Jungle. What do you do? ';
        answerA = 'Ignore it';
        answerWin = 'Roundhouse kick it!';
        answerC = 'Have someone save you';
    } else {
        question = 'Page Not Found!'
    }
    res.render("ruby", {pageId: page, question: question, answerA: answerA, answerB: answerB, answerC: answerC, answerWin: answerWin});
})
app.get("/rubyWrong", (req, res) => {
    res.render("rubyWrong");
})

//Shelly Routes
app.get("/shelly/:pageId", (req, res) => {
    const page = req.params["pageId"];
    let question = '';
    let answerA = '';
    let answerB = '';
    let answerC = '';
    let answerWin = '';
    if (page == '1') {
        question = 'Who is Professor Shelly an avatar for? ';
        answerA = 'Fridge';
        answerB = 'Bethany';
        answerC = 'Alex';
    } else if (+page == 2) {
        question = 'What is Professor Shelly\'s profession? ';
        answerA = 'Yoga Instructor';
        answerB = 'Cartographer';
        answerC = 'Police Officer';
    } else if (+page == 3) {
        question = 'You find a giant snake in the Jungle. What do you do? ';
        answerA = 'Try to trick it';
        answerWin = 'Run away!';
        answerC = 'Kill it with a sword';
    } else {
        question = 'Page Not Found!'
    }
    res.render("shelly", {pageId: page, question: question, answerA: answerA, answerB: answerB, answerC: answerC, answerWin: answerWin});
})
app.get("/shellyWrong", (req, res) => {
    res.render("shellyWrong");
})

//Mouse Routes
app.get("/mouse/:pageId", (req, res) => {
    const page = req.params["pageId"];
    let question = '';
    let answerA = '';
    let answerB = '';
    let answerC = '';
    let answerWin = '';
    if (page == '1') {
        question = 'What magic jewel will end the curse on Jumanji? ';
        answerA = 'Tiger\'s Toe';
        answerB = 'Jaguar\'s Eye';
        answerC = 'Snake\'s Fang';
    } else if (+page == 2) {
        question = 'What is Mouse\'s profession? ';
        answerA = 'Martial Artist';
        answerB = 'Zoologist';
        answerC = 'Lifeguard';
    } else if (+page == 3) {
        question = 'What is Mouse\'s greatest weakness?';
        answerA = 'Knives';
        answerWin = 'Cake';
        answerC = 'Explosives';
    } else {
        question = 'Page Not Found'
    }
    res.render("mouse", {pageId: page, question: question, answerA: answerA, answerB: answerB, answerC: answerC, answerWin: answerWin});
})
app.get("/mouseWrong", (req, res) => {
    res.render("mouseWrong");
})


app.get("/win", (req, res) => {
    res.render("win");
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})