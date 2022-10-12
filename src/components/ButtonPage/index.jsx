import { Container } from "./style";

function ButtonPage({ setPage, data }) {
  if (data.length !== 0) {
    function nextPage() {
      if (data.info.next !== null) {
        setPage(data.info.next);
        const body = document.querySelector("#root");
        body?.scrollIntoView({
          behavior: "smooth",
        });
      }
    }

    function prevPage() {
      if (data.info.prev !== null) {
        setPage(data.info.prev);
        const body = document.querySelector("#root");
        body?.scrollIntoView({
          behavior: "smooth",
        });
      }
    }

    if (data.info.prev === null) {
      return (
        <Container>
          <button onClick={nextPage}>Avançar</button>
        </Container>
      );
    }

    if (data.info.prev !== null) {
      return (
        <Container>
          <button onClick={prevPage}>Voltar</button>
          <button onClick={nextPage}>Avançar</button>
        </Container>
      );
    }

    if (data.prev.netx === null) {
      return (
        <Container>
          <button onClick={prevPage}>Voltar</button>
        </Container>
      );
    }
  }
}

export default ButtonPage;
