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
         console.log("aca esta counter de adelante "+counter)
         setActivePage(counter)
         return;
      }
      if(counter>3){
         setCounter(3);
         console.log("aca esta counter de adelante "+counter)
         setActivePage(counter)
         return;
      } 
      if (indication =="up") {
         const aux = counter +1;
         console.log("aca esta counter de adelante "+counter)
         setCounter(counter +1);   
         setActivePage(counter+1)
      }else{
         console.log("aca esta counter de atras "+counter)
         setCounter(counter-1); 
         setActivePage(counter-1);  
      } 
   }

   const setActivePage = (page) =>{ 
      if (page==0) setPage1( [true, false, false, false]);
      if (page==1) setPage1( [false, true, false, false]);
      if (page==2) setPage1( [false, false, true, false]);
      if (page==3) setPage1( [false, false, false, true]);
   }


   return(<div className={ss.container}>

      <h1 className={ss.section}>
         Presupuesto
      </h1>
      {counter>=3
      ?
      ""
      :
      <div className={ss.arrow_forward} onClick={()=>triggerCounter("up")}>adelante</div>
      }
      {counter<=0
      ?
      ""
      :
      <div className={ss.arrow_backwards} onClick={()=>triggerCounter("down")}>atrras</div>
      }
      
      
      <div className={ss.navBar} >
         <div style={page1[0] ? {borderBottom :"5px solid black"} : {borderLine:"none" }} onClick={()=>setActivePage(0)}>Intro</div>
         <div style={page1[1] ? {borderBottom :"5px solid black"} : {borderLine:"none" }} onClick={()=>setActivePage(1)}>El proyecto</div>
         <div style={page1[2] ? {borderBottom :"5px solid black"} : {borderLine:"none" }} onClick={()=>setActivePage(2)}>Etapas</div>
         <div style={page1[3] ? {borderBottom :"5px solid black"} : {borderLine:"none" }} onClick={()=>setActivePage(3)}>Presupuesto</div>
      </div>



      {categoryParams}
      {pp.ustedes}



   </div>)
}

export default Proposal;