import './styles//App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import AppContainer from './components/AppContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <AppContainer />
      <Footer />
    </div>
  );
}

export default App;
