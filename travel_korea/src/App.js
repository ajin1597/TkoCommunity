import "./App.css";
import Header from "./Layout/Header";
import Copyright from "./Layout/Copyright";

function App() {
  return (
    <>
      <Header />
      <div id="전체 레이이웃" className="my-5 max-h-full min-w-min bg-gray-100">
        <div id="body" className="m-4 bg-gray-100">
          body
        </div>
      </div>
      <Copyright />
    </>
  );
}

export default App;
