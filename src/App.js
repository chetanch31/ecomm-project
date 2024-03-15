import './App.css';
import Navbar from './components/Navbar';
import Carousel
 from './components/Carousel';
function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <h1>Featured Products</h1>
        <p1>Explore and disocver a variety of products</p1>
      </div>

      <div style={{paddingTop: '30px'}}>
        <Carousel /> 
      </div>
    </div>
  );
}

export default App;
