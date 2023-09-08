//filter the data
export function filterData(searchInput, RestaurantList) {
    const data = RestaurantList.filter((restaurantObj) => {
      return restaurantObj.info.name
        .toLowerCase()
        .includes(searchInput.toLowerCase());
    });
    return data;
  }