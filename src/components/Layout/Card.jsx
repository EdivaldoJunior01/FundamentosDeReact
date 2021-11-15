import react from "react";
import './Card.css'
export default props =>
    <div className="Card"  style={{
        borderColor: props.color || '#000'
        }}>
    <div className="Content">
        {props.children } 
    </div>
    <div className="Footer" style={{
        backgroundColor: props.color || '#000'
        }}>  {/* duas chaves ->{{}} usado para passar um obj */} 
        {/* props.color => vai caçar essa prop e se n achar via ficar com a cor brnaco (prop color esta em app.jsx) */}
        {props.titulo}
    </div>
</div>