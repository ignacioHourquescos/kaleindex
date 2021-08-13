import ss from './Header.module.scss'

const Header = () => {

   return (
      <>
         <div className={ss.desktopview}>
            <div className={ss.container}>
               <div className={ss.herokale}>
               </div>
               <div className={ss.herotitle}>
                  <div className={ss.letter}>X</div>
                  <div className={ss.letter}>E</div>
                  <div className={ss.letter}>D</div>
                  <div className={ss.letter}>N</div>
                  <div className={ss.letter}>I</div>
                  <span className={ss.green}>
                     <div className={ss.letter}>E</div>
                     <div className={ss.letter}>L</div>
                     <div className={ss.letter}>A</div>
                     <div className={ss.letter}>K</div>
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