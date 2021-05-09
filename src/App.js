import React,{useState} from 'react';
import './App.css';
import NavigationSidebar from '../src/Components/NavigationSidebar'
import NavigationTopbar from '../src/Components/NavigationTopbar'
import Main from '../src/Components/Main'
import './css/style.css'
import './font/fontawesome/css/all.css';
import {ToastProvider} from "react-toast-notifications";

function App() {

  const [mode, setMode] = useState('settings');

  return (
      <ToastProvider placement='bottom-right' autoDismiss={true} >
        <div style={{width: "100vw", height: "100vh", overflowX: "hidden", overflowY: "hidden"}}>

            <section id="page">
              <header>
                  <NavigationTopbar
                    setMode={setMode}
                  />
              </header>
              <nav>
                <NavigationSidebar
                  setMode={setMode}
                  mode={mode}
                />
              </nav>
              <main>
                <Main
                  mode={mode}
                  setMode={setMode}
                />
              </main>
              <footer>

              </footer>
            </section>
        </div>
      </ToastProvider>
  );
}

export default App;
