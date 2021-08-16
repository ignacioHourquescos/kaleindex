import { useRouter } from 'next/router';
import {useState} from 'react'
import pp from '../../dataProposal/gallego'
import ss from './index.module.scss'


const Proposal = () =>{
   const [page1, setPage1] =useState([true, false, false, false]);
   const [counter, setCounter] = useState(0);
   const router = useRouter();
   var categoryParams = router.query.slug;

   const triggerCounter = (indication) =>{
      if(counter<0) {
         setCounter(0);
         setActivePage(counter)
         return;
      }
      if(counter>3){
         setCounter(3);
         setActivePage(counter)
         return;
      } 
      if (indication =="up") {
         setCounter(counter +1);   
         setActivePage(counter+1)
      }else{
         setCounter(counter-1); 
         setActivePage(counter-1);  
      } 
   }

   const setActivePage = (page) =>{ 
      if (page==0) {setCounter(0);setPage1( [true, false, false, false])};
      if (page==1) {setCounter(1);setPage1( [false, true, false, false])};
      if (page==2) {setCounter(2);setPage1( [false, false, true, false])};
      if (page==3) {setCounter(3);setPage1( [false, false, false, true])};
   }


   return(<>
      <title>KALE</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="agencia creativa digital" />
      <meta property="og:title" content="kaleindex" />
      <meta property="og:description" content="agencia creativa digital" />
      <meta property="og:image" content="./kaleillustration.jpg" />
   <div className={ss.container}>

      <div className={ss.container_menu}>
      <div className={ss.navBar}>
      {
         counter==3 || page1[1]==true ||page1[2]==true
         ?<div className={ss.arrow_backwards} onClick={()=>triggerCounter("down")}>{arrowLeft}</div>
         :<div />
      }
      <div className={ss.title}>
         <p>PRESUPUESTO</p>
         <p><p style={{color:"#3CCD9D", display:"inline"}}>KALE</p>INDEX</p>
      </div>
      {
          counter==0 || page1[1]==true ||page1[2]==true
         ?<div className={ss.arrow_forward} onClick={()=>triggerCounter("up")}>{arrowRight}</div>
         :<div />
      }
      </div>
      
      <div className={ss.navMenu} >
         <div style={page1[0] ? {borderBottom :"5px solid #3CCD9D"} : {borderLine:"none" }} onClick={()=>setActivePage(0)}>Intro</div>
         <div style={page1[1] ? {borderBottom :"5px solid #3CCD9D"} : {borderLine:"none" }} onClick={()=>setActivePage(1)}>El proyecto</div>
         <div style={page1[2] ? {borderBottom :"5px solid #3CCD9D"} : {borderLine:"none" }} onClick={()=>setActivePage(2)}>Etapas</div>
         <div style={page1[3] ? {borderBottom :"5px solid #3CCD9D"} : {borderLine:"none" }} onClick={()=>setActivePage(3)}>Presupuesto</div>
      </div>
      </div>
      
      <div className={ss.container_detail}>
      {
         page1[0]?
            <div>
               <h3> Nosotors</h3>
               {pp.nosotros}
               <h3> Ustedes</h3>
               {pp.ustedes} 
            </div>
         :page1[1]?
            <div>  
               <h3>Alcance</h3>
               {pp.alcance.resumen}
               <h3>Detalle</h3>
               {pp.alcance.detalle}
               <h3>Tecnico</h3>
               {pp.alcance.tecnico} 
            </div>
         :page1[2]?
            <div>
               <h3> Investigacion</h3>
               {pp.etapas.investigacion}
               <h3> Prototipado</h3>
               {pp.etapas.prototipado}
               <h3> Beta</h3>
               {pp.etapas.beta}
               <h3> Lanzamiento</h3>
               {pp.etapas.lanzamiento}
            </div>
         :page1[3]?
         <div>
               <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}><h3 style={{display:"inline"}}> Investigacion</h3>{pp.presupuesto.investigacion}</div>
               <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}><h3 style={{display:"inline"}}> Diseño</h3>{pp.presupuesto.diseño}</div>
               <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}><h3 style={{display:"inline"}}> Desarollo</h3>{pp.presupuesto.desarollo}</div>
               <h3 style={{borderTop:"1px solid grey", marginTop:"2rem"}}> Presupeusto Total</h3>
               ${pp.presupuesto.valor}

            </div>
         :""
      }
      
      </div>


      {categoryParams}




   </div>
   </>)
}

export default Proposal;


const arrowRight = <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.49485 1.47447L14.2367 10.2252L1.27986 18.6543L1.49485 1.47447Z" fill="white" stroke="#3CCD9D"/>
</svg>


const arrowLeft = <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9942 1.81859L1.03734 10.2477L13.7792 18.9984L13.9942 1.81859Z" fill="white" stroke="#3CCD9D"/>
</svg>


