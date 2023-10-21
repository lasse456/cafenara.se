import "./dealsite.css";
import HamburgerMenu from "./navbar";
import { Footer } from "./App";

function DealSite() {
  return (
    <>
      <HamburgerMenu />
      <div className="dealsite-section">
        <div className="dealsite-container">
          <div className="dealsite-content">
            <h2>Kaffeprenumeration - för dig som älskar kaffe</h2>
            <p>
              Föreläsningar, kurslitteratur och långa dagar? Vad sägs om kaffe
              ”on the go”? <br></br>
              <br></br>Som student räknas varje krona. Därför erbjuder vi på
              Café Nära kaffeprenumerationer så att du alltid ska ha möjlighet
              att köpa gott kaffe av hög kvalitet till ett bra pris.<br></br>
              <br></br>Vi värnar om våra gäster, och vi bryr oss om ert kaffe!
            </p>
          </div>

          <img alt="index" src="kkaffe.jpeg"></img>
        </div>

        <div className="dealsite-container2">
          <img alt="index" src="kkaffe.jpeg"></img>
          <div className="dealsite-content2">
            <h2>Hur fungerar en kaffeprenumeration?</h2>
            <p>
              Vi erbjuder kaffeprenumerationer i olika varianter så att du
              säkert ska kunna hitta en deal som passar just dig. Oavsett vad du
              gillar så hittar du det här! <br></br> <br></br>Det enda du
              behöver göra är att välja vilket kaffeabonnemang du vill ha, fråga
              vår trevliga personal om ett kaffekort och börja njuta av ditt
              kaffe! <br></br>
              <br></br> Vi har självklart ingen bindningstid eller dolda
              avgifter på våra abonnemang.
            </p>
          </div>
        </div>

        <div className="bottom-div">
          <h1 className="bottom-heading">Våra kaffeprenumerationer</h1>
          <div className="deal-div">
            <p>Kaffe-student</p>
            <p>249kr/månad</p>
            <p>Tre koppar om dagen!</p>
          </div>

          <p>
            Vårt Kaffet är 100% Arabica och kommer från Latinamerika och
            Östafrika. Bönorna är odlade enligt reglerna för ekologisk
            produktion. Smaken är mellanfyllig med god syrlighet och mild
            eftersmak.<br></br>
            <br></br>{" "}
            <strong>
              I denna superdeal ingår även våra teer. Hämta och njut av din
              dryck…
            </strong>
          </p>
        </div>
        <div className="bottom-div">
          <div className="deal-div">
            <p>Kaffe-Premium</p>
            <p>399kr/månad</p>
            <p>Tre koppar om dagen!</p>
          </div>

          <p>
            För dig som gillar att lyxa till det ofta. Njut av ALLA våra
            kaffedrycker från menyn, även smaksättningar ingår.<br></br>
            <br></br> Vår Fairtrade-certifierade Espresso är gjort på bönor från
            Peru/Honduras och Tanzania. Det är en mörkrostad, mellanfyllig
            espresso med en bra kombination av sötma och syrlighet som ger en
            behaglig och lite fruktig eftersmak. <br></br>
            <br></br>{" "}
            <strong>
              I denna superdeal ingår alla våra varma drycker. Hämta och njut...
            </strong>
          </p>
        </div>
        <div className="bottom-image">
          <img src="variations.png"></img>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default DealSite;
