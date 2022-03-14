import Navbar from "../components/Navbar";

export default function ResourcesApp(): JSX.Element {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h2>Resources App</h2>
        <a
          href="https://frontend-c3c4.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="social-academy.png"
            alt="..."
            width="260px"
            height="350px"
          />
        </a>
        <div style={{ fontSize: "19px" }}>
          <a
            href="https://frontend-c3c4.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            See website
          </a>
        </div>
      </div>
      <br />
      <div
        style={{
          paddingLeft: "60px",
          paddingRight: "60px",
          fontSize: "14px",
          textAlign: "justify",
        }}
      >
        <div>
          Full stack app with a multi-page frontend built using React,
          JavaScript, TypeScript, the UI was built using HTML/CSS, backend was
          built using Express and Node.js and PostgreSQL. Wrote unit tests using
          Jest and E-2-E tests using Cypress.
        </div>
        <br />
        <div>
          Users can login by selecting from a dropdown. Once logged in they can
          add new resource recommendations, add resources to their study list,
          view their study list, add comments to and like/dislike other
          recommendations. Users can also search using the searchbar, tags cloud
          or list of types in the navigation bar.
        </div>
      </div>
      <div style={{ padding: "30px", fontSize: "12px" }}>
        <table className="table">
          <h4 style={{ paddingLeft: "30px", fontSize: "18px" }}>
            <b>Other links</b>
          </h4>
          <thead></thead>
          <tbody>
            <tr>
              <th scope="row">UI wireframe</th>
              <td>
                <a
                  href="https://whimsical.com/thesocialacademy-W9CBWCgR2UVbbtMeiNfJ4N"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://whimsical.com/thesocialacademy-W9CBWCgR2UVbbtMeiNfJ4N
                </a>
              </td>
              <td>
                Original UI wireframe, designed at the start of the project.
              </td>
            </tr>
            <tr>
              <th scope="row">Deployed Backend</th>
              <td>
                <a
                  href="http://backend-c3c4.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://backend-c3c4.herokuapp.com/
                </a>
              </td>
              <td>
                Deloyed Node.js app to Heroku in order to make requests to
                RESTful API. Includes documentation of endpoints.
              </td>
            </tr>
            <tr>
              <th scope="row">Github Repos</th>
              <td>
                <a
                  href="https://github.com/Team-C3C4-Project-3/backend-C3C4"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/Team-C3C4-Project-3/backend-C3C4
                </a>
                <div>
                  <a
                    href="https://github.com/Team-C3C4-Project-3/frontend-C3C4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://github.com/Team-C3C4-Project-3/frontend-C3C4
                  </a>
                </div>
              </td>
              <td>Github repositories for both backend and frontend code</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
