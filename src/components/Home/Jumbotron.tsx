import Thumbnails from "./Thumbnails";

export default function Jumbotron(): JSX.Element {
  return (
    <>
      <div className="jumbotron" style={{ backgroundColor: "#fffef8" }}>
        <h2 className="display-4" style={{ paddingLeft: "20px" }}>
          Jenna Ram
        </h2>
        <h6 className="display-6" style={{ paddingLeft: "20px" }}>
          <b>Full Stack Software Engineer</b>
        </h6>
        <p
          className="lead"
          style={{
            paddingLeft: "20px",
            paddingRight: "10px",
            fontSize: "medium",
          }}
        >
          Having recently completed an intensive software engineering training
          bootcamp, I am excited to be looking for a role where I can grow my
          technological skillset and learn as much as possible.
        </p>
        <hr className="my-4" />
        <Thumbnails />
      </div>
    </>
  );
}
