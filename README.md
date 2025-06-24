# CS-465 Full Stack Development with MEAN

## Architecture
This project utilized two different styles of front-end development:
* **Express HTML & JavaScript**: The original server-rendered pages used Handlebars (HBS) as a templating engine within the Express.js app. This allowed for dynamic HTML generation on the server based on data from MongoDB. It's useful for simple, multi-page websites with traditional navigation.
* **Angular Single Page Application (SPA)**: For the admin site, a modern Angular SPA was implemented. Angular offers dynamic routing, reusable components, two-way data binding, and seamless client-side state management. This architecture is faster and more responsive from a user experience perspective.
<br>
The backend used a NoSQL MongoDB database for flexibility and scalablity. MongoDB allows for dynamic schemas, which is ideal for representing complex and varied travel datalike trips, rooms, and user accounts. Its integration with Mongoose also made modeling and querying data intuitive on the server side.

 ## Functionality
**JSON (JavaScript Object Notation)** is a lightweight data format that is distinct from JavaScript but inspired by its syntax. It is used for serializing structured data and is essential in transmitting information between the frontend and backend. JSON serves as the common language of data transfer in RESTful APIs, allowing Angular to send and receive structured data to and from Express and MongoDB.
<br>
 Several instances of code refactoring occurred throughout this project:
 * Refactoring the login flow to remove the unused `name` field made authentication cleaner.
 * Restructuring the `TripData` service in Angular to encapsulate API calls allowed for greater reusability and maintainability.
 * Creating reusable components like `TripCard` and `TripListing` made the UI modular and scalable.
<br>
These changes improved efficiency, reduced duplication, and allowed for consistent UI behavior across components.

## Testing
API testing included verifying all `GET`, `POST`, `PUT`, and `DELETE` routes via tools like Postman and through Angular's network tab. Secure endpoints required attaching a JWT token in the `Authorization` header, which added complexity but ensured the system was protected.
<br>
For example:
* Testing `GET /api/trips` confirmed public data could be accessed without a token.
* Testing `POST /api/trips` validated that only authorized users (admins with valid JWTs) could create or modify data.
* Testing login and logout behavior ensured token creation and invalidation worked correctly across sessions.
<br>
Security layers make automated testign harder because test scripts must simulate login and manage token storage/reuse. Still, testing APIs is essential to confirm access control is enforced correctly.

## Reflection
This course significantly helped me grow both technically and professionally. I now have experience developing a complete full stack web application from the ground up, using tools that are in high demand (MongoDB, Express, Angular, Node.js). I learned how to structure scalable frontend and backend code, connect and manage NoSQL databases, build and test RESTful APIs, Implement secure authentication using JWTs, and create modular and reusable UI components in Angular. These skills have given me the confidence to pursue web development roles. I have a better understanding of the full lifecycle of a professional-grade web app and am better prepared for real-world software development environments.
