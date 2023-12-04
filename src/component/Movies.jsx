import React from "react";
import { Link } from "react-router-dom";

const Movies = () => {
  return (
    <div>
      <div>
        Movies&nbsp;
        <Link to="/" className="underline">
          go to Dashbroad
        </Link>
      </div>
    </div>
  );
};

export default Movies;
