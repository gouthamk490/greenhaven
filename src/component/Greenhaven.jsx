import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography ,Button} from '@mui/material'
import './customStyles.css';

const Greenhaven = () => {

  return (
    <div style={{ padding: "150px", position:"relative",marginLeft:"-5%"}}>
        <Typography variant='h2' style={{fontSize:"100px"}} color={'#3EB489'}><b>Green</b></Typography>
        <Typography style={{marginLeft:"25%" , marginTop:"-5%",position:"relative", fontSize:"100px"}} color={"black"}><b>Haven</b></Typography>
        <div className='cross-container'>
        <hr className="horizontal-line" />
        <div className="vertical-line"></div>
        </div>
        <Typography style={{fontSize:"20px" , marginLeft:"25%", marginTop:"2%"}} color={'#434343'}>Inspiring Sustainable Living: Where Eco Friendly Designs Meet Ethical Architecture.</Typography>
        <Typography style={{fontSize:"20px" , marginLeft:"25%"}} color={'#434343'}>Your Journey to Greener, Smarter Home Begins Here.</Typography>
    </div>
  )  
}

export default Greenhaven