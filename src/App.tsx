import { SpeedInsights } from "@vercel/speed-insights/react";
import MainContainer from "./components/MainContainer";
import "./App.css";

const App = () => {
  return (
    <>
      <MainContainer />
      <SpeedInsights />
    </>
  );
};

export default App;
