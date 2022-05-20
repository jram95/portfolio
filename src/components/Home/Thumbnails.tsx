import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Jumbotron(): JSX.Element {
  return (
    <>
    <div className='container'>
      <div className="row text-center text-lg-start">
      <div
          className="col-lg-4 col-md-4 col-6"
          style={{ padding: "50px", paddingLeft: "20px" }}
        >
          <div className="thumbnail">
            <Nav>
              <Nav.Link as={Link} to="/blog">
                <img className='img-thumbnail' src="blog.png" alt="front page of simple blog" />
              </Nav.Link>
            </Nav>
            <div className="caption">
              <h3 style={{ textAlign: "center" }}>Next.js Blog</h3>
              <p>
                Introduction to Next.js through a blog tutorial.
              </p>
              <p>
                <Nav>
                  <Nav.Link
                    style={{
                      fontSize: "18px",
                    }}
                    as={Link}
                    to="/blog"
                  >
                    Go to project
                  </Nav.Link>
                </Nav>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-4 col-6"
          style={{ padding: "50px", paddingLeft: "20px" }}
        >
          <div className="thumbnail">
            <Nav>
              <Nav.Link as={Link} to="/wall-game">
                <img className='img-thumbnail' src="wallgame.png" alt="..." />
              </Nav.Link>
            </Nav>
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
          className="col-lg-4 col-md-4 col-6"
          style={{ padding: "50px", paddingLeft: "20px" }}
        >
          <div className="thumbnail">
            <Nav>
              <Nav.Link as={Link} to="/resources">
                <img className='img-thumbnail' src="resources.png" alt="..." />
              </Nav.Link>
            </Nav>
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
                    to="/resources"
                  >
                    Go to project
                  </Nav.Link>
                </Nav>
              </p>
            </div>
          </div>
        </div>
        <div
          className="col-lg-4 col-md-4 col-6"
          style={{ padding: "50px", paddingLeft: "20px", paddingRight: "10px" }}
        >
          <div className="thumbnail">
            <Nav>
              <Nav.Link
                style={{
                  fontSize: "18px",
                }}
                as={Link}
                to="/dog-breed"
              >
                <img className='img-thumbnail' src="dogbreed.png" alt="..." />
              </Nav.Link>
            </Nav>
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
                    to="/dog-breed"
                  >
                    Go to project
                  </Nav.Link>
                </Nav>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
