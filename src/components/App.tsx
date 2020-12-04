import React from 'react';
import { useIpInfo } from './hooks/useIpInfo';
import { Header } from './Header';
import { Map } from './Map';

export const App = () => {
  const { error, payload, handleSearch } = useIpInfo();

  return (
    <>
      <Header
        payload={payload}
        error={error}
        handleSearch={handleSearch}
      />
      <Map payload={payload} />
    </>
  )
};