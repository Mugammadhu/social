import { Header } from "./Header";
import { Nav } from "./Nav";
import { Home } from "./Home";
import { NewPost } from "./NewPost";
import { PostPage } from "./PostPage";
import { About } from "./About";
import { Missing } from "./Missing";
import { Footer } from "./Footer";
import "./main1.css";
import { Routes, Route } from "react-router-dom";
import Update from "./Update";
import {DataProvider} from "./Contexts/DataContext";



export const Main1 = () => {
  
  return (
    <div className="container">
      <DataProvider>
      <Header title={"Sate Social Media"}/>
      <Nav  />
      <Routes>
        <Route path="/" element={<Home  />} />
        <Route path="post">
          <Route
            index
            element={
              <NewPost/>
            }
          />
          <Route
            path=":id"
            element={<PostPage/>}
          />
         
        </Route>
        <Route path="/edit/:id" element={<Update />} />
        
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>

      <Footer />
      </DataProvider>
    </div>
  );
};
