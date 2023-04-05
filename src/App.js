import modernOffice from "./components/images/modernOffice.jpeg";
import mac from "./components/images/mac.jpeg";

function TheSidebar() {
  return (
    <div className="Sidebar">
      <img src={modernOffice} className="Sidebar-image" alt="sb-image" />
      <button className="sidebar-button">Button 1</button>
      <button className="sidebar-button">Button 2</button>
      <button className="sidebar-button">Button 3</button>
      <button className="sidebar-button">Button 4</button>
      <button className="sidebar-button">Button 5</button>
      <img src={mac} className="Sidebar-image" alt="sb-image" />
    </div>
  );
}

export default TheSidebar;
