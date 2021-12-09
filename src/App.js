
import './App.css';
import { Header } from './components/Layout/Header';
import { TabsComponent } from './components/UI/TabsComponent';

function App() {
  return (
    <>
      <Header />
    <main>
        <h1>Puro Team Builder</h1>
        <TabsComponent />
    </main>
    </>

  );
}

export default App;
