CREATE DATABASE bookClub;

CREATE TABLE books(
    book_id SERIAL PRIMARY KEY,
    book_isbn VARCHAR(40),
    book_title VARCHAR (100),
    book_author VARCHAR(100),
    book_synopsis VARCHAR(1000),
    page_count VARCHAR(10),
    book_year VARCHAR(6),
    host_name VARCHAR(40),
    additional_reading VARCHAR(5000),
    discussion_topic VARCHAR(1000),
    book_status VARCHAR(1000),
    read_date VARCHAR,
    book_image VARBINARY(MAX),
    purchasing VARCHAR(160),
    deadline VARCHAR(15),
    quote VARCHAR(280),
    marquee VARCHAR(280),
    downloading VARCHAR(160),
    
       
);

CREATE TABLE members (
    user_name VARCHAR(255),
    email VARCHAR(255) PRIMARY KEY,
    hashed_password VARCHAR(255)
);