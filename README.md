### Ecommerce Applications

## Milestone 1: Project Overview

1. User Authentication: The user can register or login.
2. Product Management: Can add, update or delete and also retrieve data about the products.
3. Orders page: This page shows the orders by the user.
4. Payment Gateway: This shows the payment to be done by the user.


## Milestone 2: Project Overview

**Frontend**
1. React: A javaScript library for building user interfaces, this was set up using the code (npm create vite@latest frontend).
2. Tailwind CSS: This was set up to make designs quickly and efficiently.

**Backend**
1. Express: This is a web framework for Node.js, this was set up using the code (npm install express).
2. Mongoose: This is mainly used to config the database with the backend, this was set up using the code (npm install mongoose).
3. Cors: This allows the web applications to access resources from different domains, this was set up using the code (npm install cors).
4. Nodemon: It helps in monitoring and a very faster development of Node.js, this was set up using the code(npm install nodemon).


## Milestone 3: Project Overview

 1. Set up specified folders which is used for the backend.
 2. Initialized and configured the Node.js server
 3. Connected to the MongoDB
 4. Provided clear error messages for debugging.


## Milestone 4: Project Overview

1. Created a user model which is like a blueprint to how the user's data will be stored in the database.
2. Created a user control which helps you manage whatever changes happens in your user data.
3. Enabled and configured multer which allows the app to accept the files which are uploaded by the user.

## Milestone 5: Project Overview

1. Created a sign up page where the user can enter their details i.e. to create a account this includes name, email, password.
2. Created a form validation which checks the entered information is correct and also in the right format, this basically prevents errors and ensures backend recieves clean and right data.

## Milestone 7: Project Overview

1. Encrypting of the password is done using bcrypt.
2. Bcrypt is basically used to hash the password entered by the user to ensure safety.
3. Created a login page which accepts user credentials such as username and password.
4. Using the credentials we fetch the user from the database.
5. Validation of password: This is done to compare the password entered by the user to the password which is stored in hash.
6. If the password matches we proceed with authentication if it is not authenticated we have to send an error to the user 

## Milestone 8: Project Overview

1. Created the Card Component: Designed a reusable card components , the card shows the details of the product such as name, image and price.
2. Designed the Homepage Layout: We created a flexbox or a grid layout which can be used to display many cards neatly.

## Milestone 9: Project Overview

1. Created a product input form.
2. This form allows users to add detailed information about new products that will be displayed on the product homepage.
3. Key Features:

    i)	Product Details Input:
	•	Users can provide essential details such as the product name, description, category, price, and stock quantity.
	ii)	Multiple Image Upload:
	•	The form supports uploading multiple images for a single product, enabling a comprehensive visual representation.

## Milestone 10: Project Overview

1.	Product Schema: Defines the structure of product data with validation.
2.	POST Endpoint: Allows for adding products with validation.
3.	Data Integrity: Ensures only valid data is saved.
4.	Future Enhancements: Features like admin access and shop profiles can be added.

## Milestone 11: Project Overview

1.	Wrote an endpoint that retrieves all products stored in MongoDB and sends it as a response.
2.	Receive the data on the frontend and display it dynamically.
3.	Pass the data to the ProductCard component to render each product dynamically.

## Milestone 12: Project Overview

1.	Wrote an endpoint that retrieved products from MongoDB, filtering them by the user’s email address.
2.	Fetched and received data on the frontend via an API call.
3.	Dynamically displayed the data on the frontend by passing it to the product card component we created earlier.

## Milestone 13: Project Overview

Backend Update
	1.	PUT Route for Updating Data:
	•	A PUT route was added to the backend API.
	•	This route allows updating the details of an existing product in the database.

Frontend Updates:
	2.	Button Added to Each Product Card:
	•	A button was added to each product card on the user interface.
	•	This button is used to open a form where the user can input new data for the product.

	3.	Form for Inputting New Data:
	•	When the button is clicked, a form pops up.
	•	The form allows the user to enter updated information for that specific product.
	
	4.	Data Submission to Backend:
	•	Once the form is submitted, the updated data is sent to the backend via the PUT route.
	•	The backend processes this request and updates the product’s data in the database.