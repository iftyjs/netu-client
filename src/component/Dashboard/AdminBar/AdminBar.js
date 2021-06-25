import React from 'react';
import { Link, useHistory } from 'react-router-dom';

function AdminBar() {
  const localData = localStorage.getItem("nuto-user");
  const name = JSON.parse(localData);
  let history = useHistory();
  const signOutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("nuto-user");
    history.push("/");
  }
  return (
    <div className="container">
      <div className="row" style={{background: '#eee', paddingLeft: '30px'}}>
        <div className="col-md-9">
          <div>
            Welcome, {name?.name}
          </div>
        </div>
        <div className="col-md-3">
          <Link to="/" onClick={signOutHandler}>SignOut</Link>
        </div>
      </div>
    </div>
  );
}

export default AdminBar;