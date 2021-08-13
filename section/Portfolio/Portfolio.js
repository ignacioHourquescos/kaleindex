import ss from './Portfolio.module.scss'
import Card from '../../components/Card/Card'
import renova from '../../public/renova.png'

const ourWork = () =>{

return(
   <div className={ss.container}>
      <div className={ss.cards}>
    
         <Card type="Web app" name={renova} img="/renova.png" brief="se hizo una pagina muy linda"/>
         <Card/>
         <Card/>
         <Card/>
      </div>
   </div>
)

}

export default ourWork;