import styled from "styled-components";
import bg from "./bg.jpg";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container bg={bg}>
      <Route path="/" component={LandingPage} />
      </Container>
    </Router>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
