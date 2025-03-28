import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductList from "./assets/ProductList";
import CategoryFilter from "./assets/CategoryFilter";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");
  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));

    fetch("http://localhost:8080/api/categories")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId ? Number(categoryId) : null);
  };
  const filteredProducts = products.filter(product => {
    return (
      (selectedCategory ? product.category.id === selectedCategory : true)
      &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }).sort((a, b) =>{
    if(sortOrder==="asc"){
      return a.price - b.price;
    }else{
      b.price - a.price
    }
  });
  return (
    <div className="container">
      <h1 className="fs-1 text-center fw-bold text-info"> <span className="text-danger">P</span>roduct <span className="text-danger">C</span>atelog</h1>
      <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore at itaque ea nobis sequi dignissimos ut autem dolor, asperiores </p>
      <p className="fw-bold text-info fs-4">The images are purely for fun and will be generated automatically</p>
      <div className="row align-item-center justify-content-center mb-4">
        <div className="col-md-3 col-sm-12">
          <CategoryFilter
            categories={categories}
            onSelect={handleCategorySelect}
          />
        </div>
        <div className="col-md-5 col-sm-12 mb-12">
          <input
            type="text"
            className="form-control"
            placeholder="Search products"
            onChange={handleSearchChange}
          />
        </div>
        <div className="col-md-3 col-sm-12">
          <select
            className="form-control"
            onChange={handleSortChange}
            name=""
            id=""
          >
            <option value="asc">Sort By Price - Low to High</option>
            <option value="desc">Sort By Price - High to Low</option>
          </select>
        </div>
      </div>
      <div>
        {filteredProducts.length ? (
          //display products

          <ProductList products={filteredProducts} />
        ) : (
          //no products found
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default App;
