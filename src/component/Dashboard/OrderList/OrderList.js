import React, { useEffect, useState } from 'react';

function OrderList() {
  const [orderList, setOrderList] = useState([]);
  const localData = localStorage.getItem("nuto-user");
  const email = JSON.parse(localData).email;
  useEffect(() => {
    fetch(`https://damp-basin-39861.herokuapp.com/all-order?email=${email}`)
    .then((response) => response.json())
    .then((json) => {
      setOrderList(json);
      console.log(json)
    });
  },[])
  return (
    <div>
    <br />
      <h5>All Orders</h5>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Service</th>
            <th scope="col">Hour</th>
          </tr>
        </thead>
        <tbody>
          {
            orderList.map((order, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.service_name}</td>
                <td>{order.price}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;