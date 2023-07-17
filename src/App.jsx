import './App.css'
import urlist from './urls'
  
import React from 'react';
import Card from './components/Card';


const App = () => {
  console.log(urlist);


  return (
    <div className="list">
      <div className="content">
        <table className="full-table" border={1}>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {urlist.map((url, index) => (
              <Card key={index} url={url.url} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
