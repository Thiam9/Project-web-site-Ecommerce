import React from 'react';
import '../styles/menuLaterale.css'

const MenuLaterale = (props) => {
    const {maMethode, category} = props
    
    const menus = ["Chaussures", "Lunettes", "Baskets", "Chemises"];
   
    const Produits = menus.map((produit, index)=>{
        return (<a className="list-group-item list-group-item-action" id={category == index && "active"}key={index} onClick={()=>maMethode(index)} >{produit} </a>);
    })

    return (
        <div className="list-group menuLateral">
             {Produits}    
        </div>
    );

};  

export default MenuLaterale;