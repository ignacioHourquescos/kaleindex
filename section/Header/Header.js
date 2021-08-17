import ss from './Header.module.scss'
import "animate.css/animate.min.css";
import { useState } from 'react'

const Header = () => {

   const [showLogo, setShowLogo] = useState(false);

   const titleLoader = () => {
      setTimeout(() => {
         setShowLogo(true);
      }, 1000);
   }

   titleLoader();
   return (
      <>

         <div className={ss.desktopview}>
            <div className={ss.container}>
               <div className={ss.herokale}>
               </div>
               {
                  showLogo
                     ?
                     <>
                        <div className={ss.herotitle}>
                           <div className={ss.letter} style={{ transform: "rotate(-90deg)", animation: "fadeInDown", animationDuration: "1.4s" }}>X</div>
                           <div className={ss.letter} style={{ transform: "rotate(-90deg)", animation: "fadeInDown", animationDuration: "1.3s" }}>E</div>
                           <div className={ss.letter} style={{ transform: "rotate(-90deg)", animation: "fadeInDown", animationDuration: "1.2s" }}>D</div>
                           <div className={ss.letter} style={{ transform: "rotate(-90deg)", animation: "fadeInDown", animationDuration: "1.1s" }}>N</div>
                           <div className={ss.letter} style={{ transform: "rotate(-90deg)", animation: "fadeInDown", animationDuration: "1s", textAlign: "center" }}>I</div>
                           <span className={ss.green}>
                              <div className={ss.letter} style={{ transform: "rotate(-90deg)", animation: "fadeInDown", animationDuration: "0.9s" }}>E</div>
                              <div className={ss.letter} style={{ transform: "rotate(-90deg)", animation: "fadeInDown", animationDuration: "0.8s" }}>L</div>
                              <div className={ss.letter} style={{ transform: "rotate(-90deg)", animation: "fadeInDown", animationDuration: "0.7s" }}>A</div>
                              <div className={ss.letter} style={{ transform: "rotate(-90deg)", animation: "fadeInDown", animationDuration: "0.6s" }}>K</div>
                           </span>
                           <div className={ss.mouse_scroll}>
                              <div>
                                 <span className={`${ss.m_scroll_arrows} ${ss.unu}`}></span>
                                 <span className={`${ss.m_scroll_arrows} ${ss.doi}`}></span>
                                 <span className={`${ss.m_scroll_arrows} ${ss.trei}`}></span>
                              </div>
                           </div>
                        </div>



                     </>

                     :
                     ""

               }


            </div>
            <div className={ss.left}>
               <p className={ss.herodesc}>Combinamos <span className={ss.green}>innovación</span>, <span className={ss.green}>lógica </span>
                  y <span className={ss.green}>diseño </span>para crear productos digitales de alto valor agregado. Siempre abiertos a nuevos desafíos!</p>
            </div>
         </div>
      </>
   )

}

export default Header;