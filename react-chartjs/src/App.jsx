import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

import "./App.css";
import sourceData from "./data/sourceData.json";
const App = () => {
  return (
    <div className="App">
      <div className="dataCard revenueCard">
        Chart 1<div></div>
      </div>
      <div className="dataCard customerCard">
        <Bar
          data={{
            labels: ["A", "B", "C"],
            datasets: [
              {
                label: "Revenue",
                data: [200, 300, 400],
              },
              {
                label: "Loss",
                data: [50, 100, 350],
              },
            ],
          }}
        />
      </div>
      <div className="dataCard categoryCard">Chart 3</div>
    </div>
  );
};
export default App;
