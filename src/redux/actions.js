export const addWidget = (categoryId, widget) => {
  return {
    type: 'ADD_WIDGET',
    payload: { categoryId, widget },
  };
};

export const removeWidget = (categoryId, widgetId) => {
  return {
    type: 'REMOVE_WIDGET',
    payload: { categoryId, widgetId },
  };
};
