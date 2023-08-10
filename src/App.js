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
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route path='/' exact component={<Description />} />
          <Route path='/select-parts' component={<PartsSelection />} />
          <Route path="/assembly">
            <Assembly />
          </Route>
          <Route path="/final-view">
            <FinalView  />
          </Route>
        </Routes>
      </DndProvider>
    </BrowserRouter>
  );
}

export default App;
