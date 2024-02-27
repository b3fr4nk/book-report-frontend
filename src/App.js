import Upload from "./Upload";
import ReportsList from "./ReportsList";
import "./index.css";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Navbar />
      <div>
        <ReportsList />
        <Upload />
      </div>
    </div>
  );
}

export default App;
