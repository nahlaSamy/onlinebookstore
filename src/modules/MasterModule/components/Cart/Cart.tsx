import React, { useEffect, useState } from 'react';
import { Container, Grid, Box, TextField, Typography, Button, IconButton, Card, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { apiProtected } from '../../../SharedModule/axiosInstance';

const ContainerStyled = styled(Container)(({ theme }) => ({
  backgroundColor: '#fff5f5',
  padding: '20px',
  borderRadius: '10px',
}));

const BoxStyled = styled(Box)(({ theme }) => ({
  padding: '20px',
  border: '1px solid #e0e0e0',
  borderRadius: '10px',
  marginBottom: '20px',
}));

const CartTotalStyled = styled(BoxStyled)(({ theme }) => ({
  textAlign: 'right',
}));

const ProceedButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: '#f4511e',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#e64a19',
  },
}));

interface CartItem {
  bookId: string;
  quantity: number;
  _id: string;
}

interface Book {
  cover: string;
  title: string;
  price: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [bookDetails, setBookDetails] = useState<{ [key: string]: Book }>({});

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await apiProtected.get('/basket');
        const result = response.data.items;
        if (Array.isArray(result)) {
          setCartItems(result);
        } else {
          console.error('Data is not an array:', result.data);
        }
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchCartItems();
  }, []);

  useEffect(() => {
    const fetchBookDetails = async () => {
      const bookIds = cartItems.map(item => item.book);
      const bookDetailsPromises = bookIds.map(id => apiProtected.get(`/book/${id}`));
      try {
        const responses = await Promise.all(bookDetailsPromises);
        console.log("🚀 ~ fetchBookDetails ~ responses:", responses)
        const books = responses.map(response => response.data);
        console.log("🚀 ~ fetchBookDetails ~ books:", books)
        const booksMap = books.reduce((acc, book) => {
          acc[book._id] = book;
          return acc;
        }, {} as { [key: string]: Book });
        setBookDetails(booksMap);
      } catch (error) {
        console.error('There was a problem fetching book details:', error);
      }
    };

    if (cartItems.length > 0) {
      fetchBookDetails();
    }
  }, [cartItems]);

  const handleDelete = async (id: string) => {
    // Handle item deletion logic here
    console.log('Delete item with id:', id);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const book = bookDetails[item.book];
      return book ? total + book.price * item.quantity : total;
    }, 0);
  };

  return (
    <ContainerStyled maxWidth="md">
      <BoxStyled>
        <Typography variant="h6" gutterBottom>
          Products Details
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={1}>
            <Typography variant="body1">Num</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="body1">Book</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1">Amount</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1">Cost</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1">Subtotal</Typography>
          </Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        {cartItems.map((item, index) => {
          const book = bookDetails[item.book];
          return book ? (
            <Card key={item._id} sx={{ marginBottom: '20px', display: 'flex' }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={book.cover || 'https://via.placeholder.com/50'}
                alt={book.title}
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs={1}>
                      <Typography variant="body1">{index + 1}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="body1">{book.name}</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <TextField type="number" value={item.quantity} variant="outlined" size="small" />
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="body1">{book.price} AED</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <Typography variant="body1">{(book.price * item.quantity).toFixed(2)} AED</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <IconButton onClick={() => handleDelete(item._id)}>
                        <DeleteIcon />
                      </IconButton>
                    </Grid>
                  </Grid>
                </CardContent>
              </Box>
            </Card>
          ) : null;
        })}
      </BoxStyled>

      <CartTotalStyled>
        <Typography variant="h6" gutterBottom>
          Cart Total Cost
        </Typography>
        <Typography variant="body1">Total: {calculateTotal().toFixed(2)} AED</Typography>
        <Typography variant="body1">Tax: {(calculateTotal() * 0.05).toFixed(2)} AED</Typography>
        <Typography variant="body1">Total Cost: {(calculateTotal() * 1.05).toFixed(2)} AED</Typography>
      </CartTotalStyled>

      <Box textAlign="center">
        <ProceedButtonStyled startIcon={<ShoppingCartIcon />}>
          Proceed
        </ProceedButtonStyled>
      </Box>

      <BoxStyled>
        <Typography variant="h6" gutterBottom>
          Shipping Data
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField label="User Name" defaultValue="john" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="E-mail" defaultValue="john@mail.com" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Country" defaultValue="Egypt" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="City" defaultValue="Maddi" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Address" defaultValue="211, street" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12}>
            <TextField label="Phone Number" defaultValue="0117645366252" variant="outlined" fullWidth />
          </Grid>
        </Grid>
      </BoxStyled>
    </ContainerStyled>
  );
};

export default Cart;
