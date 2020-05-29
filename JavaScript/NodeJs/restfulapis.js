/*############ REST APIs ###############*/
/* RESTful : Using HTTP protocols to do transactions with a back end
CRUD -> Create, Update, Delete
 Verb   |      Summary
--------|------------------
.get    | Request a resource
.post   | Create a resource
.put    | Update a resource
.delete | Delete a resource


REST APIs with Hapi : Hapi is an open-source and rich Node. js framework created and actively maintained by Eran Hammer. Hapi is a rich framework for building applications and services. It enables developers to focus on writing reusable application logic instead of spending time building infrastructure
guide to Hapi: https://hapi.dev/tutorials/gettingstarted/?lang=en_US

*/

// Sample code for app.js
import express from "express";
import routes from "routes";

const app = express();
routes(app);
//----------- End of app.js

//Sample code for routes.js
const routes = (app) => {
  app
    .route("/path")
    .get((req, res) => {
      res.send("GET request for 'path'");
    })

    .post((req, res) => {
      res.send("POST request for 'path'");
    })

    .put((req, res) => {
      res.send("PUT request for 'path'");
    });

  app.route("path/:id").delete((req, res) => {
    res.send("DELETE request for 'id'");
  });
};

export default routes;
//---------- End of routes

/* Other potential libraries for APIs
    1. KoaJs -> https://koajs.com/
    2. Swagger -> https://swagger.io/
    3. Loopback -> https://loopback.io/  (High preference :P)
*/

/* Security features for APIs
  Adding an authorization token for login purpose
    1. JWT -> https://jwt.io/ (Good for api data security)
*/

// ####### Top Five Security Threats ##################
/** more on : https://owasp.org/www-project-top-ten/
 * 1. Injection attacks
 * 2. Broken authentication
 * 3. Sensitive data exposure
 * 4. XML entities
 * 5. Broken access control
 */
