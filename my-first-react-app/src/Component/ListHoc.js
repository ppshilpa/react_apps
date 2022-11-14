import React from 'react';
import ProductsList from './list-card';
import products from './products.json';

const withSearch = WrappedComponent => {
    class WithSearch extends React.Component {
      state = {
        searchTerm: ""
      };
      handleSearch = event => {
        this.setState({ searchTerm: event.target.value });
      };
  
      render() {
        let { searchTerm } = this.state;
        let filteredProducts = filterProducts(searchTerm);
        
        return (
          <>
            <input
              onChange={this.handleSearch}
              value={searchTerm}
              type="text"
              placeholder="Search"
            />
            <WrappedComponent data={filteredProducts} />
          </>
        );
      }
    };
    WithSearch.displayName = `WithSearch(${getDisplayName(WrappedComponent)})`;
    return WithSearch;
  };
  
  const getDisplayName = (WrappedComponent) => {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
  }
  const filterProducts = (searchTerm) => {
    searchTerm = searchTerm.toUpperCase()
    return products.filter(product => {
      let str = `${product.title} ${product.style} ${product.sku}`.toUpperCase();
      return str.indexOf(searchTerm) >= 0;
    })
  }
  
  // Render out products list with search feature
 export const ProductsListWithSearch = withSearch(ProductsList);
  
