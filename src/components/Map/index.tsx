import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { NEW_YORK_CITY } from './constants';
import styles from './map.module.css';

mapboxgl.accessToken =
  process.env.REACT_APP_MAPBOX_TOKEN !== undefined
    ? process.env.REACT_APP_MAPBOX_TOKEN
    : '';

export const Map = () => {
  const mapContainer = useRef(null);

  const setupMap = (center: [number, number]): void => {
    const map = new mapboxgl.Map({
      // @ts-ignore
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center,
      zoom: 15
    });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
  }

  useEffect(() => {
    const successLocation = (
      position: { coords: { longitude: number, latitude: number }}
    ): void => {
      const { longitude, latitude } = position.coords;
      setupMap([longitude, latitude]);
    };

    const errorLocation = (): void => setupMap(NEW_YORK_CITY);

    navigator.geolocation.getCurrentPosition(
      successLocation,
      errorLocation,
      { enableHighAccuracy: true }
    );
  }, []);


  return <div ref={mapContainer} className={styles.map}></div>;
}
