import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Layout from './components/Layout';
import category from './data/category';
import InsertNews from'./components/InsertNews';
import ReadNews from './components/ReadNews';
import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
<Routes>
  <Route path="/" element={
  <Layout category={category}/>}/>
  <Route path="/category/:cat_id" element={
  <Layout category={category}/>}/>
  <Route path="/insert" element={  <InsertNews/>}/>
  <Route path="/read/:id" element={  <ReadNews/>}/>
</Routes>
    
    </div>
  );
}

export default App;
