import React from 'react';
import Banner from '../images/Banner.jpg';
import { Link } from 'react-router-dom';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import "./TopBar.css";



function TopBar() 
{
  return (
     <div className='topBar'>
        <img className="Banner" src={Banner} alt="banner" />
        <div className='TopRight'>
            <h1 className='Title'>Dashboard Project</h1>
            <div className='Links'>
                <div className='Home'>
                    <Link to="/" className='link'>
                    <HomeIcon className='icon'/>
                        Home Page
                    </Link>
                </div>
            
                <div className='Settings'>
                    <Link to="/Admin" className='link'>
                        <SettingsIcon className='icon'/>
                        Admin Page
                    </Link>
                </div>
            </div>
            
            
            
        </div>

     </div>
     
  );
}

export default TopBar;
