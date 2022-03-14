import Navbar from "../components/Navbar";

export default function WallGame(): JSX.Element {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h2>Wall Game Project</h2>
        <a
          href="https://connecting-wall-game.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="wallgame.png" alt="..." width="600px" height="400px" />
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
      <br />
      <div
        style={{
          paddingLeft: "60px",
          paddingRight: "60px",
          fontSize: "18px",
          textAlign: "justify",
        }}
      >
        <div>
          Full stack app with a multi-page frontend built using React,
          JavaScript, TypeScript, the UI was built using HTML/CSS and Bootstrap,
          and in the backend I built a web server using Express and Node.js, and
          stored the data in a relational database using PostgreSQL. I wrote
          some unit tests using Jest for my helper functions in the frontend and
          plan to write Cypress tests to test various workflows within the app.
        </div>
        <br />
        <div>
          Users can navigate their way around the homepage which contains the
          rules and 10 most recent walls. By clicking on a wall name they can
          play the game by trying to solve the wall. There is also an option to
          create a new wall, link in the header.
        </div>
        <br />
        <div>
          The UI has so far been created just for the web as opposed to mobile,
          but this is something I want to add in. Additional features I will add
          include having a timer and a rating system, where users will be able
          to filter based on rating.
        </div>
      </div>
      <div style={{ padding: "30px", fontSize: "15px" }}>
        <table className="table">
          <h4 style={{ paddingLeft: "10px", fontSize: "18px" }}>
            <b>Other links</b>
          </h4>
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
