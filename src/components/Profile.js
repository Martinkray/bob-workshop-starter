import React from "react";
import { Avatar, Typography, Stack } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';

function Profile() {
  return (
    <Stack
      alignItems="center"
      textAlign="center"
      py={5}
      bgcolor="#f5f5f5"
      borderRadius={3}
      boxShadow={3}
      spacing={2}
    >
      <CardMedia
          component="img"
        
          image="/Skjermbilde 2023-10-03 kl. 18.47.23.png"
          alt="green iguana"
        />
      {/* <Avatar
        src="/Skjermbilde 2023-10-03 kl. 18.47.23.png"
        alt="Blomst" 
        sx={{
          width: 150,
          height: 150,
          margin: "auto",
          border: "4px solid #3f51b5",
        }}
      /> */}
      <Typography variant="h4" gutterBottom color="#3f51b5">
        Martin 23 år, student

      

    
      </Typography>
    </Stack>
  );
}

export default Profile;
