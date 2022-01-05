const express = require("express");
const session = require('express-session');
const res = require("express/lib/response");
const querystring = require('query-string');

const app = express();
const port = process.env.PORT || 3800

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(session({
    secret: 'random string',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
   }));

app.set("view engine", "ejs");
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
	let my_user = "";
    let puncuation = "";
    let invalid_login = false;

    invalid_login = req.query.reason || null;

    if (req.session && req.session.username) {
        my_user = req.session.username;
        puncuation = ',';
    }
    const user = req.session ? req.session.username : "user not set";
	res.render("index", {my_user: user, puncuation: puncuation, invalid_login: invalid_login});
}); 

const auth = (req,res,next) => {
   if (req.session && req.session.username) {
        next();
    } else {
        res.redirect("/?reason=invalid_login");
    }
}

app.get("/*", auth);

app.get('/home', (req, res) => {
    if (req.session && req.session.username) {
        res.render("home", {my_user: req.session.username});
    } else {
        res.redirect('/');
    }    
})

app.post('/signup', (req, res) => {
    const valid_users = [
        {"name": "sue", "password": "sue"},
        {"name": "john", "password": "john"},
        {"name": "mary", "password": "mary"}
    ];

	const user = req.body.username;
    const pass = req.body.password;

    const found_user = valid_users.find(usr => usr.name == user && usr.password == pass);

    if (found_user) {
        req.session.username = user;
        res.redirect("/home");
    } else {
        req.session.destroy(() =>
        {console.log("user reset");})
        // req.session.username = user;
        res.redirect("/?reason=invalid_user");	
    }

});

app.get("/signout", (req, res) => {
    req.session.destroy(() => {
        res.end("you have been signed out");
    });
});


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