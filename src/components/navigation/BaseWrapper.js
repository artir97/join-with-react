import { Outlet } from "react-router-dom";

import MobileSwitch from "../base/MobileSwitch";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import NotificationList from "../notifications/NotificationList";

const BaseWrapper = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className='lg:flex lg:full-page-fit'>
          <MobileSwitch desktopComponent={<Sidebar />} />
          <div className='lg:flex-1'>
            <Outlet />
          </div>
        </div>
        <MobileSwitch mobileComponent={<Footer />} />
      </div>
      <NotificationList />
    </>
  );
}

export default BaseWrapper;