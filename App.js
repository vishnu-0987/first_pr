import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogicalReasoning from "./Pages/LogicalReasoning";
import Aptitude from "./Pages/Aptitude";
import TopicPage from "./components/TopicPage";
import NotFound from "./components/NotFound";
import "./App.css";
import DataInterpretation from "./Pages/DataInterpretation";
import QuantitativeAptitude from "./Pages/QuantitativeAptitude";
import AptitudePage from "./components/AptitudePage";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Aptitude />} />
      <Route exact path="/logical-reasoning" element={<LogicalReasoning />} />
      <Route
        exact
        path="/quantitative-aptitude"
        element={<QuantitativeAptitude />}
      />
      <Route
        exact
        path="/data-interpretation"
        element={<DataInterpretation />}
      />
      <Route exact path="/topic/:topic" element={<TopicPage />} />
      <Route exact path="/chapter/:chapter" element={<AptitudePage />} />
      <Route element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
