import "./datatable.scss";
import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "../../Actions/userAction";
import { getProducts, deleteProduct } from "../../Actions/productAction";
import { getEvents, deleteEvent } from "../../Actions/eventAction";
import { getNews, deleteNews } from "../../Actions/newsAction";
import { getMails, deleteMail } from "../../Actions/mailAction";
import { getOrders } from "../../Actions/orderAction";
import { getDonations } from "../../Actions/donationAction";
import {
  userColumns,
  productColumns,
  eventColumns,
  newsColumns,
  mailColumns,
  donationColumns,
  orderColumns,
} from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = ({ type, title }) => {
  const users = useSelector((state) => state.userReducer.users);
  const products = useSelector((state) => state.productReducer.products);
  const events = useSelector((state) => state.eventReducer.events);
  const news = useSelector((state) => state.newsReducer.news);
  const mails = useSelector((state) => state.mailReducer.mails);
  const donations = useSelector((state) => state.donationReducer.donations);
  const orders = useSelector((state) => state.orderReducer.orders);



  const dispatch = useDispatch();
  useEffect (() => {
    dispatch(getUsers());
  }, []);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  useEffect(() => {
    dispatch(getEvents());
  }, []);
  useEffect(() => {
    dispatch(getNews());
  }, []);
  useEffect(() => {
    dispatch(getMails());
  }, []);
  useEffect(() => {
    dispatch(getDonations());
  }, []);
  useEffect(() => {
    dispatch(getOrders());
  }, []);
  const handleDelete = (id) => {
    switch (type) {
      case "users":
        dispatch(deleteUser(id));
        break;
      case "mails":
        dispatch(deleteMail(id));
        break;
      case "products":
        dispatch(deleteProduct(id));
        break;
      case "events":
        dispatch(deleteEvent(id));
        break;
      case "news":
        dispatch(deleteNews(id));
        break;
      default:
        break;
    }
  };
  let data;
  let btn;
  let navig;
  let show
  //temporary

  switch (type) {
    case "users":
      data = {
        col: userColumns,
        ro: users.map((user) => ({
          id: user._id,
          userName: user.fullName,
          email: user.email,
          img: user.imgUrl,
        })),
      };
      btn = "/users/new";
      navig = "/users/";
      show= true
      break;
    case "products":
      data = {
        col: productColumns,
        ro: products.map((product) => ({
          id: product._id,
          productName: product.productName,
          price: product.product,
          img: product.imgUrl,
        })),
      };
      btn = "/products/new";
      navig = "/products/";
      show= true
      break;
    case "events":
      data = {
        col: eventColumns,
        ro: events.map((event) => ({
          id: event._id,
          eventName: event.productName,
          startDate: event.startDate,
          endDate: event.endDate,
          location: event.location,
          img: event.imgUrl,
        })),
      };
      btn = "/events/new";
      navig = "/events/";
      show= true
      break;
    case "news":
      data = {
        col: newsColumns,
        ro: news.map((news) => ({
          id: news._id,
          newsName: news.productName,
          date: news.product,
          author: news.author,
          img: news.img,
        })),
      };
      btn = "/news/new";
      navig = "/news/"; show= true
      break;
    case "mails":
      data = {
        col: mailColumns,
        ro: mails.map((mail) => ({
          id: mail._id,
          name: mail.name,
          email: mail.email,
          subject: mail.subject,
          message: mail.message,
        })),
      };
      btn = "/mails/new";
      navig = "/mails/";
      break;
    case "donations":
      data = {
        col: donationColumns,
        ro: donations.map((donation) => ({
          id: donation._id,
          donor: donation.donorName,
          email: donation.email,
          amount: donation.amount + donation.currency,
        })),
      };
      btn = "/donations/new";
      navig = "/donations/";
      break;
    case "orders":
      data = {
        col: orderColumns,
        ro: orders.map((order) => ({
          id: order._id,
          userName: order.user,
          quantity: order.quantity,
          total: order.total,
          img: order.imgUrl,
        })),
      };
      btn = "/orders/new";
      navig = "/orders/";
      break;

    default:
      break;
  }



  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={navig + params.row.id} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
{show? <div
  className="deleteButton"
  onClick={() => handleDelete(params.row.id)}
>
  Delete
</div>:<div
className="deleteButton"

>
Archieve
</div>}
           
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {title}
        <Link to={btn} style={{ textDecoration: "none" }} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="dataGrid"
        rows={data.ro}
        columns={data.col.concat(actionColumn)}
        //rows= {users.map((user)=>({id: user._id, userName: user.fullName, email: user.email, img: user.imgUrl}))}
        //columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default Datatable;
