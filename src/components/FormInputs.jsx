const FormInputData = ({
  sendForm,
  query,
  Setquery,
  loading,
  changeQuality,
  qualityImage,
}) => {
  return (
    <form className="form-search" onSubmit={sendForm}>
      <input
        className="input-search"
        placeholder="Busque Aqui..."
        title="Busque Aqui."
        type="search"
        onChange={(e) => Setquery(e.target.value)}
        value={query}
      />
      <button disabled={loading}>Buscar</button>

      <button type="button" disabled={loading} onClick={changeQuality}>
        {qualityImage === true
          ? 'Cambiar a  Calidad Regular'
          : 'Cambiar a  Calidad Alta'}
      </button>
    </form>
  );
};

export default FormInputData;
