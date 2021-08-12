import ss from './Card.module.scss'
import Image from 'next/image'

const Card =() =>{

return(
   <div className={ss.container}>
      <div className={ss.shapeContainer}>
      <div className={ss.shapeLeft}>
      {shapeLeft}
      </div>

      <div className={ss.shapeRight}>
      {shapeRight}
      </div>
      </div>

      <h1>Nombre</h1>
      <Image className={ss.image} src={"/renova.png"} width="250px" height="500px"/>



   </div>
)

}

export default Card;

const shapeLeft = <svg width="323" height="518" viewBox="0 0 323 518" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M295.615 518C316.408 518 329.397 495.485 318.989 477.485L51.0696 14.1213C37.2469 -9.78478 0.695587 0.0217839 0.695587 27.6364V491C0.695587 505.912 12.7839 518 27.6956 518H112.287H295.615Z" fill="#A2C5E6" fill-opacity="0.5"/>
</svg>

const shapeRight = <svg width="277" height="634" viewBox="0 0 277 657" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 120.15C0 109.241 6.56412 99.4042 16.6372 95.2174L239.637 2.52949C257.419 -4.8613 277 8.20517 277 27.4617V606.847C277 625.187 259.107 638.191 241.663 632.528L18.6627 560.13C7.53493 556.517 0 546.149 0 534.449V120.15Z" fill="#78B2E6" fill-opacity="0.6"/>
</svg>


