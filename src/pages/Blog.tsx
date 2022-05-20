import Navbar from "../components/Navbar";

export default function Blog(): JSX.Element {
  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h2>Next.js Blog</h2>
        <a
          href="https://nextjs-blog-jade-nine-33.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src="blog2.png" alt="example of blog post" />
        </a>
        <div style={{ fontSize: "19px" }}>
          <a
            href="https://nextjs-blog-jade-nine-33.vercel.app/"
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
        <div>Frontend app built using Next.js.</div>
        <br />
        <div>
          Includes a home page and navigation to individual pages for each post.
          Introduced to CSS Modules which removes the need to use unique
          classnames for every class. Other new ideas covered such as
          pre-rendering and SEO.
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
              <th scope="row">Github Repository</th>
              <td>
                <a
                  href="https://github.com/jram95/nextjs-blog"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/jram95/nextjs-blog
                </a>
              </td>
              <td>Github repository for Next.js tutorial blog</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
