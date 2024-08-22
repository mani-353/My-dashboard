import React from 'react';
import { Chart } from 'react-google-charts';
import '../styles/Widget.css'; // Ensure you create and import the CSS file

const Widget = ({ widget, onRemove }) => {
  const chartOptions = {
    title: widget.name,
    ...widget.options,
  };

  return (
    <div className="widget-card">
      <div className="widget-card-body">
        <button onClick={onRemove} className="btn btn-danger btn-sm float-right remove-btn">
          X
        </button>
        <h5 className="widget-title">{widget.name}</h5>
        <Chart
          chartType={widget.chartType}
          data={widget.data}
          options={chartOptions}
          width="100%"
          height="300px"
        />
      </div>
    </div>
  );
};

export default Widget;
