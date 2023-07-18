import React,{FC} from 'react'

const TableComp:FC<any> = (props) => {
  const {classWiseMeasures,type} =props
  return (
    <table border={1}>
    <thead>
      <tr>
        <th>Measure</th>
        {Object.keys(classWiseMeasures).map((alcoholClass) => (
          <th key={alcoholClass}>{alcoholClass}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{type} Mean</td>
        {Object.keys(classWiseMeasures).map((alcoholClass) => (
          <td key={alcoholClass}>
            {classWiseMeasures[alcoholClass].mean.toFixed(3)}
          </td>
        ))}
      </tr>
      <tr>
        <td>{type} Median</td>
        {Object.keys(classWiseMeasures).map((alcoholClass) => (
          <td key={alcoholClass}>
            {classWiseMeasures[alcoholClass].median.toFixed(3)}
          </td>
        ))}
      </tr>
      <tr>
        <td>{type} Mode</td>
        {Object.keys(classWiseMeasures).map((alcoholClass) => (
          <td key={alcoholClass}>
            {classWiseMeasures[alcoholClass].mode.toFixed(3)}
          </td>
        ))}
      </tr>
    </tbody>
  </table>
  )
}

export default TableComp