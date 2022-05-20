import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DogBreed from "./DogBreed";
import Home from "./Home";
import ResourcesApp from "./ResourcesApp";
import WallGame from "./WallGame";
import Blog from "./Blog";

export default function WebsiteRoutes(): JSX.Element {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wall-game" element={<WallGame />} />
          <Route path="/resources" element={<ResourcesApp />} />
          <Route path="/dog-breed" element={<DogBreed />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
}
