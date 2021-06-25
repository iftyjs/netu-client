import React from 'react';
import { Link } from 'react-router-dom';


function Sidebar() {
  const localStorageData = localStorage.getItem("nuto-user");
  const role = JSON.parse(localStorageData);

  return (
    <div>
      <h5><Link to="/">Nutrician</Link></h5>
      <ul>
        <li><Link to="/dashboard/order-list?name=order">Order List</Link></li>
        <li><Link to="/dashboard/add-review?name=add-review">Add Review</Link></li>
        {
          role.role === 'admin' && <>
        <li><Link to="/dashboard/add-service?name=add-service">Add Service</Link></li>
        <li><Link to="/dashboard/make-admin?name=make-admin">Make Admin</Link></li>
        <li><Link to="/dashboard/manage-service?name=manage-service">Manage Services</Link></li>
        </>
        }
      </ul>
    </div>
  );
}

export default Sidebar;