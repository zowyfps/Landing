import React,{useState, useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';

import { useParams } from 'react-router-dom';

const films = [
  {id: 1, price: 400, image: "https://blog.native-instruments.com/wp-content/uploads/dynamic/2021/07/traktor-fabio-florido-hero-big-768x768-c-default.png", category:"Techno", title: "FABIO FLORIDO"},
  {id: 2, price: 500, image: "https://live.staticflickr.com/4671/38703546820_de36be5e47_b.jpg", category:"Techno", title: "DIMI DANGELIS"},
  {id: 3, price: 600, image: "https://i1.sndcdn.com/artworks-000211108185-yrrvf9-t500x500.jpg", category:"Techno", title: "BART SKILLS "},
  {id: 4, price: 700, image: "https://corenews.me/wp-content/Ben-Bohmer-1Live-DJ-Session-2022-04-02-600x400.jpg", category:"Melodic", title: "BEN BOHMER "},
  {id: 5, price: 800, image: "https://wololosound.com/wp-content/uploads/1267719_667419336604337_1586402704_o.jpg", category:"Melodic", title: "MONOLINK "},
  {id: 6, price: 600, image: "https://beatsoup.es/content/images/2019/09/MATHAME-1.png", category:"Melodic", title: "MATHAME "},
];

export const ItemDetailContainer = () => {
  const [data, SetData] = useState({}); 
  const { detalleId } = useParams();

  useEffect (() => {
      const getData = new Promise(resolve => {
          setTimeout(() => {
              resolve(films);
          }, 3000);
      });
      getData.then(res => SetData(res.find(film => film.id === parseInt(detalleId))));
  },[])

return (
  <ItemDetail data={data} />
);
}
export default ItemDetailContainer;