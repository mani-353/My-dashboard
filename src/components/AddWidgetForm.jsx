// import React, { useState } from 'react';
// import '../styles/AddWidgetForm.css'; // Ensure you create and import the CSS file

// const AddWidgetForm = ({ categoryId, onAddWidget }) => {
//   const [widgetName, setWidgetName] = useState('');
//   const [chartType, setChartType] = useState('PieChart');

//   const handleSubmit = e => {
//     e.preventDefault();

//     const defaultData = getDefaultChartData(chartType);
//     onAddWidget(categoryId, {
//       id: Date.now(),
//       name: widgetName,
//       chartType,
//       data: defaultData.data,
//       options: { title: widgetName }
//     });

//     setWidgetName('');
//   };

//   const getDefaultChartData = type => {
//     switch (type) {
//       case 'PieChart':
//         return {
//           data: [
//             ['Category', 'Value'],
//             ['Sample A', 1],
//             ['Sample B', 1]
//           ]
//         };
//       case 'BarChart':
//         return {
//           data: [
//             ['Element', 'Density'],
//             ['Sample A', 8.94],
//             ['Sample B', 10.49],
//           ]
//         };
//       case 'LineChart':
//         return {
//           data: [
//             ['x', 'Sample A', 'Sample B'],
//             [0, 0, 0],
//             [1, 10, 5],
//             [2, 23, 15],
//             [3, 17, 9],
//             [4, 18, 10],
//             [5, 9, 5],
//             [6, 11, 3],
//             [7, 27, 19],
//           ]
//         };
//       default:
//         return {
//           data: [
//             ['Element', 'Value'],
//             ['Sample', 1]
//           ]
//         };
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="widget-form">
//       <div className="form-group">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Widget Name"
//           value={widgetName}
//           onChange={e => setWidgetName(e.target.value)}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <select
//           className="form-control"
//           value={chartType}
//           onChange={e => setChartType(e.target.value)}
//         >
//           <option value="PieChart">Pie Chart</option>
//           <option value="BarChart">Bar Chart</option>
//           <option value="LineChart">Line Chart</option>
//         </select>
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Add Widget
//       </button>
//     </form>
//   );
// };

// export default AddWidgetForm;
// AddWidgetForm.jsx
import React, { useState } from 'react';
import '../styles/AddWidgetForm.css'; // Ensure you create and import the CSS file

const AddWidgetForm = ({ categoryId, onAddWidget }) => {
  const [widgetName, setWidgetName] = useState('');
  const [chartType, setChartType] = useState('PieChart');

  const handleSubmit = e => {
    e.preventDefault();

    const defaultData = getDefaultChartData(chartType);
    onAddWidget(categoryId, {
      id: Date.now(),
      name: widgetName,
      chartType,
      data: defaultData.data,
      options: { title: widgetName }
    });

    setWidgetName('');
  };

  const getDefaultChartData = type => {
    switch (type) {
      case 'PieChart':
        return {
          data: [
            ['Category', 'Value'],
            ['Sample A', 1],
            ['Sample B', 1]
          ]
        };
      case 'BarChart':
        return {
          data: [
            ['Element', 'Density'],
            ['Sample A', 8.94],
            ['Sample B', 10.49],
          ]
        };
      case 'LineChart':
        return {
          data: [
            ['x', 'Sample A', 'Sample B'],
            [0, 0, 0],
            [1, 10, 5],
            [2, 23, 15],
            [3, 17, 9],
            [4, 18, 10],
            [5, 9, 5],
            [6, 11, 3],
            [7, 27, 19],
          ]
        };
      default:
        return {
          data: [
            ['Element', 'Value'],
            ['Sample', 1]
          ]
        };
    }
  };

  return (
    <form onSubmit={handleSubmit} className="widget-form">
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Widget Name"
          value={widgetName}
          onChange={e => setWidgetName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <select
          className="form-control"
          value={chartType}
          onChange={e => setChartType(e.target.value)}
        >
          <option value="PieChart">Pie Chart</option>
          <option value="BarChart">Bar Chart</option>
          <option value="LineChart">Line Chart</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Add Widget
      </button>
    </form>
  );
};

export default AddWidgetForm;
