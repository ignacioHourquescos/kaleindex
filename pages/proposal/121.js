import { useRouter } from 'next/router';
import { useState } from 'react'
import pp from '../../dataProposal/gallego'
import ss from './index.module.scss'
import Head from 'next/head'
// import Link from 'next/Link'


const Proposal = () => {
   const [page1, setPage1] = useState([true, false, false, false]);
   const [showIntro, setShowIntro] = useState(true);
   const [counter, setCounter] = useState(0);
   const router = useRouter();
   var categoryParams = router.query.slug;

   const triggerCounter = (indication) => {
      if (indication == "down" && counter == 0) {
         setShowIntro(true)
         return;
      }
      if (counter < 0) {
         setCounter(0);
         setActivePage(counter)
         return;
      }
      if (counter > 3) {
         setCounter(3);
         setActivePage(counter)
         return;
      }
      if (indication == "up") {
         setCounter(counter + 1);
         setActivePage(counter + 1)
      } else {
         setCounter(counter - 1);
         setActivePage(counter - 1);
      }
   }

   const setActivePage = (page) => {
      if (page == 0) { setCounter(0); setPage1([true, false, false, false]) };
      if (page == 1) { setCounter(1); setPage1([false, true, false, false]) };
      if (page == 2) { setCounter(2); setPage1([false, false, true, false]) };
      if (page == 3) { setCounter(3); setPage1([false, false, false, true]) };
   }


   return (<>
      <Head>
         <title>KALE</title>
         <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         <meta name="description" content="agencia creativa digital" />
         <meta property="og:title" content="kaleindex" />
         <meta property="og:description" content="agencia creativa digital" />
         <meta property="og:image" content="./kaleillustration.jpg" />
      </Head>
      {
         showIntro
            ?
            <div className={ss.intro}>
               <h2><h2 style={{ color: "#3CCD9D", display: "inline" }}>KALE</h2>INDEX</h2>
               <p>Combinamos innovación, lógica y diseño para crear productos digitales de alto valor agregado. Siempre abiertos a nuevos desafíos!</p>
               <button onClick={() => setShowIntro(false)}>VER PRESUPUESTO</button>
               {/* <button style={{border:"none", color:"#3CCD9D"}}><Link href={"../../index.js"}>OTROS TRABAJOS</Link></button> */}
            </div>
            :
            <div className={ss.container}>

               <div className={ss.container_menu}>
                  <div className={ss.navBar}>
                     {
                        1 == 1
                           ? <div className={ss.arrow_backwards} onClick={() => triggerCounter("down")}>{arrowLeft}</div>
                           : <>{arrowTransparent}</>
                     }

                     <div className={ss.title}>
                        <p>PRESUPUESTO</p>
                        <p><p style={{ color: "#3CCD9D", display: "inline" }}>KALE</p>INDEX</p>
                     </div>

                     {
                        counter == 0 || page1[1] == true || page1[2] == true
                           ? <div className={ss.arrow_forward} onClick={() => triggerCounter("up")}>{arrowRight}</div>
                           : <>{arrowTransparent}</>
                     }
                  </div>

                  <div className={ss.navMenu} >
                     <div style={page1[0] ? { borderBottom: "5px solid #3CCD9D" } : { borderLine: "none" }} onClick={() => setActivePage(0)}>intro</div>
                     <div style={page1[1] ? { borderBottom: "5px solid #3CCD9D" } : { borderLine: "none" }} onClick={() => setActivePage(1)}>El proyecto</div>
                     <div style={page1[2] ? { borderBottom: "5px solid #3CCD9D" } : { borderLine: "none" }} onClick={() => setActivePage(2)}>Etapas</div>
                     <div style={page1[3] ? { borderBottom: "5px solid #3CCD9D" } : { borderLine: "none" }} onClick={() => setActivePage(3)}>Presupuesto</div>
                  </div>
               </div>

               <div className={ss.container_detail}>
                  {
                     page1[0] ?
                        <div>
                           <h3> Nosotors</h3>
                           {pp.nosotros}
                           {/* <h3> Ustedes</h3>
               {pp.ustedes}  */}
                        </div>
                        : page1[1] ?
                           <div>
                              <h3>Alcance</h3>
                              {pp.alcance.resumen}
                              <h3>Detalle</h3>
                              {pp.alcance.detalle.map(item => <li>{item}</li>)}
                              <h3>Tecnico</h3>
                              {pp.alcance.tecnico.map(item => <li>{item}</li>)}
                           </div>
                           : page1[2] ?
                              <div>
                                 <h3> Investigacion ({pp.etapas.investigacionDuration})</h3>
                                 {pp.etapas.investigacion}
                                 <h3> Prototipado ({pp.etapas.prototipadoDuration})</h3>
                                 {pp.etapas.prototipado}
                                 <h3> Beta ({pp.etapas.betaDuration})</h3>
                                 {pp.etapas.beta}
                                 <h3> Lanzamiento ({pp.etapas.lanzamientoDuration})</h3>
                                 {pp.etapas.lanzamiento}
                              </div>
                              : page1[3] ?
                                 <div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><h3 style={{ display: "inline" }}> Investigacion</h3>{pp.presupuesto.investigacion}</div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><h3 style={{ display: "inline" }}> Diseño</h3>{pp.presupuesto.diseño}</div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><h3 style={{ display: "inline" }}> Desarollo</h3>{pp.presupuesto.desarollo}</div>
                                    <h3 style={{ borderTop: "1px solid grey", marginTop: "2rem" }}> Presupuesto Total</h3>
                                    ${pp.presupuesto.valor}
                                    <h3>NO incluye</h3>
                                    {pp.presupuesto.noIncluye.map(item => <li>{item}</li>)}
                                 </div>




                                 : ""
                  }

               </div>
            </div>
      }



   </>)
}

export default Proposal;


const arrowRight = <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M1.9831 2.41635L13.3371 10.2139L1.79153 17.7249L1.9831 2.41635Z" fill="white" stroke="#3CCD9D" stroke-width="2" />
</svg>


const arrowLeft = <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M13.4825 2.74795L1.93694 10.259L13.2909 18.0565L13.4825 2.74795Z" fill="white" stroke="#3CCD9D" stroke-width="2" />
</svg>

const arrowTransparent = <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
   <path d="M0.137742 9.99914L14.2674 19.703L14.5058 0.651922L0.137742 9.99914Z" fill="white" fill-opacity="0.01" />
   <path d="M13.4825 2.51065L1.93694 10.0217L13.2909 17.8192L13.4825 2.51065Z" stroke="#3CCD9D" stroke-opacity="0.01" stroke-width="2" />
</svg>


