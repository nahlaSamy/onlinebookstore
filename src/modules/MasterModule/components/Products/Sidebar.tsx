import React, { useState } from 'react';
import { Box, Typography, TextField, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { apiProtected } from '../../../SharedModule/axiosInstance'; 

const Sidebar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query.trim()); // Trimmed query is immediately sent to parent component
  };

  return (
    <Box>
      <Typography gutterBottom variant="h6">
        Search
      </Typography>
      <TextField
        label="Search"
        fullWidth
        margin="dense"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Divider style={{ margin: '16px 0' }} />
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Filters</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* Add filter options here */}
        </AccordionDetails>
      </Accordion>
      {/* Add more filters as needed */}
    </Box>
  );
};

export default Sidebar;
