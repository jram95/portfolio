import Navbar from "../components/Navbar";

export default function WallGame(): JSX.Element {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h2>Connecting Wall Game Project</h2>
        <a
          href="https://connecting-wall-game.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="wallgame.png" alt="..." />
        </a>
        <div style={{ fontSize: "19px" }}>
          <a
            href="https://connecting-wall-game.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            See website
          </a>
        </div>
      </div>
      <div style={{ padding: "30px", fontSize: "12px" }}>
        <table className="table">
          <h4 style={{ paddingLeft: "10px", fontSize: "18px" }}>Other links</h4>
          <thead></thead>
          <tbody>
            <tr>
              <th scope="row">UI wireframe</th>
              <td>
                <a
                  href="https://whimsical.com/oc-wall-app-Xz7PQTnr3eWeR5c4dYSS7o"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://whimsical.com/oc-wall-app-Xz7PQTnr3eWeR5c4dYSS7o
                </a>
              </td>
              <td>
                Original UI wireframe, designed at the start of the project.
                Includes mobile design which I plan to create using React
                Native.
              </td>
            </tr>
            <tr>
              <th scope="row">Deployed Backend</th>
              <td>
                <a
                  href="https://wall-game.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://wall-game.herokuapp.com/
                </a>
              </td>
              <td>
                Deloyed my Node.js app to Heroku in order to make requests to my
                RESTful API{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">Github Repos</th>
              <td>
                <a
                  href="https://github.com/jram95/wall-backend"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/jram95/wall-backend
                </a>
                <div>
                  <a
                    href="https://github.com/jram95/only-connect-frontend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://github.com/jram95/only-connect-frontend
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
