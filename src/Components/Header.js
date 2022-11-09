import {AppBar, Toolbar, styled} from '@mui/material';
import Banner from '../images/Banner.jpg';
import SettingsIcon from '@mui/icons-material/Settings';
import './Header.css';
import { navigate } from '@storybook/addon-links';

const StyledHeader = styled(AppBar)`
    background: #000
`

const Header = () => {
    return (
        <AppBar class='style'>
            <Toolbar>
                <img className="Banner" src={Banner} alt="banner" />
                <div>
                    <h1 className='Title'>Dashboard Project</h1>
                    <button class="btn-cfg" onClick={() => navigate("/Admin")}>
                        <SettingsIcon class='stgIcon'></SettingsIcon>
                        <a className="txt">Configuration Page</a>
                    </button>
                    
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;

/*
<button class="btn-cfg" onClick="Javascript:window.document.location.href='Admin.html';">
                        <SettingsIcon class='stgIcon'></SettingsIcon>
                        <a className="txt" href='../Admin/Admin.js'>Configuration Page</a>
                    </button>

<Router>
                        <nav>
                            <Link to="/">
                                
                                Home Page
                            </Link>

                            <Link to="/Admin">
                                <SettingsIcon class='stgIcon'/>
                                Admin Page
                            </Link>
                        </nav>
                        <Routes>
                            <Route exact path="/" element={<Header />}/>
                            <Route path="/Admin" element={<Admin />}/>
                        </Routes>
                    </Router>

*/