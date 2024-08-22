import widgetData from '../widgetdata.json';

const initialState = {
    categories: widgetData.categories || [],   // Ensure categories are present
};

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_WIDGET':
            return {
                ...state,
                categories: state.categories.map((category) =>
                    category.id === action.payload.categoryId
                        ? {
                            ...category,
                            widgets: [
                                ...category.widgets,
                                action.payload.widget, // Use the widget object from the payload
                            ],
                        }
                        : category
                ),
            };
        case 'REMOVE_WIDGET':
            return {
                ...state,
                categories: state.categories.map((category) =>
                    category.id === action.payload.categoryId
                        ? {
                            ...category,
                            widgets: category.widgets.filter(
                                (widget) => widget.id !== action.payload.widgetId
                            ),
                        }
                        : category
                ),
            };
        default:
            return state;
    }
};

export default dashboardReducer;
