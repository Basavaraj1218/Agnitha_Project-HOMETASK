// src/BookFinderUI.js
import React, { useState } from 'react';
import axios from 'axios';
import { CircularProgress, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import BookCard from './components/BookCard'; // Import BookCard component
import SearchBar from './components/SearchBar'; // Import SearchBar component

// Custom styles for BookFinderUI component
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f4f6f8',
    padding: theme.spacing(3),
  },
  resultsContainer: {
    width: '100%',
    height: 'calc(100vh - 200px)',
    overflowY: 'auto',
    padding: theme.spacing(2),
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
  },
}));

const BookFinderUI = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchBooks = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:5000/api/books?query=${query}`);
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books', error);
    }
    setLoading(false);
  };

  return (
    <div className={classes.root}>
      {/* Search bar */}
      <SearchBar query={query} setQuery={setQuery} fetchBooks={fetchBooks} />

      {/* Display loading indicator */}
      {loading ? (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.resultsContainer}>
          <Grid container spacing={3} justifyContent="center">
            {books.length > 0 ? (
              books.map((book, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <BookCard book={book} /> {/* Render each BookCard */}
                </Grid>
              ))
            ) : (
              <Typography variant="h6" color="textSecondary" gutterBottom>
                <p>“Words can be like X-rays if you use them properly – they’ll go through anything. You read and you’re pierced.”</p>
                <p>–Aldous Huxley, Brave New World</p>
              </Typography>
            )}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default BookFinderUI;
