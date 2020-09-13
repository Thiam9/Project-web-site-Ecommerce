import React from 'react';
import Card from './Card';

const ListeCard = (props) => {
    const { data, ajouterPanier, count } = props;



    return (

        <div className="col-sm">
            <div className="row">
                {data.map(item => <Card key={item.id} item={item} ajouterPanier={ajouterPanier} count={count} />)}

            </div>

        </div>


    );
};

export default ListeCard;