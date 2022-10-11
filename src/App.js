import './App.scss';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row';
import Footer from "./components/Footer";
import requests from './config/Requests';


function App() {
  return (
    <div className="App">
            <Nav />

            <Banner />

            <Row title="Programmes originaux Netflix" fetchUrl={requests.fetchNetflixOriginals} isPoster={true} />
            <Row title="Tendances actuelles" fetchUrl={requests.fetchTrending}></Row>
            <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated}></Row>
            <Row title="Films d'animations" fetchUrl={requests.fetchAnimationMovies}></Row>
            <Row title="Films d'action" fetchUrl={requests.fetchActionMovies}></Row>
            <Row title="Comédies" fetchUrl={requests.fetchComedyMovies}></Row>
            <Row title="Films en famille" fetchUrl={requests.fetchFamilyMovies}></Row>
            <Row title="Films d'horreur" fetchUrl={requests.fetchHorrorMovies}></Row>
            <Row title="Films de guerre" fetchUrl={requests.fetchWarMovies}></Row>
            <Row title="Films d'aventure" fetchUrl={requests.fetchAdventuresMovies}></Row>
            <Row title="Films musicaux" fetchUrl={requests.fetchTVMovies}></Row>

            <Footer />

    </div>
  );
}

export default App;
