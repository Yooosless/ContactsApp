# ContactsApp
##A Curd Application with Authentication for every curd entry point

A nodeJS project with Curd functionality and uses mongodb for storing data.

Two models/dataSchemas with two controllers to each.
* ```userModel/userController```
  - **userModel** to create the respective fields,
  - **userController** to create functionality methods.
* ```contactModel/contactController ```
  - **contactModel** to create the respective fields,
  - **contactController** to create functionality methods.

Routing to add controller methods to both of our controller to the respective routes
**userRoutes** list
register user-   POST http://localhost:8080/user/register
login user- POST http://localhost:8080/user/login
current user- GET http://localhost:8080/user/current

**contactRoutes** list
get contacts- GET http://localhost:8080/contacts
get contact-  GET http://localhost:8080/contacts/:id
create contact- POST http://localhost:8080/contacts
update contact- PUT http://localhost:8080/contacts/:id
delete contact- DELETE http://localhost:8080/contacts/id

Authentication is only applied to contactRoutes and login current route using jsonwebtoken
what should be added in dotenv file-
connection string- inorder to connect to the database(which is mongo db in our case)
access token secret- used to encode and decode jwt
make sure to install all the neccessary modules.
