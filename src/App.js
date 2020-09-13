
import React, { useState, useEffect, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import MenuLaterale from './components/MenuLaterale';
import ListeCard from './components/ListeCard';
import { list } from './datas/data';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pannier from './components/Panier'


function App() {

  const [category, setCategoryName] = useState(0)
  const [produitAFiltrer, setProduitAFiltrer] = useState(false)
  const [prodFiltrer, setProdFiltrer] = useState(false)
  const [count, setCount] = useState(1)

  const categoryName = (i) => {
    setCategoryName(i)
  };

  // fonction qui filtre
  const onSearch = (input) => {
    let toutListeProduit = list.flat()

    let filtrer = toutListeProduit.filter(item => {
      const marque = item.marque.toLowerCase()
      const saisieSearch = input.toLowerCase()
      return marque.indexOf(saisieSearch) > - 1
    })
    setProdFiltrer(filtrer)
  }

  useEffect(() => {
    setProduitAFiltrer(produitAFiltrer)
  });

  return (
    <Fragment>
      <Router>
        <Navigation methodeFilter={onSearch} setProduitAFiltrer={setProduitAFiltrer} count={count} />

        <div className="container-fluid">
          <div className="row">
            <MenuLaterale maMethode={categoryName} category={category} /> ,
     <ListeCard data={produitAFiltrer ? prodFiltrer : list[category]} ajouterPanier={setCount} count={count} />

          </div>
        </div>
        <Route path="/" component={Pannier} />
        <Route path="/panier" component={Pannier} />
      </Router>

    </Fragment>
  );
}

export default App;
