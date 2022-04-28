import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Header, Footer } from "./components/Layout/index";
import { Home, AboutUs, UserList } from "./pages/index";
import './assets/scss/styles.scss';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user-list" element={<UserList />} />
        <Route path="about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
