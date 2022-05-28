const { Op } = require("sequelize");
const searchAndFilter = (query) => {
  //Filtering 1st priority

  const catagory = query.catagory;
  const minPrice = Number(query.minPrice);
  const maxPrice = Number(query.maxPrice);

  let filteredObject = {};
  if (catagory) {
    filteredObject = { ...filteredObject, productCategory: catagory };
  }
  if (minPrice && maxPrice) {
    filteredObject = {
      ...filteredObject,
      productPrice: {
        [Op.gte]: minPrice,
        [Op.lte]: maxPrice,
      },
    };
  }

  if (catagory || minPrice || maxPrice) {
    return filteredObject;
  }

  // Searching 2nd priority
  const keyword = query.keyword;
  if (keyword) {
    return {
      productName: keyword,
    };
  }

  return {};
};

module.exports = searchAndFilter;
