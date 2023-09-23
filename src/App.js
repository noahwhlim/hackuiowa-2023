import logo from './logo.svg';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='h-screen'>
      <div className='h-fit'>
        <Header />
      </div>
      <div className='h-5/6'>
        <Body />
      </div>
      <div className='h-fit'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
