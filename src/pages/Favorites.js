import Property from '../components/Property';
import Totop from '../components/totop';

const FavoritesPage = (props) => {
  return (
    <>
      <div className='error'>
        {' '}
        <h2>Favorites</h2>
      </div>
      {props.favorites.map((property) => {
        return (
          <div className='postCard'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-lg-3 postCard__main'>
                  <Property
                    key={property.id}
                    onFav={props.onFavorite}
                    property={property}
                    onViewCount={props.onViewCount}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Totop></Totop>
    </>
  );
};
export default FavoritesPage;
