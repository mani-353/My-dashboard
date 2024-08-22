import React from 'react';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';
import '../styles/Category.css'; // Ensure you create and import the CSS file

const Category = ({ category, onAddWidget, onRemoveWidget }) => {
  return (
    <div className="category-card">
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
        </div>
      </div>
      <div className="category-footer">
        <AddWidgetForm categoryId={category.id} onAddWidget={onAddWidget} />
      </div>
    </div>
  );
};

export default Category;
