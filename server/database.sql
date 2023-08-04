CREATE DATABASE BookClub;

CREATE TABLE books(
    book_id SERIAL PRIMARY KEY,
    book_isbn VARCHAR(40),
    book_title VARCHAR (100),
    book_author VARCHAR(100),
    book_genre VARCHAR(40),
    book_synopsis VARCHAR(1000),
    page_count VARCHAR(10),
    book_year VARCHAR(6),
    host_name VARCHAR(40),
    host_notes VARCHAR(5000),
    book_topic VARCHAR(1000),
    book_status VARCHAR(1000)
    
       
);