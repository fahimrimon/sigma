import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Components/Routes/router';

function App() {
  return (
    <div className='bg-gray-100 overflow-x-hidden'>
      <RouterProvider router={router}>
        
      </RouterProvider>
    </div>
  );
}

export default App;
