import { useEffect, useState } from 'react';
import ItemListContainer from './componentes/catalogo/itemListContainer/ItemListContainer';
import NavBar from './componentes/navbar/NavBar';



function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((todoBien, todoMal) => {
    
      setTimeout(() => {
        todoBien(["Producto1", "Producto2", "Producto3", "Producto4"]);
      }, 2000);
    }).then((resultado) => setItems(resultado));
    });


  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer items={items}/>
      
    </div>
  );
}

export default App;
