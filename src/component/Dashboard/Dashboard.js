import React from 'react';
import { useLocation } from 'react-router-dom';
import AddReview from './AddReview/AddReview';
import AddService from './AddService/AddService';
import AdminBar from './AdminBar/AdminBar';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageService from './ManageService/ManageService';
import OrderList from './OrderList/OrderList';
import Sidebar from './Sidebar/Sidebar';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function Dashboard() {
  let query = useQuery();
  let getQuery = query.get("name");

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <Sidebar />
        </div>
        <div className="col-md-8">
          <AdminBar />
          {
            getQuery === 'order' && <OrderList />
          }
          {
            getQuery === 'add-service' && <AddService />
          }
          {
            getQuery === 'make-admin"' && <MakeAdmin />
          }
          {
            getQuery === 'manage-service' && <ManageService />
          }
          {
            getQuery === 'add-review' && <AddReview />
          }
        </div>
      </div>
    </div>
  );
}

export default Dashboard;