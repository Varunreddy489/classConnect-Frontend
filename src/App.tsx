import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AllClubs from "./pages/Clubs";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import Notifications from "./pages/Notifications";
import { Toaster } from "./components/ui/toaster";
import ResetPassword from "./pages/ResetPassword";
import ForgotPassword from "./pages/ForgotPassword";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with Sidebar */}
        <Route
          element={
            <Layout showSidebar>
              <Dashboard />
            </Layout>
          }
          path="/home"
        />
        <Route
          path="/clubs"
          element={
            <Layout showSidebar>
              <AllClubs />
            </Layout>
          }
        />
        <Route
          path="/notifications"
          element={
            <Layout showSidebar>
              <Notifications />
            </Layout>
          }
        />

        {/* Public Routes without Sidebar */}
        <Route
          element={
            <Layout showSidebar={false}>
              <LandingPage />
            </Layout>
          }
          path="/"
        />
        <Route
          element={
            <Layout showSidebar={false}>
              <Login />
            </Layout>
          }
          path="/login"
        />
        <Route
          element={
            <Layout showSidebar={false}>
              <SignUp />
            </Layout>
          }
          path="/signup"
        />
        <Route
          element={
            <Layout showSidebar={false}>
              <ForgotPassword />
            </Layout>
          }
          path="/forgot-password"
        />
        <Route
          element={
            <Layout showSidebar={false}>
              <ResetPassword />
            </Layout>
          }
          path="/reset-password/:token"
        />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
