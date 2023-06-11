import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Navigation from "./components/Navigation/Navigation";
import VideoSection from "./components/VideoSection/VideoSection";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Sidebar />
        <div className="split">
          <Navigation />
          <VideoSection />
        </div>
      </main>
    </>
  );
}

export default App;
