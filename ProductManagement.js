function ProductManagement() {
  //add products variable here
  const products = []

  function getAllProducts() {
    return products
  }

  function addProduct(product) {
    return products.push(product)
  }

  function searchByName(name) {
    return products.filter(
      (element) => element.name.toUpperCase() === name.toUpperCase()
    )
  }
  function searchByPriceRange(minPrice, maxPrice) {
    return products.filter(
      (element) => element.price >= minPrice && element.price <= maxPrice
    )
  }

  function removeAll() {
    return (products.length = 0)
  }

  return {
    removeAll,
    searchByName,
    searchByPriceRange,
    getAllProducts,
    addProduct
  }
}
module.exports = ProductManagement
const productCatalog = ProductManagement()
