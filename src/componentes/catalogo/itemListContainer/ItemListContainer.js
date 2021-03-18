import Items from "../items/Items";



function ItemListContainer (props) {
    return (
   
    <div>
       
        <Items items={props.items}/>


    </div>     

);
}


export default ItemListContainer;