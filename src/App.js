/* eslint-disable */
import 'assets/css/bootstrap.min.css';

import NavBar from 'components/NavBar';
import Header from 'components/Hero';
import Type from 'components/Type';
import ChooseUs from 'components/ChooseUs';
import Articles from 'components/Articles';
import Support from 'components/Support';
import GetStarted from 'components/GetStarted';
import Footer from 'components/Footer';

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Type />
      <ChooseUs />
      <Articles />
      <Support />
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
