import styled from "styled-components";
import emailjs from "emailjs-com";
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";

function LandingPage() {
  const [finishedForm, setFinishedForm] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lwin2j4",
        "template_ffxgrzg",
        e.target,
        "user_CfaDG3jL7fohxQ1WsKVBs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setFinishedForm(true);
  }

  return (
    <>
      {finishedForm ? (
        <StyledBye>
          <h5>Registration received.</h5>
          <h5 className="bottom">We'll get back to you soon!</h5>
        </StyledBye>
      ) : (
        <form className="contact-form" onSubmit={sendEmail}>
          <StyledCol>
            <h5>Beta registration</h5>
            <input type="text" name="user_name" placeholder="Name" />
            <input className="mail" type="email" name="user_email" placeholder="E-Mail" />
            <StyledCheck>
              <input type="checkbox" name="checkbox" />
              <span>Apply for the paid Feedback-Session</span>
            </StyledCheck>
            <StyledInp type="submit" value="Send" />
          </StyledCol>
        </form>
      )}
    </>
  );
}

export default LandingPage;

const StyledInp = styled.input`
  color: white !important;
  text-align: center;
  background-color: transparent;
  border: 2px solid white;

  @media (max-width: 960px) {
    margin-left: 0px;
    margin-top: 0px;
  }

  &:hover {
    background-color: white;
    color: #0a0227 !important;
    -webkit-transition: background-color 0.3s;
    -webkit-transition: color 0.3s;
  }
`;

const StyledCheck = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  span {
    margin-left: 1rem;
  }
`;

const StyledBye = styled.div`
  text-align: center;

  h5 {
    color: white;
    font-size: 1rem;

    &.bottom {
      margin-top: 2rem;
    }
  }
`;

const StyledCol = styled(Col)`
  // margin-top: -20vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input.mail {
    margin-top: 1.5rem;
  }

  span {
    color: white;
  }

  h5 {
    color: white;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
`;
