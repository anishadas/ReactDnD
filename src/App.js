import './App.css';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Description from './components/Description';
import PartsSelection from './components/PartsSelection';
import Assembly from './components/Assembly';
import FinalView from './components/FinalView';


function App() {
  return (
    <BrowserRouter>
    
        <Routes>
          <Route path='/' exact element={<Description />} />
          <Route path='/select-parts' element={<PartsSelection />} />
          <Route path="/assembly" element={<Assembly/>} />
        <Route path="/final-view" element={<FinalView />} />
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;
