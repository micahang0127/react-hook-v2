import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from './Profile';

const divStyle = {
  margin: '0 auto', 
  marginTop: '4rem',
  width: '512px'
};
const Profiles = () => {
  const activeStyle = {
    background: 'black',
    color: 'white'
  };
  return (
    <div style={divStyle}>
      <h2>사용자 목록:</h2>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/dan" active="true">
            Dan Abromov
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/evan">
            Evan You
          </NavLink>
        </li>
      </ul>

      <Route
        path="/profiles"
        exact
        render={() => <div>유저를 선택해주세요.</div>}
      />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
};

export default Profiles;