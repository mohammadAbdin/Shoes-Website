import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleNavigation = (redirect) => {
    navigate(redirect);
  };
  return (
    <div>
      <nav>
        <ul className="nav-container">
          <li>
            <button onClick={() => handleNavigation("/")}>Home</button>
            {/* <Link to="/">Home</Link> */}
          </li>
          <li>
            <button onClick={() => handleNavigation("/Add-shoe")}>
              Add a shoe
            </button>
            {/* <Link to="/Add-shoe">Add a shoe</Link> */}
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
