/*############ Different ways to Export Modules ###############*/

const getName = () => {
  return "Jim";
};

const getLocation = () => {
  return "Munich";
};

const dateOfBirth = "12.01.1982";

// Type-1:
module.exports.getName = getName;
module.exports.getLocation = getLocation;
module.exports.dob = dateOfBirth;

//Type-2:
module.exports = {
  getName,
  getLocation,
  dateOfBirth,
};

/*############ Different ways to Import Modules ###############*/
// Type:1
const reference = require("./reference");

// Type:2
// Destructuring assignment, we can cherry-pick what we want to import:
const { getName, dob } = require("./reference");

/*############ Custom Events with EventEmitter ###############*/
const events = require("events");
const emitter = new events.EventEmitter();

emitter.on("customEvent", (user, message) => {
  console.log(` ${user} : ${message} `);
});

emitter.emit("customEvent", "Computer", "Hello World");
emitter.emit(
  "customEvent",
  "Alex",
  "Awesome this helped me in knowing emitter!!"
);

/*############ Creating a child process with exec/spawn ###############*/
const cp = require("child_process");

// 'exec' function to execute external system commands in Sync
// 'spawn' function to execute external system commands in Async
cp.exec("open https://www.linkedin.com/in/thalladasaikumar");

cp.exec("ls", (err, data) => {
  if (err) {
    throw err;
  }
  console.log(data);
});

/*############ ESLint and prettier for code formatting in VSCode and auto save ###############*/
// Watch he below video gives you better idea
// https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/setting-up-eslint-and-prettier?autoplay=true&pathUrn=urn%3Ali%3AlyndaLearningPath%3A5b32b6d5498e4ef39c04c55c

/*############ Working with file's ###############*/
const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

/*############ Template variables available for global ###############*/
// Type-1 using middleware
app.use((req, res, next) => {
  res.locals.someVariable = "hello";
  return next();
});

// Type-2
app.locals.siteName = "Some website name";

/*############ Errors handling ###############*/
// Throwing error,
// don't throw error in async block this might take the whole website down, for solution find below
app.get("/thow", (req, res) => {
  throw new Error("Something went wrong!!!");
});

// Throwing error in Async block example
app.get("/thow", (req, res, next) => {
  setTimeout(() => {
    return next(new Error("Something went wrong!!!"));
  }, 500);
});

// try catch
try {
  // set of operations
} catch (err) {
  // set of operations
}

// Creating a error page:
// https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-an-error-page?autoplay=true&pathUrn=urn%3Ali%3AlyndaLearningPath%3A5b32b6d5498e4ef39c04c55c
