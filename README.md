# Book Buddy 

Built BookBuddy, an online library for the public, using React and various web development technologies. The project integrates with a pre-built API to manage books in the library. The app allows authorized and unauthorized users to view a list of books, see details for individual books, and perform actions like adding, editing, and deleting books.

# Tools and Technologies Used
React: For building the user interface with components, props, state management, and effects.
JavaScript: For handling logic, control structures, functions, and data types.
HTML & CSS: For structuring content and styling, including Flexbox and Grid for layout.
API: Interacted with the BookBuddy API using HTTP methods (GET, POST, PATCH, DELETE).
React Router: For handling routing within the application.

# Key Functionalities
User Authentication:
- Authorized users can add, edit, and delete books.
- Unauthorized users can view the list of books and book details.
View Books:
- List all books in the library.
- View details of individual books.
Manage Books:
- Add new books to the library.
- Edit existing book details.
- Delete books from the library.

# Implementation Details
React Components
- Component-Based Structure: Built reusable components such as BookList, BookDetail, AddBookForm, EditBookForm, and Authentication.
- Props and State: Used props to pass data between components and state to manage dynamic data.
- Event Listeners: Implemented event listeners to handle user actions like form submissions and button clicks.
- React Router: Managed application routes for navigating between different views.
JavaScript Practices
- Variable Declarations: Used let, const, and var appropriately.
- Loops and Control Structures: Implemented loops (e.g., for, map) and control structures (e.g., if, switch) to handle data processing and logic.
- Functions: Declared and invoked functions for API calls and data manipulation.
- Data Types: Worked with various data types (e.g., arrays, objects, strings).
Layout and UX
- Flexbox and Grid: Utilized Flexbox and Grid for responsive and intuitive layouts.
- Clean Interface: Designed a user-friendly interface with clear navigation and accessibility considerations.

# Example Workflow
User Authentication: Users log in to access additional functionalities.
Viewing Books: Upon loading, React fetches and displays the list of books from the API.
Viewing Book Details: Clicking on a book displays its detailed information.
Adding a Book: Authorized users fill out a form to add a new book, which sends a POST request to the API.
Editing a Book: Authorized users can edit a book's details via a form, sending a PATCH request to the API.
Deleting a Book: Authorized users can delete a book, sending a DELETE request to the API.

# Integration Workflow
Component Development: Built React components for different parts of the application.
API Integration: Used HTTP methods to interact with the BookBuddy API for CRUD operations.
Routing: Implemented navigation using React Router.
State Management: Managed application state to reflect changes dynamically.
Styling: Applied CSS Flexbox and Grid to create a responsive layout.

By integrating these tools and methodologies, I developed BookBuddy as a functional and user-friendly online library, providing a seamless experience for both authorized and unauthorized users.






