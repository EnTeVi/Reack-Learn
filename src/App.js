import {Routes, Route} from "react-router-dom";

import './App.css';
import {AllSite} from "./allSite/AllSite";
import {AlbumsPage} from "./pages/AlbumsPage";
import {CommentsPage} from "./pages/CommentsPage";
import {Posts} from "./components";
import {TodosPage} from "./pages/TodosPage";


function App() {
  return (
    <div className="App">

      <Routes>

        <Route path={'/'} element={<AllSite/>}>

          <Route path={'albums'} element={<AlbumsPage/>}/>

          <Route path={'comments'} element={<CommentsPage/>}>
            <Route path={':postId'} element={<Posts/>}/>
          </Route>

          <Route path={'todos'} element={<TodosPage/>}/>

        </Route>

      </Routes>

    </div>
  );
}

export default App;
