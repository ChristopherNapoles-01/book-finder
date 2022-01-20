import { useEffect,useState } from "react";
import axios from "axios";

const useFetch = (options) => {
   
    const [data,setData] = useState(null);
    const [isPending,setIsPending]= useState(true);
    const [error,setError] = useState(null);
      useEffect(()=>{
          const fetchData = async ()=>{
              try{
                const response = await axios.get(options);
                const data = await response.data;
                setData(data.items);
                setError(null);
                setIsPending(false);
                
              }
              catch(e){
                setIsPending(false);
                setError(e.message);
              }
          }
          fetchData(); 
      },[options]);
     return {data,isPending,error};
}
export default useFetch;
