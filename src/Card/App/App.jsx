import SectionCar from "../SectionCar/SectionCar"
import IconSedan from "../../../public/icon-sedans.svg"
import IconSuvs from "../../../public/icon-suvs.svg"
import IconLuxury from "../../../public/icon-luxury.svg"
import './App.css'

const App = () =>{
    return(
        <section className="container">
        <SectionCar
            titulo="SEDANS"
            texto="Chose a sedan for its affordability and excellent fuel enconomy.Idal for crusing in the city or on your next road trip"
            image={IconSedan}
            classe="sedan"
        />
        <SectionCar
            titulo="SUVS"
            texto="Take an SUV for its spacious interior, power and versatilty. Perfect for your next family vocation and off-road adventures"
            image={IconSuvs}
            classe="suv"
        />
        <SectionCar
            titulo="LUXURY"
            texto="Cruise in the best car brands without the bloat prices. Enjoy the enchanced comfort of a luxury retal an arrive in style."
            image={IconLuxury}
            classe="luxury"
        />
        </section>
    )
}

export default App