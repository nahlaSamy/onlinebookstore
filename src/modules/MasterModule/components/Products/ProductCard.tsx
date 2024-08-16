import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { ThemeProvider, useTheme } from '@mui/material/styles';
import theme from './theme';
import bookPic from '../../../../assets/images/book16.png';
import bookPic1 from '../../../../assets/images/Book17.png';

import {
  cardStyles,
  mediaBoxStyles,
  mediaStyles,
  hoverButtonStyles,
  cardContentStyles,
  titleStyles,
  authorStyles,
  priceStyles
} from './Styles';
import Footer from '../../../SharedModule/components/Footer/Footer';
import { useDispatch } from 'react-redux';
import { incrementCart } from '../../../Redux/CartSlice';
import { apiProtected } from '../../../SharedModule/axiosInstance';

interface ProductCardProps {
  title: string;
  author: string;
  price: number;
  img: string;
  id: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, author, price, img, id }) => {
  const [hover, setHover] = useState(false);
  const currentTheme = useTheme();
  const dispatch = useDispatch();

  const addToCart = async (id: string, quantity: number) => {
    dispatch(incrementCart({ book: id, quantity: quantity }));
    try {
      const response = await apiProtected.post('/basket/item', {
        book: id,
        quantity: quantity
      });
      console.log("🚀 ~ addToCart ~ response:", response);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Card
        sx={cardStyles}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Box sx={mediaBoxStyles}>
          <CardMedia
            component="img"
            height="300"
            image={bookPic1}
            alt={title}
            sx={mediaStyles}
          />
          <Button
            className="hoverButton"
            sx={hoverButtonStyles(hover)}
            onClick={() => addToCart(id, 1)}
          >
            ADD TO CART
          </Button>
        </Box>
        <CardContent sx={cardContentStyles}>
          <Typography variant="h6" sx={titleStyles(currentTheme)}>{title}</Typography>
          <Typography variant="subtitle2" sx={authorStyles(currentTheme)}>{author}</Typography>
          <Typography variant="h6" sx={priceStyles(currentTheme)}>${price.toFixed(2)}</Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
};

export default ProductCard;
