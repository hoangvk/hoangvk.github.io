import '../css/Bookshelf.css';
import React, { useState, useEffect } from 'react';

function App() {
  // Load initial state from local storage or use empty arrays
  const [readBooks, setReadBooks] = useState(() => JSON.parse(localStorage.getItem('readBooks')) || ["Atomic Habits"]);
  const [recommendedBook, setRecommendedBook] = useState('');
  const [formRecommendedBooks, setFormRecommendedBooks] = useState(() => JSON.parse(localStorage.getItem('formRecommendedBooks')) || []);

  // Update local storage whenever state changes
  useEffect(() => {
    localStorage.setItem('readBooks', JSON.stringify(readBooks));
    localStorage.setItem('formRecommendedBooks', JSON.stringify(formRecommendedBooks));
  }, [readBooks, formRecommendedBooks]);

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Update the list of books to read with the recommended book
    if (recommendedBook.trim() !== '') {
      setFormRecommendedBooks([...formRecommendedBooks, recommendedBook]);
      // Clear the input field after submission
      setRecommendedBook('');
    }
  };

  // Function to handle marking a book as read and removing it from the recommended list
  const handleMarkAsRead = (book) => {
    setFormRecommendedBooks(formRecommendedBooks.filter((item) => item !== book));
    setReadBooks([...readBooks, book]);
  };

  // Function to handle deleting a book from the read books list
  const handleDeleteBook = (book) => {
    setReadBooks(readBooks.filter((item) => item !== book));
  };

  const [isBouncing, setIsBouncing] = useState(false);

  const handleEmojiClick = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 1000); // Stop bouncing after 1 second
    if (recommendedBook.trim() !== '') {
      setFormRecommendedBooks([...formRecommendedBooks, recommendedBook]);
      setRecommendedBook('');
    };
  }

  return (
    <div class="bookshelf">
      <form onSubmit={handleSubmit} class='recommended-form'>
          <input
            placeholder="✏️"
            type="text"
            class="form__input"
            pattern=".{1,}" required
            value={recommendedBook}
            onChange={(event) => setRecommendedBook(event.target.value)}
          /><span class={`bookshelf-icon ${isBouncing ? 'bouncing' : ''}`} onClick={handleEmojiClick}></span>
      </form>
      <p style={{fontStyle:'italic',fontSize:'17px'}}>(Type something and click '😃' to enter) </p>
      <div class='booklist-container'>
        {/* Column 1: List of books I have read */}
        <div className="column">
          <h1 class='subtitle'>Recently Finished</h1>
          <ul class="scrollable-list">
            {readBooks.map((book, index) => (
              <li key={index}>
                <button class="no" onClick={() => handleDeleteBook(book)}>❌</button> {book}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 2: List of books recommended from the form */}
        <div className="column">
          <h1 class='subtitle'>Recommended</h1>
          <ul class="scrollable-list">
            {formRecommendedBooks.map((book, index) => (
              <li key={index}>
                <button class="yes" onClick={() => handleMarkAsRead(book, "formRecommendedBooks")}>✔</button> {book}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
