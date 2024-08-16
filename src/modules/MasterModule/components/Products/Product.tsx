import React, { useState, useEffect } from 'react';
import { Container, Grid, Pagination, Box, Typography, Select, MenuItem } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Sidebar from './Sidebar';
import ProductCard from './ProductCard';
import theme from './theme';
import { apiProtected } from '../../../SharedModule/axiosInstance';

const Product: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await apiProtected.get(`/book?page=${page}&limit=${itemsPerPage}&search=${encodeURIComponent(searchQuery)}`);
        setProducts(response.data.data);
        setTotalPages(Math.ceil(response.data.total / itemsPerPage));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    // Fetch products when searchQuery or pagination changes
    fetchProducts();
  }, [page, itemsPerPage, searchQuery]);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query); // Update searchQuery state based on Sidebar input
    setPage(1); // Reset page to 1 when performing a new search
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Sidebar onSearch={handleSearch} />
            </Grid>
            <Grid item xs={9}>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                <Typography variant="body2" color="textSecondary">
                  Sort by: Alphabetically, A-Z
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Showing 1-{itemsPerPage} of {totalPages * itemsPerPage} results
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Show:
                  <Select
                    value={itemsPerPage}
                    onChange={(event) => setItemsPerPage(Number(event.target.value))}
                    style={{ marginLeft: '8px' }}
                  >
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </Typography>
                <Box>
                  <button>🔲</button>
                  <button>🔳</button>
                </Box>
              </Box>
              <Grid container spacing={2}>
                {products.map((product: any, index: number) => (
                  <Grid item xs={4} key={index}>
                    <ProductCard id={product._id} title={product.name} author={product.author} price={product.price} img={product.img} />
                  </Grid>
                ))}
              </Grid>
              <Box display="flex" justifyContent="center" mt={2}>
                <Pagination count={totalPages} page={page} onChange={handlePageChange} color="primary" variant="outlined" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Product;
