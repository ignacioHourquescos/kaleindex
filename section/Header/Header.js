import ss from './Header.module.scss'

const Header = () => {

   return (
      <>
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
      </>
   )

}

export default Header;