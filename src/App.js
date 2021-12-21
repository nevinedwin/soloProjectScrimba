import './App.css';
import Content from './Components/Content/Content';
import Navbar from './Components/Navbar/Navbar';
import data from './data'

function App() {
  const eachContent = data.map((obj) => {
    return (<Content key={obj.id} {...obj} />)
  });

  return (
    <div className="App">
      <Navbar />
      <section className='content-section'>
        {eachContent}
      </section>
    </div>
  );
}

export default App;
