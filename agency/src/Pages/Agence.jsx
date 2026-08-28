import AgenceHero from "../Components/AgenceCom/AgenceHero";
import AgenceMiddle from "../Components/AgenceCom/AgenceMiddle";
import AgenceBottom from "../Components/AgenceCom/AgenceBottom";
import Navbar from "../Components/Navigation/Navbar";
import Footer from "../Components/Footer/Footer.jsx";

const Agence = () => {
  return (
    <main>
      <Navbar />
      <AgenceHero />
      <AgenceMiddle />
      <AgenceBottom />
      <Footer />
    </main>
  );
};

export default Agence;
