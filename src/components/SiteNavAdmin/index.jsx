import { NavLinks } from "./navLinks"
import Logo from '../../assets/origem.png'
import { SignOut } from "@phosphor-icons/react"


import { Container, NavLink ,NavLinkContainer,Footer} from "./styles"
import {useUser} from '../../hooks/UserContent'
import { useResolvedPath } from "react-router-dom"

export function SiteNavAdmin(){ 
    const {logout} = useUser()
    const  {pathname} = useResolvedPath()



    return(
        <Container>
             <img src={ Logo } alt="logo"/>
             <NavLinkContainer>
             { NavLinks.map((link) =>(

                <NavLink 
                 key={link.id}
                 to={link.path}
            
               $isActive={pathname.includes(link.path)} 
                 >
                             { link.icon}
  
                 <span>  { link.label} </span> 
                </NavLink>

             )) }

             </NavLinkContainer>
             <Footer>
                <NavLink  to='/login' onClick={logout}>
                    <SignOut/>
                  <span>sair </span>
                </NavLink>
             </Footer>
        </Container>
    )

 }