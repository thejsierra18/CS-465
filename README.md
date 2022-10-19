# CS-465

### Architecture

- *Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).*

For the Travlr Web App we were able two implement two different approaches, both with MVC as its core. The SPA approach used Angular to create the
frontend, and as such, it made use of components, which could be inserted as HTML elements and reused as needed. On the second approach, we used handlebars,
which provided a reusable webpage template.

- *Why did the backend use a NoSQL MongoDB database?*

The backend used a NoSQL MongoDB database because it provides more flexibility to work with the data. An application of this type would certainly add new
features, functions and data types in the future, and NoSQL would made those additions easier.

### Functionality

- *How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?*

JSON (JavaScript Object Notation) is a file and data format, whereas Javascript is a programming language. On this project we made use of JSON to pass
objects from the backend to the frontend, for example, a list of available trips, and viceversa, when sending requests that contained data structured as
JSON.

- *Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.*

The code was refactored in several occasions, with one of the first being the change from a static website to the use of handlebars. This process improved
the functionality and efficiency as I was able to quickly add more elements to the webpage, while improving readability and being able to dynamically render
elements.

### Testing

- *Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.*

To test the API, we had two options, either run both the front-end and the back end locally or use Postman. With both options, we sent the requests and
verified that we were getting the expected results. In this case we had three operations: GET, PUT, and POST, with the last two protected by a security
layer. The user was able to access the existing trips without login in, but in order to add new trips or edit the existing one, authentication was needed.

### Reflection

- *How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?*

This course has given us a chance to put together everything we have learned so far, integrating it all in one application. This project completely aligns
with my career goals as I intend to become a Full-Stack Engineer in the future. One of the skills that I have been able to master and that we had not use 
in the classroom was source control, which is a must-have in our field.
