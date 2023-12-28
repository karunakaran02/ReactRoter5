import { useContext } from 'react';
import './App.css';
import { Private } from './login/privateRoute';
import { Public } from './login/publicRoute';
import { UserContext } from './UserContext/UserContext';


function App() {

  const { hasToken } = useContext(UserContext)

  return (
    <div className='App'>
      {hasToken ?
        <Private />
        :
        <Public />
      }
    </div>
  );
}

export default App;
