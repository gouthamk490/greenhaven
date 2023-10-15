import './App.css';
import Greenhaven from './component/Greenhaven';
import Navbar from './component/Navbar';
import './global.css';
import greenhaven from './component/greenhaven1.png';
import { Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './component/customStyles.css';
import myImage from './component/tree.png';

function App() {
  return (
    <div className='container'>
     <Greenhaven/>
     <img src={greenhaven} alt="My Image" style={{height:'300px' , marginTop:"70px"}} className="top-left-image" />
     <Navbar/>
     <Typography display={'flex'} justifyContent={'center'} alignItems={'center'} fontSize={'32px'}>Explore Our Designs Below</Typography>
     <div className="centered-icon">
      <KeyboardArrowDownIcon style={{fontSize:40 ,marginTop:'2px'}}/>
      </div>
      <img src={myImage} className='left-image' style={{marginBottom:"-90px"}}/>
      <img src={myImage} className='right-image'  style={{marginBottom:"-90px"}} id='mirrored-image'/>
    </div>
  );
}

export default App;


