
import './App.css';
import Card from './components/Card';

function App() {
  const message="Welcome to course";
  return (
    <>
      <h1> App</h1>
      <p>{message}</p>
      <Card/>
    </>
  );
}

export default App;
