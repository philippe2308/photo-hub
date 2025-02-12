import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "../pages/users";
import UserAlbums from "../pages/user-albums";
import { LIST_USERS, PHOTOS, USER_ALBUMS } from "../commons/routes";
import Photos from "../pages/photos";

const Router = () => (
  <BrowserRouter basename="/">
    <Routes>
      <Route path={LIST_USERS} element={<Users />}></Route>
      <Route path={USER_ALBUMS} element={<UserAlbums />}></Route>
      <Route path={PHOTOS} element={<Photos />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
