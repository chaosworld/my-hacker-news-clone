import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import useSticky from "./hooks/useSticky";

const Header = () => {
  const { sticky, stickyRef } = useSticky();

  return (
    <React.Fragment>
      <h1>Hacker News Clone</h1>
      <div className={`nav-link ${sticky ? "sticky" : ""}`} ref={stickyRef}>
        <NavLink to="/top" activeClassName="active">
          Top<span> Stories</span>
        </NavLink>
        <NavLink to="/new" activeClassName="active">
          Latest<span> Stories</span>
        </NavLink>
        <NavLink to="/best" activeClassName="active">
          Best<span> Stories</span>
        </NavLink>
      </div>
      {/*
      <div
        style={{
          height: sticky ? `${stickyRef.current?.clientHeight}px` : '0px',
        }}
      />
      */}
    </React.Fragment>
  );
};

export default Header;
