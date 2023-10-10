import data from "./productos.json";
import axios from "axios";
import { initMercadoPago } from '@mercadopago/sdk-react';
import {Wallet} from "@mercadopago/sdk-react";
initMercadoPago('TEST-f2cf77b5-859f-4762-aea3-aa04b839f2f5');


function App() {
  
const compraProducto = async(producto) => {
  const response = await axios.post(
    "http://localhost:4000/Mercado_Pago", producto
    );
  window.location.href = response.data.response.body.init_point;
  console.log(response.data.response.body.init_point);
  console.log(response.data);
};


  return (
    <>
    <h1>carrito</h1>
    <div>
    {
      data.productos.map((e) => (
        <div key={e.name}>
          <h2>{e.name}</h2>
          <img src={e.imagen} alt="" />
          <p>{e.precio}</p>
          <button onClick={()=> compraProducto(e)}>Comprar</button>

          <Wallet initialization={{ preferenceId: '<PREFERENCE_ID>' }} />

        </div>))
    }
    </div>
     
    </>
  )
}

export default App
