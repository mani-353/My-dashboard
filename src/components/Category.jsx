import React, { useState } from 'react';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';
import SlidingWindow from './SlidingWindow';
import '../styles/Category.css';

const Category = ({ category, onAddWidget, onRemoveWidget }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  const handleOpenWindow = () => {
    setIsWindowOpen(true);
  };

  const handleCloseWindow = () => {
    setIsWindowOpen(false);
  };

  return (
    <div className="category-card" style={{ width: '90rem' }}>
      <div className="category-header">
        <h5>{category.name}</h5>
      </div>
      <div className="category-body">
        <div className="widget-container">

          {category.widgets.map((widget) => (
            <Widget
              key={widget.id}
              widget={widget}
              onRemove={() => onRemoveWidget(category.id, widget.id)}
            />
          ))}
          <button onClick={handleOpenWindow} className="widget-card d-flex justify-content-center align-items-center">
            <div className="text-dark">
              + Add Widget
            </div>
          </button>
        </div>
        <SlidingWindow isOpen={isWindowOpen} onClose={handleCloseWindow}>
          <AddWidgetForm
            categoryId={category.id}
            onAddWidget={(id, widgetData) => {
              onAddWidget(id, widgetData);
              handleCloseWindow();
            }}
          />
        </SlidingWindow>
      </div>
    </div >
  );
};

export default Category;
