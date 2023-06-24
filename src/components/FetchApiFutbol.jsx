export const GetImagesData = () => {
  async function fetchApiCall3() {
    const url = 'https://allsportsapi2.p.rapidapi.com/api/rankings/fifa';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '80ceeb3ebamshe85b44ac914d558p158fb8jsn42cfcf90be69',
        'X-RapidAPI-Host': 'allsportsapi2.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      API FUTBOL.
      <button onClick={() => fetchApiCall3()}> Prueba 3</button>
    </div>
  );
};
