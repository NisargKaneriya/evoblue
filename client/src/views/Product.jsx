const Products = () => {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Our Products</h1>
        <p className="text-lg text-gray-600">
          Browse our collection of premium water bottles, available in various sizes and styles.
        </p>
        <ul className="mt-4 space-y-2">
          <li className="bg-gray-100 p-4 rounded-md">💧 Stainless Steel Bottle - 1L</li>
          <li className="bg-gray-100 p-4 rounded-md">💧 BPA-Free Plastic Bottle - 750ml</li>
          <li className="bg-gray-100 p-4 rounded-md">💧 Insulated Sports Bottle - 500ml</li>
        </ul>
      </div>
    );
  };
  
  export default Products;
  