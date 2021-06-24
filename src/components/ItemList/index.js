import React, {useEffect, useState} from 'react';
import './ItemList.css'
import Item from '../Item/index';
import {Link} from 'react-router-dom';

function ItemList() {
    const [productos, setProductos] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        
        .then((res)=> res.json())
        .then((productos)=> setProductos(productos))

    }, [])
    return (
        <>
            {productos.map( producto => <Link key={producto.id} className="LinkCard" to={`/detail/${producto.id}`}><Item img={producto.image} name={producto.title} stock={producto.stock}/></Link>)}
        </>
    )
}

export default ItemList;
