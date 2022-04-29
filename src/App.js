import { useState } from 'react';
import logo from './logo.svg';

import './App.css';

function App() {

  const [fromCurr, setFromCurr] = useState("USDT");
  const [toCurr, setToCurr] = useState("BTC");

  const tokenList = [
    {
      title: 'CRO',
      detail: "CRO",
      icon: "url"
    },
    {
      title: 'MMF',
      detail: "Mad Meerket Finance Token",
      icon: "url"
    },
    {
      title: 'MMO',
      detail: "aMad Meerket Optimizer Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },{
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },
    {
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },{
      title: 'METF',
      detail: "METF Token",
      icon: "url"
    },

  ]

  const onExchange = () => {
    let from = fromCurr;
    let to = toCurr;
    setFromCurr(to);
    setToCurr(from);
  }

  return (
    <div className="App">
      <div className="warn-section container-fluid p-0 m-0">
        <div className="row text-center m-auto">
          <h5 className="m-auto">PHISHING WARNING Please make sure you are visiting https://mm.finance -check URL carefully</h5>
        </div>
      </div>
      <div className="nav-section container-fluid p-0 m-0">
        <div className="row m-auto">
          <div className="col-md-3 text-start">
            <p className="pl-3 grey-text">Logo</p>
          </div>
          <div className="col-md-9 text-end">
            <button type="button" class="btn btn-primary btn-sm nav_connect_btn">Connect Wallet</button>
          </div>
        </div>
      </div>
      <div className="main-section container-fluid p-0 m-0">
        <div className="row mt-0 pt-0">
          <div className="work-section text-start">
            <div className="row">
              <h3 className="pl-3">asdasdasdasdasd</h3>
              <p className="pl-3 grey-text">qweqweqweqw</p>
            </div>
            <div className="row divide">
            </div>
            <div className="row from_section m-2">
              <p>From</p>
              <div className="col-md-3 text-start">
                <p className="pl-3 grey-text">0.0</p>
              </div>
              <div className="col-md-9 text-end">
                <button>{fromCurr}</button>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-md-3 text-center p-0">
                <button type="button" class="btn btn-primary btn-sm custom_btn">25%</button>
              </div>
              <div className="col-md-3 text-center p-0">
                <button type="button" class="btn btn-primary btn-sm custom_btn">50%</button>
              </div>
              <div className="col-md-3 text-center p-0">
                <button type="button" class="btn btn-primary btn-sm custom_btn">75%</button>
              </div>
              <div className="col-md-3 text-center p-0">
                <button type="button" class="btn btn-primary btn-sm custom_btn">MAX</button>
              </div>
            </div>
            <div className="row mt-3 text-center">
              <button onClick={onExchange}></button>
            </div>
            <div className="row from_section m-2">
              <p>To</p>
              <div className="col-md-3 text-start">
                <p className="pl-3 grey-text">0.0</p>
              </div>
              <div className="col-md-9 text-end">
                <button>{toCurr}</button>
              </div>
            </div>
            <div className="row m-2">
              <div className="col-md-12 text-center pt-3">
                <button type="button" class="btn btn-primary btn-sm custom_connect_btn">Connect Wallet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
