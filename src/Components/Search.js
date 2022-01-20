import { useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { debounce } from "lodash";
import SearchIcon from '@mui/icons-material/Search';

const Search = ()=> {
    const [data,setData] = useState(null);
    const [term,setTerm]=useState('');
    const [isPending,setIsPending] = useState(false);
    const handleChange = debounce((e)=>{
       setTerm(e.target.value);
       setIsPending(true);
       if(e.target.value ===''){
        setIsPending(false);
       }
    },1000);
    const url=`https://www.googleapis.com/books/v1/volumes?q=${term}&key=AIzaSyDQo7WflBKPuv7uMFdOKOz0mjbxZq6oTOw&maxResults=40`;
    useEffect(()=>{
        const fetch = async ()=>{
            if(term!==''){
                const response = await axios.get(url);
                const details = await response.data;
                setData(details.items);
                setIsPending(false);
            }
            else{
                setData(null);
            }
           
        }
        fetch();
    },[url,term]);
    data&&console.log(data);
    return (
        <div>
            <div className="d-flex justify-content-center">
                <div className="searchBarContainer text-center">
                    <input id="searchBar" placeholder="Search Books" onChange={handleChange}/>
                    <div className="icon"><SearchIcon/></div>
                </div>
            </div>
            {isPending&&<div className="d-flex justify-content-center"><div className="searchResults cont shadow p-3 mb-5 bg-body rounded">Loading...</div></div>}
            {term&&!data&&!isPending&&<div className="d-flex justify-content-center"><div className="searchResults cont shadow p-3 mb-5 bg-body rounded">No Book found</div></div>}
            {!isPending&&term &&data &&<div className="d-flex justify-content-center"><div className="searchResults cont shadow p-3 mb-5 bg-body rounded">
            {data.map((e) => (
                <div key={e.id} className="order">
                    <Link to={`/book/${e.id}`}>
                        {e.volumeInfo.imageLinks?<img className="thumbnails" src={e.volumeInfo.imageLinks.thumbnail} alt={e.volumeInfo.title}></img>:<img className="none" alt=""></img>}
                        <div className="orderTitle">{e.volumeInfo.title}</div>
                    </Link>
                </div>
            ))}
            </div></div>}
        </div>
    )
    
}
export default Search;