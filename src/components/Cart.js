import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Cart = () => {
    const cartData = useSelector((state) => state.cartData);
    let amount = cartData.length && cartData.map(item => item.price).reduce((prev, next) => prev + next)
    console.warn(amount)
    return (<div>
       <Button className="btn btn-primary float-start m-1">
       <Link className="text-decoration-none text-white" to="/" >Go Back</Link>
       </Button>
        
        <h1>Cart Page</h1>
        <div className="cart-page-container">
            <table>
                <tr>
                    <th>Color</th>
                    <th>Price</th>
                    <th>Category</th>
                </tr>
                {
                    cartData.map((item) => 
                    <tr key={item.key}>
                        <td>{item.category}</td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                    </tr>)
                }
            </table>
            <div className="price-details">
                <div className="adjust-price"><span>Amount</span><span>${amount}</span></div>
                <div className="adjust-price"><span>Discount</span><span>${amount / 10}</span></div>
                <div className="adjust-price"><span>Tax</span><span>$000</span></div>
                <div className="adjust-price"><span>Total</span><span>${amount - (amount / 10)}</span></div>
            </div>
        </div>
    </div>)
}

export default Cart;