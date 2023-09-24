import logo from './logo.svg';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='flex flex-col h-full' id="gameBacking">
          <div>
            <Header />  
            <Body />
          </div>
            <Footer />
          </div>
  );
}

export default App;
