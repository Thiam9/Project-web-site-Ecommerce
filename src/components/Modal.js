
import React, { useState } from 'react';
import '../styles/modal.css';

const Modal = ({ item, ajouterPanier, count }) => {
    const [qte, setQte] = useState(1)

    return (
        <div className="modal fade" id={item.category} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
            <div className="modal-dialog modalProd ">
                <div className="modal-content ">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{item.marque}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="row-col-sm-4">
                                <img width="170" height="170" src={`media/${item.image}`} alt={item.marque}></img>
                            </div>
                            <div className="col-sm">
                                <p className="lead">
                                    Lorem ipsum ce texte represente la description du produit comme j'ai pas d'inspiration , j'ecris n'importe quoi hahaha
                                </p>
                                <h5> {item.price}</h5> <br />
                                <div className="btn-group" role="group" aria-label="Basic example">
                                    <button onClick={() => setQte(count > 1 ? count - 1 : 1)}

                                        type="button" className="btn btn-secondary">
                                        -
                                    </button>
                                    <span className="btn btn-light qty">{qte}</span>
                                    <button
                                        onClick={() => setQte(count + 1)}
                                        type="button" className="btn btn-secondary" >
                                        +
                                    </button>
                                </div>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-success"
                            onClick={() => ajouterPanier(count + 1)}>Ajouter panier</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;