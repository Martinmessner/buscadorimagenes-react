import { useState } from 'react';
import GridRenderImages from './GridRender';
import FormInputData from './FormInputs';

export const GetImagesData = () => {
  const [query, Setquery] = useState('');
  const [results, Setresults] = useState([]);
  const [error, Seterror] = useState('');
  const [loading, Setloading] = useState(false);
  const [qualityImage, SetqualityImage] = useState(false);

  async function fetchApiCall4() {
    Setloading(true);
    const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&per_page=30&order_by=relevant&client_id=${
      import.meta.env.VITE_ACCESS_KEY
    }`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      if (result.results.length === 0) {
        Seterror('No existe lo que has buscado, intente nuevamente.');
        Setloading(false);
        return;
      }
      Setresults(result.results);
      Setloading(false);
      console.log(result.results);
    } catch (error) {
      console.error(error);
    }
  }

  const sendForm = (event) => {
    event.preventDefault();
    if (query.trim() === '') {
      Seterror('Porfavor ingrese un valor para la busqueda.');
      return;
    }
    Seterror('');
    fetchApiCall4();
    Setquery('');
  };

  const changeQuality = () => {
    SetqualityImage(!qualityImage);
    console.log(qualityImage);
  };

  return (
    <section>
      <FormInputData
        changeQuality={changeQuality}
        sendForm={sendForm}
        loading={loading}
        Setquery={Setquery}
        query={query}
      />

      <GridRenderImages
        results={results}
        qualityImage={qualityImage}
        error={error}
      />
    </section>
  );
};
