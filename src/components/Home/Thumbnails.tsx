import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Jumbotron(): JSX.Element {
  return (
    <>
      <div className="row">
        <div
          className="col-sm-6 col-sm-6"
          style={{ padding: "50px", paddingLeft: "20px" }}
        >
          <div className="thumbnail">
            <a href="https://connecting-wall-game.netlify.app/" target="_blank">
              <img src="wallgame.png" alt="..." />
            </a>
            <div className="caption">
              <h3 style={{ textAlign: "center" }}>Connecting Wall Game</h3>
              <p>
                Solo "passion project". Inspired by the connecting wall in Only
                Connect.
              </p>
              <p>
                <Nav>
                  <Nav.Link
                    style={{
                      fontSize: "18px",
                    }}
                    as={Link}
                    to="/wall-game"
                  >
                    Go to project
                  </Nav.Link>
                </Nav>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-sm-6 col-sm-6"
          style={{ padding: "50px", paddingLeft: "20px" }}
        >
          <div className="thumbnail">
            <a href="https://frontend-c3c4.netlify.app/" target="_blank">
              <img src="resources.png" alt="..." />
            </a>
            <div className="caption">
              <h3 style={{ textAlign: "center" }}>Resources App</h3>
              <p>Built during a 3-week sprint in a 4 person team at Academy.</p>
              <p>
                <Nav>
                  <Nav.Link
                    style={{
                      fontSize: "18px",
                    }}
                    as={Link}
                    to="/"
                  >
                    Go to project
                  </Nav.Link>
                </Nav>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-sm-6 col-sm-6"
          style={{ padding: "50px", paddingLeft: "20px", paddingRight: "10px" }}
        >
          <div className="thumbnail">
            <a href="https://dog-breed-c3b4.netlify.app/" target="_blank">
              <img src="dogbreed.png" alt="..." />
            </a>
            <div className="caption">
              <h3 style={{ textAlign: "center" }}>Dog Breed Voting App</h3>
              <p>
                Built during a 1 week sprint in a 4 person team at Academy. A
                single page website.
              </p>
              <p>
                <Nav>
                  <Nav.Link
                    style={{
                      fontSize: "18px",
                    }}
                    as={Link}
                    to="/wall-game"
                  >
                    Go to project
                  </Nav.Link>
                </Nav>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
