import HamburgerMenu from "./navbar";
import "./catering.css";
import { Footer } from "./App";

function Catering() {
  return (
    <div>
      <HamburgerMenu />
      <div className="catering-container">
        <img src="cat.jpg"></img>
        <h1 className="catering-heading">
          Catering till frukost, lunch och fika
        </h1>
        <p className="catering-desc1">
          Vi kan hjälpa dig att lösa goda frallor och nybryggt kaffe till
          frukostmötet, matiga sallader och grillade mackor till lunchen på
          kontoret eller krämig morotskaka och andra delikatesser för att piffa
          upp fikastunden.
        </p>

        <p className="catering-desc2">
          Vi erbjuder det mesta från vår ordinarie meny som catering, skulle ni
          önska lägga till eller plocka bort ska vi göra vårt yttersta för att
          möta era önskemål. Vi tillagar och förbereder alltid er beställning på
          kaféet, så att det är dagsfärskt, gott och smakrikt. Förfrågan skickas
          via formuläret nedan, vi återkommer me en bekräftelse när det är
          mottaget. Du kan även ta kontakt med vår trevliga personal på kaféet
          så hjälper vi er. Beroende på tillfälle kan vi även assistera er med
          leverans vid behov. Vi ser fram emot att servera dig!
        </p>

        <p className="sub-heading-catering">Beställningsvillkor</p>

        <p>
          Beställning av frukost och fika görs senast kl.10:00 dagen innan.
          Beställning av lunch, middag, bufféer görs senast kl. 10:00 2dagar
          innan.
        </p>

        <p className="sub-heading-catering">Leveransvillkor</p>
        <p>
          Café nära erbjuder utleverans vid beställning för över 10personer och
          enligt ett fast tidsschema. Tiderna är ”senast på plats” och i mån av
          tillgång till lokalen ni önskar. Leveranstider: 08:00-18:00.Kom med
          förslag!
        </p>

        <p className="sub-heading-catering">Beställning och fakturering </p>
        <p>
          Detta beställningsunderlag skickas till info@cafenara.se som bekräftar
          din beställning. Detta underlag utgör också er orderbekräftelse och
          mailas av dig som beställare till fakturaansvarig på aktuell
          akademi/avdelning. Café nära erbjuder e-faktura och fakturerar enligt
          uppgifterna i detta beställningsformulär. Prislista from 2023-11-01
          tillvsvidare samt reservation för att någon råvara behöver bytas ut
          pga tillgång.
        </p>
      </div>

      <div className="elements-div">
        <div className="catering-card">
          <p className="cc-heading">FRUKUST KL 8-11</p>
          <h3>FRALLA: källarfranska, ost, sallad, paprika</h3>
          <p className="catering-card-elm">Ost 20:-</p>
          <p className="catering-card-elm">Ost & Skinka 25:-</p>
          <p className="catering-card-elm">Ost & Kalkon 25:-</p>
          <p className="catering-card-elm">Yoghurt med granola 30:-</p>
          <p className="cc2-heading">VARMA DRYCKER</p>
          <h3>Bryggkaffe svart 20:-</h3>
          <p className="catering-card-elm">Med baristamjölk</p>
          <p className="catering-card-elm">Med laktosfri mjölk-</p>
          <p className="catering-card-elm">Med havredryck-</p>

          <p className="cc2-heading">TE 15:-</p>
          <p className="catering-card-elm">Earl Grey</p>
          <p className="catering-card-elm">English Breakfast</p>
          <p className="catering-card-elm">Green Peach</p>
          <p className="catering-card-elm">Red Berry</p>
        </div>

        <div className="catering-card">
          <p className="cc-heading">LUNCH KL 11-14</p>
          <h3>Pastasallad, välj mellan olika smaker. 80:-</h3>
          <p className="catering-card-elm">Räksallad</p>
          <p className="catering-card-elm">Kycklingsallad</p>
          <p className="catering-card-elm">Caesarsallad</p>
          <p className="catering-card-elm">Fetaostsallad</p>
          <h3>Ciabatta-</h3>
          <p className="catering-card-elm">Kyckling & mozzarella 55:-</p>
          <p className="catering-card-elm">Salami & brie 55:-</p>
          <p className="catering-card-elm">Tomat & mozzarella 45:-</p>
          <p className="catering-card-elm">
            Baguette med kycklingröra/skagenröra/körbullar &
            rödbetssallad/falafel eller vegetarisk 55:-
          </p>
          <p className="cc2-heading">KALLA DRYCKER (till lunchen)</p>
          <h3>Läsk 15:-</h3>
          <p className="catering-card-elm">Coca cola</p>
          <p className="catering-card-elm">Coca cola zero</p>
          <p className="catering-card-elm">Pepsi</p>
          <p className="catering-card-elm">Pepsi Max</p>
          <p className="catering-card-elm">7 Up</p>
          <p className="catering-card-elm">Fanta</p>
          <h3>Kolsyrat vatten (olika smaker) 15:--</h3>
          <p className="catering-card-elm">Naturell</p>
          <p className="catering-card-elm">Citron</p>
          <p className="catering-card-elm">Päron</p>
        </div>

        <div className="catering-card">
          <p className="cc-heading">BAKVERK/FIKA</p>
          <h3>Cookie 20:-</h3>
          <p className="catering-card-elm">Ljus choklad</p>
          <p className="catering-card-elm">Mörk choklad</p>

          <h3>Muffins 20:-</h3>
          <p className="catering-card-elm">Blåbär</p>
          <p className="catering-card-elm">Choklad</p>

          <p className="catering-card-elm">Kanelbulle 15:-</p>
          <p className="catering-card-elm">Chokladboll 15:-</p>
          <p className="catering-card-elm">Morotskaka 20:-</p>
          <p className="catering-card-elm">Kladdkaka 20:-</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Catering;
