import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// Manually define the top 100 films array
const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The kchjfhr', year: 1950 },
  // Add more films as needed
];

const Dashboard = () => {
  return (
    <>
    <form>
<Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
     <Stack direction="row" spacing={2}>
      <Button>Primary</Button>
      <Button disabled>Disabled</Button>
      <Button href="#text-buttons">Link</Button>
    </Stack>
    </form>
    </>
    
  );
};

export default Dashboard;
