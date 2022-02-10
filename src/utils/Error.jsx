function Error({ error }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          fontSize: 40,
        }}
      >
        {error}
      </div>
      {/*  just for myself */}
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          color: "red",
        }}
      >
        change your query
      </h1>
    </>
  );
}

export default Error;
