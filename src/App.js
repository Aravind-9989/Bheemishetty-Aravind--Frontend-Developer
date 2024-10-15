import './App.css';
import DappSection from './FigmaDesign/dragbox';
import AboutEthAi from './FigmaDesign/features';
import Footer from './FigmaDesign/footerpage';
import Navbar from './FigmaDesign/mainpage';
import Question from './FigmaDesign/naire';
import Roadmaps from './FigmaDesign/Roadmap';
import Container from './FigmaDesign/secondcontainer';
import Tokenomics from './FigmaDesign/tokenomics';

function App() {
  return (
    <div>
      <Navbar/>
      <Container/>
      <AboutEthAi/>
      <Tokenomics/>
      <Roadmaps/>
      <Question/>
      <DappSection/>
      <Footer/>
    </div>
  );
}

export default App;
