import logo from './logo.svg';
import './App.css';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import Button from "react-bootstrap/Button";

function handleLogin(instance) {
  instance.loginRedirect(loginRequest).catch(e => {
    console.error(e);
});
}

function App() {
  const { instance } = useMsal();
  return (
    <div className="App">
     <Button variant="secondary" className="ml-auto" onClick={() => handleLogin(instance)}>Sign in using Popup</Button>
    </div>
  );
}

export default App;
