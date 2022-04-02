import Container from 'components/container';
import Footer from 'components/footer';
import Header from 'components/header';
import HeroBanner  from 'components/hero-banner';
import 'library/styles/index.scss';

function App() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Container/>
      <Footer/>
    </>
  );
}

export default App;
