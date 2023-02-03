import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./edit.scss";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
//* Get Element by Id Function
import { useParams } from "react-router-dom";

import { getUser } from "../../Actions/userAction";
import { getProduct } from "../../Actions/productAction";
import { getEvent } from "../../Actions/eventAction";
import { getNewss } from "../../Actions/newsAction";

const New = ({ inputs, title, obj, update, type }) => {
  let idParams = useParams();

  const user = useSelector((state) => state.userReducer.user);
  const product = useSelector((state) => state.productReducer.product);
  const event = useSelector((state) => state.eventReducer.event);
  const newss = useSelector((state) => state.newsReducer.newss);

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
  //handle input change states and functions
  const [inputUpdateUser, setInputUpdateUser] = useState({
    fullName: user?.fullName,
    email: user?.email,
    password: user?.password,
    birthDay: user?.birthDay,
    gender: user?.gender,
    phoneNumber: user?.phoneNumber,
    adress: user?.adress,
    city: user?.city,
    country: user?.country,
  });



  const handleChangeUpdateUser = (e) => {
  
    setInputUpdateUser({ ...inputUpdateUser, [e.target.name]: e.target.value});
  };
  const [inputUpdateProduct, setInputUpdateProduct] = useState({
    productName: product?.productName,
    price: product?.price,
    stock:product?.stock,
   
  });
  const handleChangeUpdateProduct = (e) => {
  
    setInputUpdateProduct({ ...inputUpdateProduct, [e.target.name]: e.target.value});
  };
  
const [inputUpdateEvent, setInputUpdateEvent] = useState({
  name: event?.name,
  description:event?.description,
  startDate:event?.startDate,
  endDate:event?.endDate,
  author:event?.author,
  location:event?.location,
});
const handleChangeUpdateEvent = (e) => {

  setInputUpdateEvent({ ...inputUpdateEvent, [e.target.name]: e.target.value});
};

//*--------------------------------------------------------------------------

const [inputUpdateNewss, setInputUpdateNewss] = useState({
  name:newss?.name,
description:newss?.description,
author:newss?.author,
});
const handleChangeUpdateNewss = (e) => {

  setInputUpdateNewss({ ...inputUpdateNewss, [e.target.name]: e.target.value});
};




  
  let  singleItem 
let inputUpdate
  let handleChangeUpdate
  //swich case according to the type:users/products/news/events/mails/orders
  switch (type) {
    case "users":
      singleItem = user;
      handleChangeUpdate=handleChangeUpdateUser
      inputUpdate=inputUpdateUser
      break;

    case "products":
      singleItem = product;
      handleChangeUpdate=handleChangeUpdateProduct
      inputUpdate=inputUpdateProduct

      break;

    case "events":
      singleItem = event;
      handleChangeUpdate=handleChangeUpdateEvent
      inputUpdate=inputUpdateEvent


      break;
    case "news":
      singleItem = newss;
      handleChangeUpdate=handleChangeUpdateNewss
      inputUpdate=inputUpdateNewss


      break;

    default:
      break;
  }

  const [file, setFile] = useState("");

 

  //const save = useSelector(state=>state.contactsReducer.save)
  const handleSubmit = () => {
    dispatch(update());
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "data:image/png;base64,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"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  new Image:
                  <DriveFolderUploadIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    name={input.name}
                    value={inputUpdate ?.[input.name]}
                    onChange={handleChangeUpdate}
                  />
                </div>
              ))}
              <button onClick={handleSubmit}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
