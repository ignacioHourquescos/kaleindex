import ss from './Header.module.scss'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Header = () => {

   return (
      <>

         <div className={ss.desktopview}>
            <div className={ss.container}>
               <div className={ss.herokale}>
               </div>
               <div className={ss.herotitle}>

                  <div className={ss.letter} style={{ transform:"rotate(-90deg)",animation: "fadeInDown",  animationDuration: "1.4s"}}>X</div>
                  <div className={ss.letter} style={{ transform:"rotate(-90deg)",animation: "fadeInDown",  animationDuration: "1.3s"}}>E</div>
                  <div className={ss.letter} style={{ transform:"rotate(-90deg)",animation: "fadeInDown",  animationDuration: "1.2s"}}>D</div>
                  <div className={ss.letter} style={{ transform:"rotate(-90deg)",animation: "fadeInDown",  animationDuration: "1.1s"}}>N</div>
                  <div className={ss.letter} style={{ transalateX:"(20px)", textAlign:"center", transform:"rotate(-90deg)",animation: "fadeInDown",  animationDuration: "0.5s"}}>I</div>
                  <span className={ss.green}>
                     <div className={ss.letter} style={{ transform:"rotate(-90deg)",animation: "fadeInDown",  animationDuration: "0.9s"}}>E</div>
                     <div className={ss.letter} style={{ transform:"rotate(-90deg)",animation: "fadeInDown",  animationDuration: "0.8s"}}>L</div>
                     <div className={ss.letter} style={{ transform:"rotate(-90deg)",animation: "fadeInDown",  animationDuration: "0.7s"}}>A</div>
                     <div className={ss.letter} style={{ transform:"rotate(-90deg)",animation: "fadeInDown",  animationDuration: "0.6s"}}>K</div>
                  </span>

               </div>
            </div>
            <div className={ss.left}>
               <p className={ss.herodesc}>Combinamos <span className={ss.green}>innovación</span>, <span className={ss.green}>lógica</span> y <span className={ss.green}>diseño</span> para crear productos digitales de alto valor agregado. Siempre abierto a nuevos desafios!</p>
            </div>
         </div>
      </>
   )

}

export default Header;