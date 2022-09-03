import "./App.css";
import AddContact from "./UI Compoenents/AddContact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactList from "./UI Compoenents/ContactList";
import UpdateContact from "./UI Compoenents/UpdateContact";
import SignUp from "./UI Compoenents/SignUp";
import SignIn from "./UI Compoenents/SignIn";
import "react-toastify/dist/ReactToastify.css";
import ProfileDashboard from "./UI Compoenents/ProfileDashboard";
import ResetPassword from "./UI Compoenents/ResetPassword";
import EmailJS from "./UI Compoenents/EmailJS";
import "bootstrap/dist/js/bootstrap.js";
import NavHeader from "./UI Compoenents/NavHeader";
// react toast notification

function App() {
  return (
    <BrowserRouter>
      <NavHeader />
      <Routes>
        {/* <Route path="/" element={<LandingPage />} /> */}
        <Route path="/" element={<ContactList />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/display" element={<ContactList />} />
        <Route path="/update" element={<UpdateContact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/email" element={<EmailJS />} />
        <Route path="/profileDashboard" element={<ProfileDashboard />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
