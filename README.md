# Project 1

Course name: Web Programming with Python and JavaScript <br>
Course no: CS50W <br> 
Note: I made this project to accomplish project1 portion of HarvardX CS50W course <br>

# Live preview link <a href = 'http://ram-bookpanda.herokuapp.com/' > http://ram-bookpanda.herokuapp.com/ </a>
Youtube: <a href = 'https://youtu.be/UmfyOvQLdf4'> https://youtu.be/UmfyOvQLdf4 </a>

App name: Book panda
Breif description: This is a simple book review app made with flask. To use this website features you have to login first. Anyone can register in this website. After registration and logged into the website people can search for books, view reviews on particular book and can submit his own review.

Technology used:
HTML, CSS, JAVASCRIPT, BOOTSTRAP, PYTHON, FLASK, SQLALCHEMY, POSTGRESQL
Images used:
unsplash.com (Thank you for free images)
Book API used:
goodreads.com (Thank you for free api)
Server used:
heroku.com (Thank you for free web service)

# How to use this app:

    1. Clone this repositiory  or Download Source files
    2. Run ```pip install -r requirements.txt``` in your terminal/CMD window to make sure that all of the necessary Python packages (Flask and SQLAlchemy, for instance) are installed.
    3. Set an environmental variable to connect with database.
        Varialbe name must be: "DATABASE_URL"
        Varialbe value will be: "...your database uri ..."
    4. Run ```python imports.py``` to create user,books and reveiws table in database and to insert 5000 books data from books.csv
    5. Run ```python application.py``` to run the app
    6. Done

# Features:

**Login:** If user go to root url first it will check if the user is already signed in or not using the session. If not then app will show the login page otherwise app will take the user to the account page without asking him to login everytime. When login page apprears and user input his email and password - app will compare the informations with informations that are already saved in database. If the username and password match then user wiil be logged in and  allowed to go to account page otherwise error message will show.

**Registration:** New user can register on the website. Before registration app will check if there is already any account registered with the same email. If no account found than app will register the account in the website.

**Logout:** Users can log out from the website by clicking on the logout button.

**Admin page:** To view the admin page user must log in first. In the admin page users can see his account information and reviewed books list with a search box.

**Search:** By clicking the search menu  button Users can search books by Title or Author or Year or ISBN number. If user submit the keyword in the search bar a search result table will appear with book list with that information.

**Book page:** By clicking a book title from  the search result users can view information about that book. Statical information will come from goodread.com api and reviews data will come from my website database.

**Api:** http://ram-bookpanda.herokuapp.com/book/api/ISBN  Replace the ISBN with the real book's isbn number to get a book information in json format . User must be logged in use API endpoint
