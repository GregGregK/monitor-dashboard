import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import '../urls';
import urlist from '../urls';

const Card = ({ url }) => {
  const [status, setStatus] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(url + '/status');
      setStatus(response.data);
    } catch (error) {
      console.error(error);
      setStatus('ERRO');
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [url]);

  const matchedUrl = urlist.find(item => item.url === url);
  const name = matchedUrl ? matchedUrl.name : '';

  const cardClassName = `card ${status === 'OK' ? 'card-ok' : 'card-erro'}`;

  return (
    <tr className={cardClassName}>
      <td className='name'>{name}</td>
      <td >
        <span className='status'>
          <span className='status-name'>{status}</span>
        </span>
      </td>
    </tr>
  );
};

export default Card;


