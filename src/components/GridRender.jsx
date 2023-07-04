const GridRenderImages = ({ error, results, qualityImage }) => {
  return (
    <main>
      {error && <p className="error">{error}</p>}
      {results.length > 0 && (
        <div className="grid-container">
          {results.map((image) => (
            <img
              className="results-image"
              src={qualityImage === true ? image.urls.full : image.urls.regular}
              alt="foto"
              key={image.id}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default GridRenderImages;
