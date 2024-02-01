import HeaderPart from "./headerr/header";
import Partner from "./partners/partner";
import Card from "./cards/cards";
import Comments from "./comments/comments";

function Homepage() {
  return(
    <div className='HomePAge'>
      <HeaderPart></HeaderPart>
      <Partner></Partner>
      <Card></Card>
      <Comments></Comments>

    </div>
  )
}

export default Homepage;