import { useState } from 'react';

export const GetImagesData = () => {
  const [query, Setquery] = useState('');
  const [results, Setresults] = useState([]);
  const [error, Seterror] = useState('');
  console.log(error);
  async function fetchApiCall4() {
    const url = `https://api.unsplash.com/search/photos?page=1&query=${query}&per_page=20&order_by=relevant&client_id=${
      import.meta.env.VITE_ACCESS_KEY
    }`;

    try {
      const response = await fetch(url);
      const result = await response.json();
      Setresults(result.results);
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
  };

  return (
    <section>
      <h1>Encuentre la imagen que necesite.</h1>
      <>
        <form onSubmit={sendForm}>
          <label>Busque:</label>
          <input
            type="search"
            placeholder="Busque aqui..."
            onChange={(e) => Setquery(e.target.value)}
          ></input>
          <div>{error && <p>{error}</p>}</div>
          <button>Buscar</button>
        </form>
      </>
      <main>
        {results.length > 0
          ? results.map((image) => (
              <img src={image.urls.small} alt="foto" key={image.id} />
            ))
          : false}
      </main>
    </section>
  );
};
