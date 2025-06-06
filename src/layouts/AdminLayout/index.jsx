   import { Outlet, Navigate } from "react-router-dom";
import { SiteNavAdmin } from "../../components";
import { Container } from "./styles";
   
   
   
   
   export function AdminLayout(){
    const {admin: isAdmin} = JSON.parse(
      localStorage.getItem('devburger:userData'),
   )

    return isAdmin ? (

   <Container>
   <SiteNavAdmin/>
   
  
   <main>
      <section>
      <Outlet/>
      </section>
   </main>
   </Container>
       ) : (<Navigate to = "login"/>

    )
   }