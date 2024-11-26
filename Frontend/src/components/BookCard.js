// src/components/BookCard.js
import React from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

// Styles for the Book Card component
const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing(2),
    width: '100%',
    maxWidth: '800px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#ffffff',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.03)',
    },
  },
  cardImage: {
    width: 120,
    height: 180,
    objectFit: 'cover',
    borderRadius: '8px',
    marginRight: theme.spacing(2),
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
  bookTitle: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    marginBottom: theme.spacing(1),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  bookAuthor: {
    color: '#777',
    marginBottom: theme.spacing(1),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  bookDescription: {
    fontSize: '0.9rem',
    color: '#555',
    marginBottom: theme.spacing(1),
    height: '50px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  moreInfoButton: {
    marginTop: theme.spacing(2),
  },
}));

const BookCard = ({ book }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <img
        src={book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/120x180'}
        alt={book.volumeInfo.title}
        className={classes.cardImage}
      />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.bookTitle}>
          {book.volumeInfo.title}
        </Typography>
        <Typography className={classes.bookAuthor}>
          {book.volumeInfo.authors?.join(', ') || 'Unknown Author'}
        </Typography>
        <Typography className={classes.bookDescription}>
          {book.volumeInfo.description || 'No description available.'}
        </Typography>
        <Box mt={2}>
          <Button
            variant="outlined"
            color="primary"
            href={book.volumeInfo.infoLink}
            target="_blank"
            fullWidth
            className={classes.moreInfoButton}
          >
            More Info
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default BookCard;
