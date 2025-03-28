const ProductList = ({ products }) => {
  return (
    <div className="row" >
        {products.map((product, index) => (
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={product.id}>
          <div className="card h-100">
            <img
              src={product.imageUrl || "https://placehold.co/600x400"}
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body">
              <p className="card-text text-start mb-1">
                <strong>${product.price}</strong>
              </p>
              <h5 className="card-title text-start">{product.name}</h5>
              <p className="card-text text-start">{product.description}</p>
            </div>
          </div>
        </div>
        ))}
    </div>
  );
};

export default ProductList;
