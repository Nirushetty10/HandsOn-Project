import Container from '@mui/material/Container';
import Nav from './components/Nav';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';
import ChooseUs from './components/WhyChooseUs';
import Home from './components/Home';

function App() {

  return (
    <Container sx={{width : "100%"}}>
      <Nav />
      <Home />
      <Highlights />
      <ChooseUs />
      <Pricing />
      <FAQ />
      <Footer />
    </Container>
  )
}

export default App
