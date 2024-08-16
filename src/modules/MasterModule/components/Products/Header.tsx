// import React from 'react';
// import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import FavoriteIcon from '@mui/icons-material/Favorite';

// const Header: React.FC = () => {
//   return (
//     <AppBar position="static" color="secondary" sx={{ boxShadow: 'none', borderBottom: '1px solid #ccc' }}>
//       <Toolbar sx={{ justifyContent: 'space-between' }}>
//         <Box display="flex" alignItems="center">
//           <IconButton edge="start" color="inherit" aria-label="menu">
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" color="primary" sx={{ marginLeft: 2 }}>
//             Home / Products
//           </Typography>
//         </Box>
//         <Box display="flex" alignItems="center">
//           <IconButton color="primary">
//             <AccountCircleIcon />
//           </IconButton>
//           <IconButton color="primary">
//             <ShoppingCartIcon />
//           </IconButton>
//           <IconButton color="primary">
//             <FavoriteIcon />
//           </IconButton>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;
// Header.tsx
// Header.tsx
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';
import {
  headerContainerStyles,
  breadcrumbStyles,
  linkStyles,
  textStyles
} from './headerStyles';

function Header() {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');

    if (href === '/home') {
      // Handle click on Home link
      console.log('Clicked on Home');
      window.location.href = '/dashboard/home'; // Redirect to the home page
    } else if (href === '/products') {
      // Handle click on Products link
      console.log('Clicked on Products');
      window.location.href = '/dashboard/products'; // Redirect to the products page
    }
  };

  return (
    <Box sx={headerContainerStyles} role="presentation">
      <Breadcrumbs sx={breadcrumbStyles} aria-label="breadcrumb">
        <Link underline="hover" href="/home" onClick={handleClick} sx={linkStyles}>
          Home
        </Link>
        <Link underline="hover" href="/products" onClick={handleClick} sx={linkStyles}>
          Products
        </Link>
      </Breadcrumbs>
    </Box>
  );
}

export default Header;



