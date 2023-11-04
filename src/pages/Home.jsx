import { useState } from "react";
import Galerey from "../components/Galerey";
import Search from "../components/Search";
import { useFetch } from "../hook/useFetch";

const API =
'https://api.unsplash.com/search/photos?client_id=ErCDu4qKOnu9g_66d0Nr-pSxTaKup8nD_-MVREwzYbw&page=1&query=';
function Home() {
  const [url, setUrl] = useState(API + 'hight');
  const {data, isPending, error} = useFetch(url)
   const setNewUrl = (url) => {
    setUrl(API + url)
  }
  return (
    <div >
    <h1 className="home">Search Any Image:</h1>
    <Search setNewUrl={setNewUrl}/>
    {data && <Galerey data={data} /> }
    {isPending && <h1>Loading</h1>}
    {error && <h1>{error}</h1>}
    </div>
  );
}

export default Home;
