// PART 1 (LINE 1) - This Imports the http module. This comes with node.js by default so 
// it isn't something that you have to install. It is used to create a server. Express 
// and every other node framework uses this module under the hood to create a server.

// PART 2 (LINE 4) - The http object has a method called createServer, this creates a 
// server and takes a callback function as an argument. Your able to pass a function in 
// here that takes in a request (req) and response (res) object. Whenever we make a 
// request to our server, we have access to the request and response objects. This allows 
// us to get some data like the method and the url and stuff like that from the request 
// object and we can respond with certain headers or whatever we want to put in the body 
// with the response object.

// PART 3 (LINE 11) - The server object has a method called listen, this takes in a port 
// number. What you can do is create a variable called PORT and you're also going to want 
// to check if there's an environment variable and you can do this by setting the PORT 
// variable to equal process.env.PORT or 5000. 

// This is because when you deploy your application to a service like Heroku, they will 
// set the port for you and you can access it through process.env.PORT. If you are running 
// your application locally, it will default to 5000. 
                                                                             
// PART 4 (LINE 13) - In the server.listen() method you'll pass in the PORT variable and 
// you can also pass in an Arrow function that will run when the serverstarts with 
// npm run dev. This will log a message to the console  saying "Server running on port 5000" 
// or whatever port you are using.

// PART 5 (LINE 5) - The server is now running and listening for requests. You can now make 
// requests. To show a generic response here, you can send an html page by using a status 
// code. You can do this by setting res.statusCode to whatever you want but 200 means that 
// everything is okay (successful).  

// Status Codes:

// The 200 status code indicates that the request was successful. It is commonly used for 
// successful GET requests where the server returns the requested data.

// The 201 status code means that something was created successfully. It is commonly used for 
// successful POST requests where the server creates a new resource and returns a confirmation 
// that the resource has been created.

// The 300 range is for redirects.

// The 400 range is for client errors like 400 is a bad request and 404 is not found.

// The 500 range is for server errors like 500 is an internal server error.

// PART 6 (LINE 6) - Left off notes at 6:05



//    res.statusCode = 200
//    res.setHeader("Content-Type", "text/html")
//    res.write("<h1>Hello World</h1>")
//    res.end()

