import Thumbnails from "./Thumbnails";

export default function Jumbotron(): JSX.Element {
  return (
    <>
      <div className="jumbotron">
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
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <Thumbnails />
      </div>
    </>
  );
}
