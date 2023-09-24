import logo from './logo.svg';
import { Header } from './components/Header';
import Office from './components/Office';
import { Body } from './components/Body';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='flex flex-col h-screen'>
        <Header />
        <Office />
        <Body />
        <Footer />

    </div>
  );
}

export default App;
