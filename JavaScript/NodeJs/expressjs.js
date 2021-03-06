//------------------------------ Express -----------https://expressjs.com/------------------
/* Creating a express nodeJs template application using "express-generator" package: https://expressjs.com/en/starter/generator.html
  npm install express-generator -g -> to install express generator.
  express -h -> quick look on different ways to create a project using any engine support

  express --view ejs -> create a boiler plate for ejs nodeJs project structure 
*/

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

// ################## Parameters ######################
app.get("/path/:id", (req, res) => {
  console.log(req.params.id);
});

app.get("/path/:category/:id", (req, res) => {
  console.log(req.params.id);
});

// ########### Route handlers using middlewares ########
app.get(
  "/path/:id",
  (req, res, next) => {
    console.log(req.params.id);
    next();
  },
  (req, res) => {
    console.log("other handling!");
  }
);
// we can try multiple routes

// ############## Routing: Chaning ###################
app
  .route("/path")
  .get((req, res) => {
    console.log("GET Method");
  })
  .put((req, res) => {
    console.log("PUT Method");
  })
  .delete((req, res) => {
    console.log("DELETE Method");
  });

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

// Error handling using middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send(`Alert!!! ${err.stack}`);
});

// ############## DEBUG in ExpressJs #################
/* debug using command:
 * DEBUG=express:* nodemon app.js
 * set DEBUG=express:* & nodemon app.js -> for windows package.json script
 */

// Using express behind a proxy: http://expressjs.com/en/guide/behind-proxies.html
/* ### Express security overview ##########
  1. Always keep upto date and secured dependencies
  2. Use TLS for sensitive data
  3. Use Helmet's collection of security middelware
  4. Use cookies securely
 */

// ########### Real Time applications examples #################
// 1. socket.io : for real time chatbox | https://socket.io/

// --------------------- End of Express ----------------------------------------

// Creating a error page:
// https://www.linkedin.com/learning/building-a-website-with-node-js-and-express-js-3/creating-an-error-page?autoplay=true&pathUrn=urn%3Ali%3AlyndaLearningPath%3A5b32b6d5498e4ef39c04c55c

// Babel: To compile the latest JavaScript version for the browser to read it.
// scripts - start : nodemon app.js --exec babel-node -e js
