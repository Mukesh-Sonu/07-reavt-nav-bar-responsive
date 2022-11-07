import { useState } from "react";
import Reorder from "@material-ui/icons/Reorder";
import SearchIcon from "@material-ui/icons/Search";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div>
      <div className="navbar">
        <div className="left-side">
          <div className="links" id={showLinks ? "hidden" : ""}>
            <a href="/home">Home</a>
            <a href="/feedback">Feedback</a>
            <a href="/about-us">About</a>
            <a href="/contact-us">Contact</a>
          </div>

          <button onClick={() => setShowLinks(!showLinks)}>
            <Reorder />
          </button>
        </div>
        <div className="right-side">
          <input placeholder="Search..." />
          <button>
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
