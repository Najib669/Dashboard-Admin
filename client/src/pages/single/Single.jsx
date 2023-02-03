import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/table/Table";
import { useParams } from "react-router-dom";
import { getUser } from "../../Actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProduct } from "../../Actions/productAction";
import { getEvent } from "../../Actions/eventAction";
import { getNewss } from "../../Actions/newsAction";
import { getOrder } from "../../Actions/orderAction";
import { getMail } from "../../Actions/mailAction";
import { getDonation } from "../../Actions/donationAction";
import { Link } from "react-router-dom";

const Single = ({ type }) => {

  let idParams = useParams();

  const user = useSelector((state) => state.userReducer.user);
  const product = useSelector((state) => state.productReducer.product);
  const event = useSelector((state) => state.eventReducer.event);
  const newss = useSelector((state) => state.newsReducer.newss);
  const order = useSelector((state) => state.orderReducer.order);
  const mail = useSelector((state) => state.mailReducer.mail);
  const donation = useSelector((state) => state.donationReducer.donations);



  //get data by id
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(idParams.userId));
  }, []);
  useEffect(() => {
    dispatch(getProduct(idParams.productId));
  }, []);
  useEffect(() => {
    dispatch(getEvent(idParams.eventId));
  }, []);
  useEffect(() => {
    dispatch(getNewss(idParams.newsId));
  }, []);
  useEffect(() => {
    dispatch(getOrder(idParams.orderId));
  }, []);
  useEffect(() => {
    dispatch(getMail(idParams.mailId));
  }, []);
  useEffect(() => {
    dispatch(getDonation(idParams.donationId));
  }, []);


  let content;
  let singleItem;
  let path;
  //swich case according to the type:users/products/news/events/mails/orders
  switch (type) {
    case "users":
      content = [
        "fullName",
        "email",
        "birthDay",
        "gender",
        "phoneNumber",
        "adress",
        "country",
        "city",
      ];
      singleItem = user;
      path = "/users/edit/";

      break;

    case "products":
      content = ["productName", "price", "stock", "createdAt", "updatedAt"];
      singleItem = product;
      path = "/products/edit/";

      break;
    case "events":
      content = [
        "name",
        "description",
        "startDate",
        "endDate",
        "author",
        "location",
        "createdAt",
      ];
      singleItem = event;
      path = "/events/edit/";
      break;
    case "news":
      content = ["name", "description", "author", "createdAt"];
      singleItem = newss;
      path = "/news/edit/";

      break;
    case "orders":
      content = [
        "userName",
        "shippingAdress",
        "phoneNumber",
        "product",
        "quantity",
        "total",
      ];
      singleItem = order;

      break;
    case "mails":
      content = ["name", "email", "subject", "message", "createdAt"];
      singleItem = mail;
      break;

    case "donations":
      content = ["donorName", "email", "amount", "currency", "createdAt"];
      singleItem = donation;
      break;

    default:
      break;
  }
  let title = content[0];
console.log(donation)
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            {/* <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            /> */}
            <Link to={path + singleItem?._id}>
              <div className="editButton">edit</div>
            </Link>
            <h1 className="title"> information</h1>
            <div className="item">
              <img src={singleItem?.imgUrl} alt="" className="itemImg" />

              <div className="details">
                <h1 className="itemTitle">{singleItem?.[title]}</h1>
                {content.map((el) => (
                  <div className="detailItem">
                    <span className="itemKey">{el}:</span>

                    <span className="itemValue">{singleItem?.[el]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
};

export default Single;
