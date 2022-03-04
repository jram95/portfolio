import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Jumbotron(): JSX.Element {
  return (
    <>
      <div className="row">
        <div
          className="col-sm-6 col-md-4"
          style={{ padding: "10px", paddingLeft: "20px" }}
        >
          <div className="thumbnail">
            <img src="wallgame.png" alt="..." />
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
          className="col-sm-6 col-md-4"
          style={{ padding: "10px", paddingLeft: "20px" }}
        >
          <div className="thumbnail">
            <img src="resources.png" alt="..." />
            <div className="caption">
              <h3 style={{ textAlign: "center" }}>Resources App</h3>
              <p>
                Built during a 3-week sprint with 3 other coursemates at
                Academy.
              </p>
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
          className="col-sm-6 col-md-4"
          style={{ padding: "10px", paddingLeft: "20px", paddingRight: "10px" }}
        >
          <div className="thumbnail">
            <img src="dogbreed.png" alt="..." />
            <div className="caption">
              <h3 style={{ textAlign: "center" }}>Dog Breed Voting App</h3>
              <p>
                Built during a 1 week sprint with 3 other coursemates at
                Academy. One of my earlier projects.
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
