import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography , TextField } from '@mui/material';
import './customStyles.css';
import './Global.css';

function Navbar() {
    const customInputStyle = {
        borderRadius: '10px',
      };
      const customcolourstyle = {
        backgroundColor:'whitesmoke', borderRadius:"10px"
      };
      const customButtonStyle = {
        fontFamily: 'Cabin, sans-serif',
        color: 'black',
        fontSize: '20px',
        textTransform: 'None',
        marginRight:'50px'
      };
  return (
    <nav className="navbar">
      <div>
        <Box>
          <AppBar
            style={{
              boxSizing: "border-box",
              background: "rgba(255,255,255,0.2)",
            }}
          >
            <Toolbar>
            <Typography  align="left" style={{ fontSize: "30px" , marginRight: "60px" }}>
            <span style={{ color: "#3EB489" }}><b>G</b></span>
            <span style={{color:"Black"}}><b>H</b></span>
            </Typography>
            <Button
                style={customButtonStyle}
              >
                Home
              </Button>
              <Button
                style={customButtonStyle}
              >
                Category
              </Button>
            <TextField size='small'  InputProps={{ style: customInputStyle }} style={customcolourstyle} placeholder='Search for designs...'/>
            <Typography sx={{ flexGrow: 1 }}/>
              <Button
                style={customButtonStyle}
              >
                Contact
              </Button>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <Button
                style={customButtonStyle}
              >
                Login
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
    </nav>
  );
}

export default Navbar;
