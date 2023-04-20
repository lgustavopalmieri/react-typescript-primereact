import "./primereact-theme/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Public from "./components/Public/Public";
import Login from "./components/Login/Login";
import RequireAuth from "./components/RequireAuth/RequireAuth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Public />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<div>register</div>} />

          <Route element={<RequireAuth />}>
            <Route path="welcome" element={<div>welcome</div>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
