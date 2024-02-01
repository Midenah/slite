import { useEffect, useState } from "react";
import React from "react";
import { FaAlignJustify } from "react-icons/fa";


function Nav() {
  const [form, setForm] = useState("Start for free");
  const [ismobile, setIsMobile] = useState(false);

  const handleForm = () => {
    setForm("Press to enter card");
  };
  useEffect(() => {
    console.log("Free subcriber:", form);
  }, []);

  return (
    <div>
      <nav className="mobile-visibility">
        <button>Request a demo</button>
        <button onClick={handleForm}>{form}</button>
        <div className="bar" onClick={()=> {
            setIsMobile(!ismobile);
        }}>
        <FaAlignJustify />
        </div>
        <ul className={ismobile ? "show": ""}>
          <li>Product</li>
          <li>Templates</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Sign In</li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
