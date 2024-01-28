import HeaderPart from "./headerr/header";
import Partner from "./partners/partner";
import Card from "./cards/cards";


function Homepage() {
  return(
    <div className='HomePAge'>
      <HeaderPart></HeaderPart>
      <Partner></Partner>
      <Card></Card>
    </div>
  )
}

export default Homepage;