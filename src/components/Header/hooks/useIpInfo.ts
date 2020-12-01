import { useState, useEffect } from 'react';
import { DEFAULT_IP } from '../constants';
import { Payload } from '../../../types';

const URL = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_IP_API_KEY}`;

export const useIpInfo = () => {
  const [payload, setPayload] = useState<Payload>(DEFAULT_IP);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getInitialIpAddress();
  }, []);

  const getInitialIpAddress = async () => {
    try {
      const res = await fetch(URL);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setPayload(data);
    } catch (err) {
      setError(err.message);
    }
  }

  const handleSearch = async (searchValue: string) => {
    try {
      const res = await fetch(`${URL}&domain=${searchValue}`);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setPayload(data);
    } catch (err) {
      setError(err.message);
    }
  }

  return { error, payload, handleSearch };
}