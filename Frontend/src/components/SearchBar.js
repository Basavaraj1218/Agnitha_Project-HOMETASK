// src/components/SearchBar.js
import React from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Styles for the SearchBar component
const useStyles = makeStyles((theme) => ({
  searchBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: 500,
    textAlign: 'center',
    marginBottom: theme.spacing(4),
  },
}));

const SearchBar = ({ query, setQuery, fetchBooks }) => {
  const classes = useStyles();

  return (
    <div className={classes.searchBox}>
      <Typography variant="h3" gutterBottom>
        Book Finder
      </Typography>
      <TextField
        label="Search for books"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={fetchBooks}
        style={{ marginTop: '16px' }}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
