import { PreferencesIsland } from "./Components/PreferencesIsland/PreferencesIsland";
import { Header } from "./Components/Header";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Homepage } from "./Pages/Homepage";
import { Articles } from "./Pages/Articles";
import { Article } from "./Pages/Article";
//import { Announcement } from "./Pages/Announcement";
import { Category } from "./Pages/Category";
import { Footer } from "./Components/Footer";
//import { useGetAnnounce } from "./Hooks/useGetAnnounce";

function App() {

  //const {data, isError, isLoading } = useGetAnnounce();
  return (
    <BrowserRouter>
     <Header announce={false}/>
     <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="articles" element={<Articles/>}>
        <Route path=":category" element={<Category/>}>
          <Route path=":slug" element={<Article/>}/>
        </Route>
      </Route>
      {/*<Route path="convocatoria" element={<Announcement data={data}/>} loading={isLoading} />*/}
     </Routes>
     <PreferencesIsland/>
     <Footer/>
     </BrowserRouter>
  )
}

export default App
