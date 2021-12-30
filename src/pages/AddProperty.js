import { Component } from 'react';
import Totop from '../components/totop';

class AddProperty extends Component {
  state = {
    property: {
      propertyName: '',
      propertyDescription: '',
      files: [],
      propertyAdress: '',
      bathroom: 0,
      bedroom: 0,
      price: 0,
      area: '',
      carpetArea: '',
      isFav: false,
      // count: 0,
      count: false,
      date: new Date(),
    },
  };
  _handleSubmit = (e) => {
    //Sumbit handler
    e.preventDefault();
    console.log(this.state.property);
    this.props.onAdd(this.state.property);
    this.props.history.push('/propertyListing');
  };

  _handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        this.setState((state) => ({
          property: {
            ...state.property,
            files: [...state.property.files, e?.target?.result],
          },
        }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((state) => ({
      property: { ...state.property, [name]: value },
    }));
  };
  render() {
    const {
      propertyName,
      propertyDescription,
      propertyAdress,
      price,
      bathroom,
      bedroom,
    } = this.state.property;
    return (
      <>
        <div className='error'>
          {' '}
          <h2>Add Property</h2>
        </div>
        <div
          style={{
            boxSizing: 'border-box',
            width: '40%',

            margin: 10,

            marginLeft: '32%',

            padding: '10px',
          }}
        >
          <form>
            <div className='form-group row'>
              <label htmlFor='propertyName' className='col-sm-2 col-form-label'>
                Property
              </label>
              <div className='col-sm-10'>
                <input
                  name='propertyName'
                  value={propertyName}
                  onChange={this.handleChange}
                  type='text'
                  className='form-control'
                  id='propertyName'
                />
              </div>
            </div>
            <div className='form-group row'>
              <label
                htmlFor='inputPassword3'
                className='col-sm-2 col-form-label'
              >
                Description
              </label>
              <div className='col-sm-10'>
                <input
                  name='propertyDescription'
                  value={propertyDescription}
                  onChange={this.handleChange}
                  type='text'
                  class='form-control'
                  id='inputPassword3'
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='inputPassword3' class='col-sm-2 col-form-label'>
                AddImage
              </label>
              <div className='col-sm-10'>
                <input
                  type='file'
                  className='form-control'
                  id='inputPassword3'
                  accept='image/*'
                  name='files'
                  onChange={this._handleImageChange}
                  disabled={
                    this.state.property.files?.length == 5 ? true : false
                  }
                  multiple
                />
              </div>
            </div>
            <div className='form-group row'>
              <label
                htmlFor='inputPassword3'
                className='col-sm-2 col-form-label'
              >
                Address
              </label>
              <div className='col-sm-10'>
                <input
                  name='propertyAdress'
                  value={propertyAdress}
                  onChange={this.handleChange}
                  type='text'
                  className='form-control'
                  id='inputPassword3'
                />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-4'>
                <label htmlFor='inputEmail4'>Bedroom</label>
                <input
                  name='bedroom'
                  value={bedroom}
                  onChange={this.handleChange}
                  type='number'
                  class='form-control'
                  id='inputEmail4'
                />
              </div>
              <div className='form-group col-md-4'>
                <label htmlFor='inputPassword4'>Bathroom</label>
                <input
                  name='bathroom'
                  value={bathroom}
                  onChange={this.handleChange}
                  type='number'
                  class='form-control'
                  id='inputPassword4'
                />
              </div>
              <div className='form-group col-md-4'>
                <label htmlFor='inputPassword4'>Price</label>
                <input
                  name='price'
                  value={price}
                  onChange={this.handleChange}
                  type='number'
                  class='form-control'
                  id='inputPassword4'
                />
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group col-md-6'>
                <label htmlFor='inputState'>Area</label>
                <select
                  name='area'
                  onChange={this.handleChange}
                  id='inputState'
                  class='form-control'
                >
                  <option selected>Choose...</option>
                  <option value='Gota'>Gota</option>
                  <option value='Sarkhej'>Sarkhej</option>
                  <option value='Sola'>Sola</option>
                </select>
              </div>
              <div className='form-group col-md-6'>
                <label htmlFor='inputState'>Carpet Area</label>
                <select
                  name='carpetArea'
                  onChange={this.handleChange}
                  id='inputState'
                  class='form-control'
                >
                  <option selected>Choose...</option>
                  <option value='SQ FT'>SQ FT</option>
                  <option value='SQ YD'>SQ YD</option>
                  <option value='SQ MT'>SQ MT</option>
                </select>
              </div>
            </div>
            <div className='form-group row'>
              <div className='col-sm-10'>
                <button
                  type='submit'
                  onClick={this._handleSubmit}
                  className='mainbtn btn'
                >
                  Add Property
                </button>
              </div>
            </div>
          </form>
        </div>
        <Totop></Totop>
      </>
    );
  }
}
export default AddProperty;
