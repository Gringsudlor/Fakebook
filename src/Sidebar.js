import React from 'react'
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import { ExpandMoreOutlined } from '@material-ui/icons';

function Sidebar() {
    return <div className="sidebar">
        <SidebarRow src="https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.6435-9/43750641_2172855369652024_2227380613915082752_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEdwC-cPpiz-_qrCfZ-Uvflu3ht1ywujui7eG3XLC6O6OALCWTkOYE2MGqByn2qCTylKziFc0OJKz5GGkWd0dBQ&_nc_ohc=bw7ly3zDkHgAX-Gy-va&_nc_ht=scontent.fbkk5-5.fna&oh=00_AT9xqFEa9B72uqM--Nr4AKyZ3x5jXbN7sDOolM5X4d9Vqw&oe=626EA25C" title="Sprlng" />
   
        <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
        <SidebarRow Icon={PeopleIcon} title="Friends" />
        <SidebarRow Icon={ChatIcon} title="Messenger" />
        <SidebarRow Icon={StorefrontIcon} title="Matketplace" />
        <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      
 
    </div>
    
}

export default Sidebar
