import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import MenuSingle from './MenuSingle';

function App() {
  return (
    <div className="App">
      {/* Step1 */}
      <Header></Header>
      {/* ADstep 9*/}
      <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='menuView/:id' element={<MenuSingle></MenuSingle>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
