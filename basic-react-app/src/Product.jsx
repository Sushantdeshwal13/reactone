import "./Product.css";
import Price from "./price";
function Product({title, idx}){
  let oldprices = ["12,234", "34,231", "3,234"];
  let newprices = ["34,123", "32,523", "53,243"];
  let description = ["8,000 DPI", "intuitive surface", "designed for ipad", "wireless"];
        return (
          <div className="product">
            <h3>{title}</h3>
            <p>{description [idx]}</p>
            <Price oldprice={oldprices[idx]} newprice={newprices[idx]} />
          </div>
        );
}

export default Product;