import logo from './logo.svg';
import './App.css';
import LoginSignup  from './Components/LoginSignup/LoginSignup';

function App() {

  function submitFunction(){
    alert("submitted");
  }


  return (
    <div className="App">
      <LoginSignup/>

    </div>
  );
}

export default App;
