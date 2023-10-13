import axios from 'axios'
import React from 'react'

const [data, setData] = useState(null)
const baseURL = "https://www.jsonkeeper.com/b/MDXW";

setEffect(() => {
    axios.get('https://www.jsonkeeper.com/b/MDXW')
      .then((response) => {
        setData(response.data); // Assuming the data is in the 'data' property of the response
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);