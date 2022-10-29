import './App.css';
import  NavBar  from './components/NavBar';
import LoginForm from './components/LoginForm';


export function App() {
  return (
    <div className="App">
     <h1> Sneaker & Clothing Shop </h1>
      <NavBar />
      <LoginForm />
   </div>
  );
}

export default App;
