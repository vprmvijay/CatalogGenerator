import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from "react-dom/client";
import Form from './Form'

function App() {
  return (
    <Router>
      <Routes>
        <Route index  element={<Form/>} />
        
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);