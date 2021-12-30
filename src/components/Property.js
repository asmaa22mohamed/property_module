import { useHistory } from 'react-router-dom';

const Property = (props) => {
  let history = useHistory();

  return (
    <>
      <div className='card postCard__card' style={{ width: '18rem' }}>
        <img
          src={props?.property?.files && props?.property?.files[0]}
          className='card-img-top  postCard__image'
          alt='...'
        />

        <button
          className='btn'
          onClick={() =>
            history.push({
              pathname: `/propertyDetail/${props?.property?.id}`,
              state: {
                property: props.property,
              },
            })
          }
        >
          All Detail
        </button>

        <div className='card-body'>
          <button
            className={
              props.property.isFav
                ? `text-success btn mx-2`
                : `text-muted btn mx-2`
            }
            onClick={() => props.onViewCount(props.property)}
          >
            <i class='fas fa-eye'></i>
          </button>
          {/* <span>{props.property.count}</span> */}
          <button
            className={
              props.property.isFav
                ? `text-danger btn mx-2`
                : `text-muted btn mx-2`
            }
            onClick={() => props.onFav(props.property)}
          >
            <i className='fas fa-heart'></i>
          </button>
        </div>
      </div>
    </>
  );
};
export default Property;
