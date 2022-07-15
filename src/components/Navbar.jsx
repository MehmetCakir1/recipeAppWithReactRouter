import {Link} from "react-router-dom"
import recipe from "../assets/recipe.png"
import Nav from "../components/NavbarStyled"
import {Ul,Logo,Li,Div,Span,MenuLink,Img} from "../components/NavbarStyled"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react"

const Navbar = () => {

  const [isVisible,setIsVisible]=useState(false)
  return (
    <Nav justify="space-between">
    <Div justify="space-between">
      <Logo to="/home"><Img src={recipe}  alt=""/></Logo>
      <Span onClick={()=>setIsVisible(!isVisible)} ><GiHamburgerMenu/></Span> 
    </Div>
    <Ul isVisible={isVisible} setIsOpen={setIsVisible}>
      <Li> <MenuLink to="/home">Home</MenuLink></Li>
      <Li> <MenuLink to="/about">About</MenuLink></Li>
      <Li> <MenuLink to="/" onClick={()=>sessionStorage.clear()}>Logout</MenuLink></Li>
    </Ul>
    </Nav>
    
  )
}

export default Navbar


