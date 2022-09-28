import React, { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';




export const ItemDetailContainer = () => {
    const [data, SetData] = useState({}); 
    const { detalleId } = useParams();

    useEffect (() => {

      const querydb = getFirestore();
      const querydoc = doc(querydb, 'products', detalleId);
      getDoc(querydoc)
      .then(res => SetData({id: res.id, ...res.data()}))  
        },[detalleId])

  return (
    <ItemDetail data={data} />
  );
}
 export default ItemDetailContainer;