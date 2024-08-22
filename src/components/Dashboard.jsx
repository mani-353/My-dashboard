// src/components/Dashboard.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchWidget from './SearchWidget';
import Category from './Category';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addWidget, removeWidget } from '../redux/actions';

const Dashboard = () => {
  const categories = useSelector((state) => state.dashboard.categories);
  const dispatch = useDispatch();

  const handleAddWidget = (categoryId, widget) => {
    dispatch(addWidget(categoryId, widget));
  };

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch(removeWidget(categoryId, widgetId));
  };

  return (
    <div style={{ width: '93rem' }}>
      <ToastContainer />
      <SearchWidget />

      {categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          onAddWidget={handleAddWidget}
          onRemoveWidget={handleRemoveWidget}
        />
      ))}

    </div>
  );
};

export default Dashboard;
