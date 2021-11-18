import ItemList from './ItemList';
import items from './Items'
import { useState, Fragment } from 'react';


const ItemListContainer = (props) =>{

    const [products, setProducts] = useState([]);

    const callItems = new Promise((resolve, reject)=>{
        setTimeout(()=>{ 
            resolve(items);
            }, 3000);
                
    })

    callItems
    .then(res=>{
        setProducts(res);
    })
    .catch((error)=>{
        console.log(error);
    })
    
    return (
        <Fragment>   
        <h1>{props.greeting}</h1>
        <ItemList products={products}/>
        </Fragment>
    )

};

export default ItemListContainer;