import "./navbar.scss"
import SearchIcon from '@mui/icons-material/SearchOutlined';
import LanguageIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsIcon from '@mui/icons-material/CircleNotificationsOutlined';
import ChatBubbleIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListBulletedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder="Search..."/>
                <SearchIcon/>

            </div>
            <div className="items">
                <div className="item">
                    <LanguageIcon className="icon"/>
                    English
                </div>
                <div className="item">
                    <DarkModeIcon className="icon"onClick={() => dispatch({ type: "TOGGLE" })}/>
                </div>
                <div className="item">
                    <FullscreenIcon className="icon"/>
                </div>
                <div className="item">
                    <NotificationsIcon className="icon"/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ChatBubbleIcon className="icon"/>
                    <div className="counter">2</div>
                </div>
                <div className="item">
                    <ListBulletedIcon className="icon"/>
                </div>
                <div className="item">
                    <img 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8&w=1000&q=80"
                    alt=""
                    className="avatar"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar