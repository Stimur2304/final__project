import HeaderPart from "./headerr/header";
import Partner from "./partners/partner";
import Card from "./cards/cards";
import Comments from "./comments/comments";
import MyComponent from "./footer/footer";

function Homepage() {
  return(
    <div className='HomePAge'>
      <HeaderPart/>
      <Partner></Partner>
      <Card></Card>
      <Comments></Comments>
      <MyComponent/>
    </div>
  )
}

export default Homepage;