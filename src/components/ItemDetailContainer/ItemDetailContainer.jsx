import React,{useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

const films =  {id: 1, image: "https://blog.native-instruments.com/wp-content/uploads/dynamic/2021/07/traktor-fabio-florido-hero-big-768x768-c-default.png", title: "FABIO FLORIDO"};

export const ItemDetailContainer = () => {
  const [data, SetData] = useState({});

  useEffect (() => {
    const getData = new Promise(resolve =>{
        setTimeout(() => {
            resolve(films);
        },3000);
    });
    getData.then(res => SetData(res));
},[])

  return (
    <ItemDetail data={data} />
  );
}
 export default ItemDetailContainer;