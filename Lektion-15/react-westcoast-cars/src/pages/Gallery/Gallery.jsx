import { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import Card from '../../components/Card';

import './gallery.css';

const GalleryPage = () => {
  // Logik
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const loadVehicles = async () => {
      const response = await fetch('http://localhost:5001/vehicles');
      if (response.ok) {
        const result = await response.json();
        setVehicles(result);
      }
    };
    loadVehicles();
  }, []);

  return (
    <>
      <PageTitle title='Våra bilar!!!' />
      <ul className='grid-list'>
        {vehicles &&
          vehicles.map((vehicle) => (
            <Card key={vehicle.id} vehicle={vehicle} />
          ))}
      </ul>
    </>
  );
};

export default GalleryPage;
