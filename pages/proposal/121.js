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
      if (page==0) setPage1( [true, false, false, false]);
      if (page==1) setPage1( [false, true, false, false]);
      if (page==2) setPage1( [false, false, true, false]);
      if (page==3) setPage1( [false, false, false, true]);
   }


   return(<div className={ss.container}>

      <div className={ss.navBar}>
      {counter<=0?"":<div className={ss.arrow_backwards} onClick={()=>triggerCounter("down")}>{arrowLeft}</div>}
      <div className={ss.title}>
         <p>Presupuesto</p>
         <p>KALEINDEX</p>
      </div>
      {counter>=3?"":<div className={ss.arrow_forward} onClick={()=>triggerCounter("up")}>{arrowRight}</div>}
      </div>
      
      <div className={ss.navMenu} >
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


const arrowRight = <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.49485 1.47447L14.2367 10.2252L1.27986 18.6543L1.49485 1.47447Z" fill="white" stroke="#3CCD9D"/>
</svg>


const arrowLeft = <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9942 1.81859L1.03734 10.2477L13.7792 18.9984L13.9942 1.81859Z" fill="white" stroke="#3CCD9D"/>
</svg>
