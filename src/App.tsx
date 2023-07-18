import TableComp from "./component/TableComp";
import {
  calculateClassWiseGammaMeasures,
  calculateClassWiseMeasures,
} from "./utility/utility";
const dataset = require("./utility/Wine-Data.json");
function App() {
  const classWiseMeasures = calculateClassWiseMeasures(dataset);
  const classWiseMeasuresGamma = calculateClassWiseGammaMeasures(dataset);

  return (
    <div>
      <TableComp type="Flavanoids" classWiseMeasures={classWiseMeasures} />
      <TableComp type="Gamma" classWiseMeasures={classWiseMeasuresGamma} />
    </div>
  );
}

export default App;
