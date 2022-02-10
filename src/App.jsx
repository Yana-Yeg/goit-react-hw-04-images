import React, { useState, useEffect } from "react";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import { fetchApi } from "./utils/FetchApi";
import Modal from "./components/Modal/Modal";
import Error from "./utils/Error";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [bigImage, setBigImage] = useState("");

  useEffect(() => {
    setLoading(true);
    fetchApi(query, page)
      .then((data) => {
        setImages((prev) => [...prev, ...data.hits]);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [query, page]);

  const handleFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };
  const handleClickLoadMore = () => {
    setPage((prev) => prev + 1);
    setLoading(true);
  };

  const handleBigImage = (bigImage = "") => {
    setBigImage(bigImage);
  };

  return (
    <>
      <Searchbar handleFormSubmit={handleFormSubmit} />
      {error && images.length === 0 && <Error error={error} />}
      {images.length === 0 && isLoading && <Loader />}
      {images.length > 0 && (
        <ImageGallery images={images} handleBigImage={handleBigImage} />
      )}
      {images.length > 0 && (
        <Button
          handleClickLoadMore={handleClickLoadMore}
          isLoading={isLoading}
        />
      )}
      {bigImage && <Modal onClose={handleBigImage} bigImage={bigImage} />}
    </>
  );
};
export default App;

// class App extends Component {
//   state = {
//     query: "",
//     page: 1,
//     images: [],
//     isLoading: false,
//     error: null,
//     showModal: false,
//     bigImage: "",
//   };
//   // page first render
//   componentDidMount() {
//     fetchApi()
//       .then((data) => this.setState({ images: data.hits }))
//       .catch((error) => this.setState({ error: error.message }));
//   }
//   // for scroll prev images - find height
//   getSnapshotBeforeUpdate() {
//     return document.body.scrollHeight;
//   }
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     // for scroll prev images
//     if (prevState.images !== this.state.images) {
//       window.scrollTo({
//         top: snapshot - 400,
//         behavior: "smooth",
//       });
//     }
//     //
//     if (
//       prevState.query !== this.state.query ||
//     prevState.page !== this.state.page
//   ) {
//     if (prevState.query !== this.state.query) {
//       this.setState({ images: [], isLoading: true });
//     }
//     fetchApi(this.state.query, this.state.page)
//       .then((data) => {
//         this.setState({ images: [...this.state.images, ...data.hits] });
//       })
//       .catch((error) => this.setState({ error: error.message }))
//       .finally(() => this.setState({ isLoading: false }));
//   }
// }

// handleFormSubmit = (query) => {
//   this.setState({ query: query, page: 1 });
// };
// handleClickLoadMore = () => {
//   this.setState((prevState) => ({
//     page: prevState.page + 1,
//     isLoading: true,
//   }));
// };
// toggleModal = () => {
//     this.setState((prevState) => ({ showModal: !prevState.showModal }));
//   };
//   handleBigImage = (bigImage) => {
//     this.setState({ bigImage });
//     this.toggleModal();
//   };
//   render() {
//     const { images, showModal, bigImage, isLoading, error } = this.state;
//     return (
//       <>
//         <Searchbar handleFormSubmit={this.handleFormSubmit} />
//         {error && images.length === 0 && <Error error={error} />}
//         {images.length === 0 && isLoading && <Loader />}
//         {images.length > 0 && (
//           <ImageGallery
//             images={this.state.images}
//             handleBigImage={this.handleBigImage}
//           />
//         )}
//         {images.length > 0 && (
//           <Button
//             handleClickLoadMore={this.handleClickLoadMore}
//             isLoading={isLoading}
//           />
//         )}
//         {showModal && <Modal onClose={this.toggleModal} bigImage={bigImage} />}
//       </>
//     );
//   }
// }

// export default App;
