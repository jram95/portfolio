import Navbar from "../components/Navbar";

export default function DogBreed(): JSX.Element {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h2>Dog Breeds</h2>
        <a
          href="https://dog-breed-c3b4.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="doggos.png" alt="..." width="650px" height="300px" />
        </a>
        <div style={{ fontSize: "19px" }}>
          <a
            href="https://dog-breed-c3b4.netlify.app/"
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
          Full stack app built using React, JavaScript and TypeScript for
          frontend, the UI was built using HTML/CSS and Bootstrap and backend
          built using Express, Node.js and PostgreSQL. Random dog images were
          fetched from an external API.
        </div>
        <br />
        <div>
          Users can vote for their favourite dog out of two displayed by
          clicking on the image. Below voting is a leaderboard for the top 10
          and a hall of fame for the top three including images. These images
          can be clicked to vote for that breed again, and change the image for
          that breed.
        </div>
      </div>
      <div style={{ padding: "30px", fontSize: "15px" }}>
        <table className="table">
          <h4 style={{ paddingLeft: "30px", fontSize: "18px" }}>
            <b>Other links</b>
          </h4>
          <thead></thead>
          <tbody>
            <tr>
              <th scope="row">Deployed Backend</th>
              <td>
                <a
                  href="https://dog-breeds-c3b4.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://dog-breeds-c3b4.herokuapp.com/
                </a>
              </td>
              <td>
                Deloyed Node.js app to Heroku in order to make requests to
                RESTful API.
              </td>
            </tr>
            <tr>
              <th scope="row">API Documentation</th>
              <td>
                <a
                  href="https://docs.google.com/document/d/1OkBbD5NRj8wo5Ynx8v5T1F8NIruudOWGdJbT26LHpOc/edit"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://docs.google.com/document/d/1OkBbD5NRj8wo5Ynx8v5T1F8NIruudOWGdJbT26LHpOc/edit
                </a>
              </td>
              <td>Outlines endpoints and responses from API.</td>
            </tr>
            <tr>
              <th scope="row">Github Repos</th>
              <td>
                <a
                  href="https://github.com/marthabowler/dog-breeds-backend"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/marthabowler/dog-breeds-backend
                </a>
                <div>
                  <a
                    href="https://dog-breed-c3b4.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://dog-breed-c3b4.netlify.app/
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
