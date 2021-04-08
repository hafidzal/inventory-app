import React from "react";
import { Router } from "@reach/router"
import SignIn from "./SignIn";
import ProfilePage from "./ProfilePage";

function Main() {
  const user = null;
  return (
        user ?
        <ProfilePage />
      :
        <Router>
          <SignIn path="/" />
        </Router>

  );
}
export default Main;