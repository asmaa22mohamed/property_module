import { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const PropertyDetail = (props) => {
  const location = useLocation();
  useEffect(() => {
    location.state?.onViewCount &&
      location.state?.onViewCount(location.state.property);
  }, []);
  return (
    <>
      <div className='error'>
        {' '}
        <h2>Property Detail</h2>
      </div>
      <Carousel style={{ marginTop: 5 }}>
        {location.state?.property?.files?.map((file) => {
          return (
            <Carousel.Item className='container mx-5 w-60' interval={1000}>
              <img className='d-block w-100' src={file} alt='First slide' />
              <Carousel.Caption>
                <h3>{location.state?.property?.propertyName}</h3>
                <p>{location.state?.property?.propertyDescription}.</p>
                <p>
                  Price:{location.state?.property?.price}L |Bathroom:
                  {location.state?.property?.bathroom}. |Bedroom:{' '}
                  {location.state?.property?.bedroom}.
                  <span>
                    Address:{location.state?.property?.propertyAdress}|
                    {location.state?.property?.area} |
                  </span>
                  <span>{location.state?.property?.carpetArea} </span>
                </p>
                <p>
                  {location.state?.property?.isFav == true
                    ? 'is Favorite'
                    : 'is not Favorite'}
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};
export default PropertyDetail;
