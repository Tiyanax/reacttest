import { useEffect, useState } from 'react';
function Search(){
    const Product = () => {
        const [data, setData] = useState(null);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);
      
        useEffect(() => {
          const fetchDataForPosts = async () => {
            try {
              const response = await fetch(
                `https://dummyjson.com/docs`
              );
              if (!response.ok) {
                throw new Error(`HTTP error: Status ${response.status}`);
              }
              let postsData = await response.json();
              setData(postsData);
              setError(null);
            } catch (err) {
              setError(err.message);
              setData(null);
            } finally {
              setLoading(false);
            }
          };
      
          Product();
        }, []);
      
        return <div></div>;
      };
      
}
export default Search;