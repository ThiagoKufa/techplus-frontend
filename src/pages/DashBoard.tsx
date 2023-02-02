export const DashBoard = () => {
  return (
    <>
      <main
        style={{
          background: "#fff",
          display: "flex",
          flex: 1,
        }}
      >
        <div style={{ width: "500px", margin: "auto" }} className="content">
          <h1
            style={{
              color: "#2cc0ff",
              fontSize: "2.3rem",
              marginBottom: "2rem",
            }}
            className="content__title"
          >
            dashboard
          </h1>
          <p style={{ color: "#5c6d74", fontSize: "18px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
            ducimus harum accusantium aliquam facere quos. Officiis voluptates
            officia quibusdam molestias! A obcaecati voluptatem deserunt dicta
            beatae voluptatibus harum praesentium quos? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptatem harum provident sint,
            nemo culpa quis? Cupiditate, assumenda placeat. Accusamus earum
            soluta sed alias ea aliquam eius reiciendis asperiores iusto neque?
          </p>
        </div>
      </main>
    </>
  );
};
