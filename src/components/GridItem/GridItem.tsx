import { Level } from "../../helpers/imc"
import { } from './index.css'

import down from '../../assets/down.png'
import up from '../../assets/up.png'

type Props = {
    item: Level
} 
export const GridItem = ({item}: Props) => {
    return(
        <div className="grid-right" style={{backgroundColor: item.color}}>
            <div className="grid-icon">
                <img src={item.icon === "up" ? up : down} alt="" width="30" />
            </div>
            <div className="grid-tittle">{item.tittle}
            </div>

            {item.yourImc && 
                <div className="yourImc">Seu IMC é de {item.yourImc} Kg/m²</div>
            }
            <div className="grid-info">
                <>IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong></>
            </div>
        </div>
    )
}