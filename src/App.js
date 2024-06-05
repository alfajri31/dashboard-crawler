import './App.scss'
import {MainDashboard} from "./components/MainDashboard";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
      <div id={"mainDashboard"}>
          <div className={"container-fluid"}>
              <MainDashboard/>
          </div>

      </div>
  );
}

export default App;
