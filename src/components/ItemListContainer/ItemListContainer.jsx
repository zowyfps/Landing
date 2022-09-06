import React, {useState,useEffect} from "react";

import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import Title from '../Title/Title';

const films = [
    {id: 1, image: "https://blog.native-instruments.com/wp-content/uploads/dynamic/2021/07/traktor-fabio-florido-hero-big-768x768-c-default.png", title: "FABIO FLORIDO"},
    {id: 2, image: "https://live.staticflickr.com/4671/38703546820_de36be5e47_b.jpg", title: "DIMI DANGELIS"},
    {id: 3, image: "https://i1.sndcdn.com/artworks-000211108185-yrrvf9-t500x500.jpg", title: "BART SKILLS "},
];

export const ItemListContainer = ({texto}) => {
    const [data, SetData] = useState([]);

    useEffect (() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(films);
            },3000);
        });
        getData.then(res => SetData(res));
    },[])

    const onAdd = (quantity) =>{
        console.log(`Compraste ${quantity} unidades`);
    }
    
    return (
        <>
        <Title greeting={texto} />
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;