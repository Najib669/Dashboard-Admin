import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Single from "./pages/single/Single";
import {
  productInputs,
  userInputs,
  eventInputs,
  newsInputs,
} from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Profile from "./pages/profile/profile";

import { objEvent, objNews, objProduct, objUser } from "./statesource";
//* Add New Element Functions
import { addNews } from "./Actions/newsAction";
import { addProduct } from "./Actions/productAction";
import { addUser } from "./Actions/userAction";
import { addEvent } from "./Actions/eventAction";
import Edit from "./pages/edit/Edit";
import UpdateProfile from "./pages/updateProfile/UpdateProfile.jsx"

//* Edit Element Functions


import { updateNews } from "./Actions/newsAction";
import { updateProduct } from "./Actions/productAction";
import { updateUser } from "./Actions/userAction";
import { updateEvent } from "./Actions/eventAction";



function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app "}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="home" element={<Home />} />
            <Route path="/users">
              <Route index element={<List type="users" title="User List" />} />
              <Route path=":userId" element={<Single type="users" />} />
              <Route
                path="edit/:userId"
                element={
                  <Edit
                  type="users" 
                    inputs={userInputs}
                    title="Edit User"
                    obj={objUser}
                    update={updateUser}
                  />
                }
              />
              <Route
                path="new"
                element={
                  <New
                    inputs={userInputs}
                    title="Add New User"
                    obj={objUser}
                    add={addUser}
                  />
                }
              />
            </Route>
            <Route path="products">
              <Route
                index
                element={<List type="products" title="Product List" />}
              />
              <Route path=":productId" element={<Single type="products" />} />
              <Route
                path="edit/:productId"
                element={
                  <Edit
                  type="products"
                    inputs={productInputs}
                    title="Edit Product"
                    obj={objProduct}
                    update={updateProduct}
                  />
                }
              />
              <Route
                path="new"
                element={
                  <New
                    inputs={productInputs}
                    title="Add New Product"
                    obj={objProduct}
                    add={addProduct}
                  />
                }
              />
              <Route path="edit" element={<Edit />} />
            </Route>
            <Route path="events">
              <Route
                index
                element={<List type="events" title="Event List" />}
              />
              <Route path=":eventId" element={<Single type="events" />} />
              <Route
                path="edit/:eventId"
                element={
                  <Edit
                  type="events"
                    inputs={eventInputs}
                    title="Edit Event"
                    obj={objEvent}
                    update={updateEvent}
                  />
                }
              />
              <Route
                path="new"
                element={
                  <New
                    inputs={eventInputs}
                    title="Add New Event"
                    obj={objEvent}
                    add={addEvent}
                  />
                }
              />
            </Route>
            <Route path="news">
              <Route index element={<List type="news" title="News List" />} />
              <Route path=":newsId" element={<Single type="news" />} />
              <Route
                path="edit/:newsId"
                element={
                  <Edit
                  type="news"
                    inputs={newsInputs}
                    title="Edit News"
                    obj={objNews}
                    update={updateNews}
                  />
                }
              />
              <Route
                path="new"
                element={
                  <New
                    inputs={newsInputs}
                    title="Add New News"
                    obj={objNews}
                    add={addNews}
                  />
                }
              />
            </Route>
          </Route>
          <Route path="mails">
            <Route index element={<List type="mails" title="Mail List" />} />
            <Route path=":mailId" element={<Single type="mails" />} />
            <Route path="edit" element={<Edit type="mails" />} />
          </Route>
          <Route path="donations">
            <Route
              index
              element={<List type="donations" title="Donation List" />}
            />
            <Route path=":donationId" element={<Single type="donations" />} />
            <Route path="edit" element={<Edit type="donations" />} />
          </Route>
          <Route path="orders">
            <Route index element={<List type="orders" title="Orders List" />} />
            <Route path=":orderId" element={<Single type="orders" />} />
          </Route>

          <Route path="/aboutus" element={<List></List>} />
          <Route path="profile" element={<Profile />} />
          <Route path="updateprofile" element={<UpdateProfile />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
