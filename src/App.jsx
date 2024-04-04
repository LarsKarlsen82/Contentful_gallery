import './App.css';
import { useEffect, useState } from "react";
import Footer from './Components/Footer/Footer';
import useContentful from './useContentful';
import Gallery from './Pages/GalleryItem/GalleryItem'; // Corrected import name

const App = () => {
  const [galleries, setGalleries] = useState([]); // Corrected state initialization
  const { getGalleries } = useContentful();

  useEffect(() => {
    getGalleries().then((response) => response && setGalleries(response));
  }, []); // Added empty dependency array to useEffect to run only once

  return (
    <>
      <h1>Contentful API</h1>
      <p>A Design+Code tutorial</p>
      {galleries.map((gallery, index) => ( // Changed from authors to galleries
        <Gallery key={index} author={gallery} /> // Changed from author to gallery
      ))}
      <Footer />
    </>
  );
};

export default App;
