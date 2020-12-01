import { useState, useEffect } from 'react';
import { DEFAULT_IP } from '../constants';
import { Payload } from '../../../types';

const URL = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_API_KEY}`;

export const useInitialIpAddress = () => {
  const [payload, setPayload] = useState<Payload>(DEFAULT_IP);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getIpAddress();
  }, []);

  const getIpAddress = async () => {
    try {
      const res = await fetch(URL);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setPayload(data);
    } catch (err) {
      setError(err.message);
    }
  }

  return { error, payload };
}