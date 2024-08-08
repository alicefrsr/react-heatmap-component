// import './App.css';
import './AppBackend.css';
import HeatmapRandom from './components/random/HeatmapRandom';
import HeatmapCustom from './components/custom/HeatmapCustom';
import HeatmapBackend from './components/backend/HeatmapBackend';

function App() {
  return (
    <>
      <div className='container'>
        <h1>What's this?</h1>
        <p>
          {' '}
          Just some experiments with a custom-made heatmap to see what I can do
          with it.
        </p>

        <HeatmapRandom />
        <HeatmapCustom />
        <HeatmapBackend />
      </div>
    </>
  );
}

export default App;
