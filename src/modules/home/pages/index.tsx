import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <span>This is Home</span>
      <div>
        <Link to="/register">Go to Register</Link>
      </div>
    </div>
  );
};

export default HomePage;
