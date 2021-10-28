import "./styles.css";
import Button from "react-bootstrap/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import { useSetState } from "react-use";
import { Modal } from "react-bootstrap";

function testFunction() {
  alert("Button Clicked");
}

function showModal() {}

export default function App() {
  interface Istate {
    modalValues: {
      showModal: boolean;
      dontShowModal: boolean;
    };
  }
  const [iState, setIState] = useSetState<Istate>({
    modalValues: { showModal: false, dontShowModal: true }
  });

  function toggleModalVisible() {
    var show = { ...iState, showModal: true };
    var dontShow = { ...iState, showModal: false };

    iState.modalValues.showModal === true
      ? setIState(dontShow)
      : setIState(show);
  }

  return (
    <>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <p>{iState.modalValues.showModal.valueOf().toString()}</p>
      <div>
        <Button
          variant="danger"
          onClick={() => {
            toggleModalVisible();
          }}
        >
          Bootstrap Button
        </Button>
        <Modal show={iState.modalValues.showModal}>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Modal body text goes here.</p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => toggleModalVisible()}>
              Close
            </Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
