import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Games from "./pages/Games";
import Contacts from "./pages/Contacts";
import Layout from "./Layout/Layout";

import "./App.css";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/games" element={<Games />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </Layout>
  );
}

export default App;
