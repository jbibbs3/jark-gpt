const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const session = require("express-session");
const passport = require("passport");
require("./config/passport")(passport);

// adds router for required routes
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users"); 
const quizzesRouter = require("./routes/quizzes");
const questionsRouter = require("./routes/questions"); 
const answersRouter = require("./routes/answers"); 

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(
  session({
    secret: process.env.JWT_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);

// intercepts incoming requests and uses the appropriate router defined above
app.use("/auth", authRouter);
app.use("/", indexRouter);
app.use("/users", usersRouter); 
app.use("/quizzes", quizzesRouter);
app.use("/questions", questionsRouter);
app.use("/answers", answersRouter);

module.exports = app;
