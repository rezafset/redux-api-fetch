import './App.css';
import {Provider} from "react-redux"; 
import store from './store';
import AllPhotos from './components/AllPhotos/AllPhotos';
function App() {
  return (
    <Provider store = {store}>
      <div className="container">
        <AllPhotos></AllPhotos>
      </div>
    </Provider>
    
  );
}

export default App;
