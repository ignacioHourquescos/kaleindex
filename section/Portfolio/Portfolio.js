import ss from './Portfolio.module.scss'
import Card from '../../components/Card/Card'

const ourWork = () =>{

return(
   <div className={ss.container}>
      <div className={ss.cards}>
    
         <Card/>
         <Card/>
         <Card/>
         <Card/>
      </div>
   </div>
)

}

export default ourWork;