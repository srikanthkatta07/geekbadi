import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import About from '../About/About';

function App() {
  return (
    <main className="App">
      <Header></Header>
      <main className="block">
        <Home></Home>
        <About></About>
      </main>
      <Footer></Footer>
    </main>
  );
}

export default App;
