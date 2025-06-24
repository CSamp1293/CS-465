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
 * Refactoring the login flow to remove the unused ==name== field made authentication cleaner.
 * Restructuring the ==TripData== service in Angular to encapsulate API calls allowed for greater reusability and maintainability.
 * Creating reusable components like ==TripCard== and ==TripListing== made the UI modular and scalable.
<br>
These changes improved efficiency, reduced duplication, and allowed for consistent UI behavior across components.
