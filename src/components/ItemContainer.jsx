import Dossier from "./Dossier";
import "./menu.css";
import "./ItemCount";
import Contador from "./ItemCount.jsx";
import { useState } from "react";



const ItemContainer = () => {
    const [count, setCount] = useState(0);
    const qty1 = 4;

    const addMore = () => {
      if(count < qty1)  {
      setCount(count + 1);
      }
    }
    const lessMore = () => {
      if(count === 0) return;

      setCount(count - 1);
    }
    return (
        <section className="featuredProd">
          <div className = "container">
            <h2>Servicios</h2>
              <ul>
                <Contador 
                count={count}                
                lessMore={lessMore}
                addMore={addMore}
                />
                
                <li><Dossier titulo="Asesoramiento" precio="5.000"/></li>
                <li><Dossier titulo="Traducciones" precio="2.200"/></li>
                <li><Dossier titulo="Pedidos de Partidas" precio="3.000"/></li>
                <li><Dossier titulo="Turnos" precio="10.000"/></li>

              </ul>           
          </div>
        </section>
        
      )
    }
export default ItemContainer;