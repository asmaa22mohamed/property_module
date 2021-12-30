import Property from '../components/Property';
import React, { useEffect } from 'react';
import Search from '../components/searchByLocalty';
import Totop from '../components/totop';
import Pagination from '../components/pagination';
const PropertyListing = (props) => {
  const [minprice, setMinPrice] = React.useState(0);
  const [maxprice, setMaxPrice] = React.useState(minprice);
  const [localty, setLocalty] = React.useState();
  const [bedroom, setBedroom] = React.useState();

  const [date, setDate] = React.useState();

  useEffect(() => {
    if (localty) {
      props.onFilter('localty', localty);
    }
    if (bedroom) {
      props.onFilter('bedroom', bedroom);
    }
  }, [localty, bedroom]);
  const { activePage, pageSize } = props;
  let start = (activePage - 1) * pageSize;
  let end = start + pageSize;
  let showedProperties = props.properties.slice(start, end);

  return (
    <>
      <div className='error'>
        {' '}
        <h2>Property Listing</h2>
      </div>
      <div
        style={{
          marginTop: '1.5rem',
          display: 'flex',
          marginLeft: '5rem',
          border: '3px gray',
          boxSizing: 'border-box',
        }}
      >
        <Search
          minprice={minprice}
          maxprice={maxprice}
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />
        <button
          onClick={() => props.onFilter('price', { minprice, maxprice })}
          style={{
            border: 'none',
            marginBottom: '2.5rem',
            marginLeft: '1rem',
          }}
        >
          price
        </button>
        <button
          onClick={() => props.onFilter('allProperties', {})}
          style={{
            border: 'none',
            marginBottom: '2.5rem',
            marginLeft: '1rem',
          }}
        >
          All Properties
        </button>
        <div style={{ display: 'flex', marginLeft: '1.5rem' }}>
          <label htmlFor='inputState'></label>
          <select
            name='area'
            onChange={(e) => setLocalty(e.target.value)}
            id='inputState'
            class='form-control'
          >
            <option selected>localty/Area</option>
            <option value='Gota'>Gota</option>
            <option value='Sarkhej'>Sarkhej</option>
            <option value='Sola'>Sola</option>
          </select>
        </div>
        <div style={{ display: 'flex', marginLeft: '1.5rem' }}>
          <label htmlFor='inputState'></label>
          <select
            name='area'
            onChange={(e) => setBedroom(e.target.value)}
            id='inputState'
            class='form-control'
          >
            <option selected>Bedroom</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
        </div>
        <div style={{ marginLeft: '1.5rem' }}>
          <input type='date' onChange={(e) => setDate(e.target.value)} />
          <button
            style={{ border: 'none' }}
            onClick={() => props.onFilter('date', date)}
          >
            By Date
          </button>
        </div>
      </div>
      {showedProperties?.map((property) => {
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
      {/* Pagination */}
      {props.properties.length >= props.pageSize && (
        <Pagination
          pageSize={props.pageSize}
          activePage={props.activePage}
          count={props.properties.length}
          onActivePageChange={props.onActivePageChange}
        />
      )}

      <Totop></Totop>
    </>
  );
};

export default PropertyListing;
