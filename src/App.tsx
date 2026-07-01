import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "3rem 2rem",
        }}
      >
        <section id="home">
          <h1>Hi, I'm David 👋</h1>

          <p>
            Frontend Developer passionate about building beautiful and accessible
            web applications.
          </p>
        </section>
      </main>
    </>
  );
}

export default App;