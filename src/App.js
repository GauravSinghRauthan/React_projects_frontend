
import { CustomRoutes } from './AllRoutes/CustomRoutes.jsx';
import './App.css';
import BlogHeader from './components/header.jsx';



function App() {
  return (
    <div className="App">
      <BlogHeader />
      <CustomRoutes />
    </div>
  );
}

export default App;
