import { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Error from '../components/notFound';
import PropertyDetail from '../components/PropertyDetail';
import AddProperty from '../pages/AddProperty';
import PropertyListing from '../pages/AllProperty';
import FavoritesPage from '../pages/Favorites';
import '../sass/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const { v4: uuidv4 } = require('uuid');
class App extends Component {
  state = {
    properties: [
      // { id: '1', date: new Date().setFullYear(new Date().getFullYear() + 2) },
    ],
    filterProperties: [],
    filterFavorite: [],
    pageSize: 4,
    activePage: 1,
    activeFilter: 0,
  };
  componentDidUpdate() {
    this.state.filterFavorite = this.state.properties.filter(
      (property) => property.isFav == true
    );
  }

  handleChangeActivePage = (page) => {
    this.setState({ activePage: page });
  };

  handleChangeActiveFilter = (type) => {
    this.setState({ activeFilter: type.id, activePage: 1 });
  };

  incrementWithoutMutate = (property) => {
    const newProperties = [
      ...this.state.properties,
      { id: uuidv4(), ...property },
    ];
    this.setState({ properties: newProperties });
  };
  toggleFav = (property) => {
    // Clone

    let properties = [...this.state.properties];
    const index = properties.indexOf(property);
    properties[index] = { ...properties[index] };
    // Edit
    properties[index].isFav = !properties[index].isFav;
    // Set State
    this.setState({ properties });
  };
  viewCount = (property) => {
    // Clone
    let properties = [...this.state.properties];
    const index = properties.indexOf(property);
    properties[index] = { ...properties[index] };
    // Edit
    properties[index].count = !properties[index].count;
    // Set State
    this.setState({ properties });

    // // Clone
    // let properties = [...this.state.properties];
    // const index = properties.indexOf(property);
    // properties[index] = { ...properties[index] };
    // // Edit
    // properties[index].count++;
    // // Set State
    // this.setState({ properties });
  };

  filterByType = (type, data) => {
    let properties = [];
    console.log(data);
    switch (type) {
      case 'allProperties':
        this.setState({ filterProperties: this.state.properties });
        break;
      case 'price':
        properties = this.state.properties.filter(
          (property) =>
            property.price >= data.minprice && property.price <= data.maxprice
        );
        this.setState({ filterProperties: properties });
        break;
      case 'bathroom':
        properties = this.state.properties.filter(
          (property) => property.bathroom == data
        );
        this.setState({ filterProperties: properties });
        break;
      case 'bedroom':
        properties = this.state.properties.filter(
          (property) => property.bedroom == data
        );
        this.setState({ filterProperties: properties });
        break;
      case 'localty':
        properties = this.state.properties.filter(
          (property) => property.area == data
        );
        this.setState({ filterProperties: properties });

        break;
      case 'date':
        properties = this.state.properties.filter(
          (property) => property.date == data
        );
        this.setState({ filterProperties: properties });

        break;
      default:
        break;
    }
  };

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route
            path='/addProperty'
            exact
            render={(props) => (
              <AddProperty {...props} onAdd={this.incrementWithoutMutate} />
            )}
          />

          <Route
            path='/propertyListing'
            exact
            render={(props) => (
              <PropertyListing
                {...props}
                onFilter={this.filterByType}
                properties={
                  this.state.filterProperties.length == 0
                    ? this.state.properties
                    : this.state.filterProperties
                }
                onViewCount={this.viewCount}
                onFavorite={this.toggleFav}
                onActivePageChange={this.handleChangeActivePage}
                onActiveFilterChange={this.handleChangeActiveFilter}
                pageSize={this.state.pageSize}
                activePage={this.state.activePage}
                activeFilter={this.state.activeFilter}
              />
            )}
          />
          <Route
            path='/propertyDetail/:id'
            exact
            render={(props) => (
              <PropertyDetail {...props} property={this.state.properties} />
            )}
          />
          <Route
            path='/favoritesPage'
            exact
            render={() => (
              <FavoritesPage
                onFavorite={this.toggleFav}
                favorites={this.state.filterFavorite}
              />
            )}
          />
          <Route path='/notfound' component={Error} />
          <Redirect to='/notfound' />
        </Switch>
      </>
    );
  }
}

export default App;
