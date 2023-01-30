import { Container } from "react-bootstrap";
import { brands } from "../../../_Data";
import { useState, useEffect } from "react";

const Brands = () => {

  const [brand, setBrand] = useState();
  const [images, setImages] = useState();
  const [activeBrand, setActiveBrand] = useState('Apple');

  useEffect(() => {
    const handleBrands = async () => {

      setTimeout(() => {

        const brandsArray = Object.keys(brands).map(key => {
          return brands[key];
        });
        setBrand(brandsArray);

      }, 100)

    };
    handleBrands();
  }, []);

  useEffect(() => {

    const handleImages = async () => {
      setTimeout(() => {
        const imagesArray = Object.keys(brands).map(key => {
          if (activeBrand === brands[key].name) {
            const currentBrandImages = brands[key].images;
            setImages(currentBrandImages);
          }
        },);
        return imagesArray;

      }, 100)
    };
    handleImages();
  });

  return (
    <section className="brands">
      <Container>
        <div className="d-flex justify-content-between align-items-center pt-5">
          <div className="h-line-brands"></div><h3 className="brands-title brand-name">Brands</h3><div className="h-line-brands"></div>
        </div>

        <div className="mx-5 px-5 mt-4 mb-4 d-flex justify-content-between">
          {brand && brand.map(b => (
            <button key={b.name} onClick={() => {
              setActiveBrand(b.name);
            }}>
              <h4 className={activeBrand === b.name ? 'active-brand' : 'brand-title'}>
                {b.name}
              </h4>
            </button>
          ))}
        </div>

        <div className="grid">
          <div className="brand-image1"><img src={images && images[0]} className="brand-image" alt="product" /></div>
          <div className="brand-image2"><img src={images && images[1]} className="brand-image" alt="product" /></div>
          <div className="brand-image3"><img src={images && images[2]} className="brand-image" alt="product" /></div>
          <div className="brand-image4"><img src={images && images[3]} className="brand-image" alt="product" /></div>
          <div className="brand-image5"><img src={images && images[4]} className="brand-image" alt="product" /></div>
        </div>

      </Container>
    </section>
  )
}

export default Brands