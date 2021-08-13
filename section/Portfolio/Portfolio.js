import ss from './Portfolio.module.scss'
import Image from 'next/image'

const ourWork = () =>{

return(
   <div className={ss.container_portfolio}>
      <div className={ss.cards_portofolio}>

      {
         portfolioArray.map(element => 

         <div className={ss.container}>

            <div className={ss.shapeContainer}>
               <div className={ss.shapeLeft}>
                  {shapeLeft(element.color)}
               </div>
               <div className={ss.shapeRight}>
                  {shapeRight(element.color)}
               </div>
               <div className={ss.kale_container}>
               <Image src={"/kale.png"} width="120px" height="180px"/>
               {/* <Image src={"/kale.png"} width="120px" height="180px"/> */}
               {icon}{icon}{icon}{icon}{icon}
            </div>

         </div>

         <h5>{element.type}</h5>
         <h1>{element.name}</h1>
         <div className={ss.image_container}>
            <Image src={element.image} width="280px" height="450px"/>
         </div>
         <h3 className={ss.breif}>{element.brief}</h3>

      </div>

      )}
     
      </div>

   </div>
)
}

export default ourWork;


const portfolioArray = [
   {
      type:"webApp",
      name:"Renova",
      color:"#FFC93F",
      image:"/renova.png",
      brief:"pagina web muy linda e intersantsdasd ads sde pagina web muy linda e intersante"
   },
   {
      type:"Institucional",
      name:"Corominola",
      color:"#959595",
      image:"/renova.png",
      brief:"pagina web muy linda e intersante"
   },
   {
      type:"Institucional",
      name:"Corominola",
      color:"#959595",
      image:"/renova.png",
      brief:"pagina web muy linda e intersante"
  }
]



const shapeLeft = (color)=> {return( <><svg width="323" height="470" viewBox="0 0 323 518" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M295.615 518C316.408 518 329.397 495.485 318.989 477.485L51.0696 14.1213C37.2469 -9.78478 0.695587 0.0217839 0.695587 27.6364V491C0.695587 505.912 12.7839 518 27.6956 518H112.287H295.615Z" fill={color} fill-opacity="0.5"/>
</svg></>)}

const shapeRight = (color) =>{ return(<svg width="277" height="550" viewBox="0 0 277 657" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 120.15C0 109.241 6.56412 99.4042 16.6372 95.2174L239.637 2.52949C257.419 -4.8613 277 8.20517 277 27.4617V606.847C277 625.187 259.107 638.191 241.663 632.528L18.6627 560.13C7.53493 556.517 0 546.149 0 534.449V120.15Z" fill={color} fill-opacity="0.6"/>
</svg>)}


const icon =<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.8614 34.3341L9.44295 31.3683L7.11682 5.14136H32.66L30.3372 31.37L19.868 34.3341H19.8614ZM12.8912 21.8414L13.2446 26.5312L19.8909 28.5989L26.4194 26.7341L27.8998 10.5019H11.8689L12.1273 13.6901H24.4433L24.1391 17.001H16.0614L16.3526 20.1287H23.8773L23.4324 24.4145L19.8925 25.396L16.2937 24.4145L16.0647 21.8463H12.8912V21.8414Z" fill="#2E3A59"/>
</svg>
