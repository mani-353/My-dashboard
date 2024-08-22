import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';

const SearchWidget = () => {
  const [query, setQuery] = useState('');

  const widgets = useSelector(state =>
    state.dashboard.categories.flatMap(category => category.widgets)
  );

  const filteredWidgets = useMemo(() => {
    const trimmedQuery = query.trim().toLowerCase();
    if (!trimmedQuery) {
      return [];
    }
    return widgets.filter(widget =>
      widget.name.toLowerCase().includes(trimmedQuery)
    );
  }, [query, widgets]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div style={{ marginLeft: '30rem', marginTop: '20px', marginBottom: '20px', maxWidth: '700px' }}>
      <input
        type="text"
        className="form-control"
        placeholder="Search Widgets"
        value={query}
        onChange={handleChange}
      />
      {filteredWidgets.length > 0 ? (
        <ul className="list-group mt-2">
          {filteredWidgets.map(widget => (
            <li key={widget.id} className="list-group-item">
              {widget.name}
            </li>
          ))}
        </ul>
      ) : (
        query && <p className="mt-2 text-muted">No widgets found</p>
      )}
    </div>
  );
};

export default SearchWidget;
