// src/App.jsx
import React from 'react';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Dashboard />
      </div>
    </Provider>
  );
}

export default App;

// // src/App.jsx
// import React from 'react';
// import Dashboard from './components/Dashboard';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <Provider store={store}>
//       <div className="App">
//         <Dashboard />
//       </div>
//     </Provider>
//   );
// }

// export default App;
