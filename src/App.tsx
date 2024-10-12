import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Clubs from "./pages/Clubs";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Notifications from "./pages/Notifications";
import { Toaster } from "./components/ui/toaster";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";
import ClubContainer from "./components/Clubs/ClubContainer";
import UserClubs from "./pages/UserClubs";

const App = () => {
  return (
    <>
      <Routes>
        {/* Routes with Sidebar */}
        <Route
          path="/home"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />

        <Route
          path="/clubs"
          element={
            <Layout showSidebar={true}>
              <Clubs />
            </Layout>
          }
        />

        <Route
          path="/clubs/:clubId"
          element={
            <Layout showSidebar={true}>
              <UserClubs />
            </Layout>
          }
        />

        <Route
          path="/user/clubs"
          element={
            <Layout showSidebar={true}>
              <ClubContainer />
            </Layout>
          }
        />

        <Route
          path="/notifications"
          element={
            <Layout showSidebar={true}>
              <Notifications />
            </Layout>
          }
        />

        {/* Public Routes without Sidebar */}
        <Route element={<LandingPage />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<SignUp />} path="/signup" />
        <Route element={<ForgotPassword />} path="/forgot-password" />
        <Route element={<ResetPassword />} path="/reset-password/:token" />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
