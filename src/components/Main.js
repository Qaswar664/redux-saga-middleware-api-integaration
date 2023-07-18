import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, emptyCart, removeToCart } from "../redux-saga/action";
import { productList } from "../redux-saga/productAction";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Main() {
  const dispatch = useDispatch();
  console.log("dispatch", dispatch);
  let data = useSelector((state) => state.productData);
  console.warn("data in main component", data);

  React.useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  return (
    <div>
      <div className="container">
        <div className="row m-3">
          {data.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <Card>
                <div
                  className="image-container"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '200px', // Set the desired height
                  }}
                >
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt="Product Image"
                    style={{
                      maxWidth: '100%', // Set the desired maximum width
                      maxHeight: '100%', // Set the desired maximum height
                      objectFit: 'contain',
                    }}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{item.title.slice(0, 5)}</Card.Title>
                  <div>Description: {item.description.slice(0, 15)}</div>
                  <Card.Text>
                    <div>Price: {item.price}</div>
                    <div>Category: {item.category}</div>
                   
                  </Card.Text>
                  <div>
                    <Button onClick={() => dispatch(addToCart(item))}>
                      Add to Cart
                    </Button>
                    <Button onClick={() => dispatch(removeToCart(item.id))}>
                      Remove from Cart
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
