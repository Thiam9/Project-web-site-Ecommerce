import React from 'react';
import '../styles/card.css';
import Modal from './Modal';

const Card = (props) => {
    const { item, ajouterPanier, count } = props;
    return (
        <>
            <div className="card">
                <img src={`media/${item.image}`} className="card-img-top" alt={item.marque} />
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-6">
                            <h6 className="prix">{item.marque}</h6>
                        </div>
                        <div className="col-sm-6">
                            <p className="card-title">{item.price}/{item.unite}</p>
                        </div>
                    </div>
                    <button type="button" className="btn btn-info" data-toggle="modal" data-target={`#${item.category}`}>Voir </button>
                </div>
            </div>
            <Modal item={item} ajouterPanier={ajouterPanier} count={count} />

        </>




    );
};

export default Card;