import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ChatPage from "./pages/ChatPage/ChatPage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          {/* <Route path="/" element={<ChatPage />} /> */}
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
