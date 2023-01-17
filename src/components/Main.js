import { addToCart } from '../redux-saga/action';
import { emptyCart } from '../redux-saga/action';
import { removeToCart } from '../redux-saga/action';
import { productList } from '../redux-saga/productAction';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Main() {
    const dispatch = useDispatch();
    console.log('dispatch', dispatch);
    let data = useSelector((state) => state.productData);
    console.warn("data in main component", data);

    useEffect(() => {
        dispatch(productList())
    }, [dispatch])
    return (
        
        <div>
            <div className="container">
                <div className="row m-3">
                    {data.map((item) => (
                        <div className="col-md-3 " key={item.id}>

                            <Card className="text-center text-dark mb-5 " >
                                <img className='mx-auto m-3' src={item.image} height="230" width="230" alt="Avatar" />

                                <h5 className="mb-3 mt-2"> Name: {item.title}</h5>
                                <h5 className="mb-5">Price: ${item.price}</h5>
                                <h5 className="mb-5">Color::{item.category}</h5>


                                <Button className='btn btn-primay' onClick={() => dispatch(addToCart(item))} >Add to Cart</Button>
                                <Button className='btn btn-danger' onClick={() => dispatch(removeToCart(item.id))}>Remove to Cart</Button>
                                <Button className='btn btn-success' onClick={() => dispatch(emptyCart())}>Empty Cart</Button>

                            </Card>

                        </div>
                    ))}

                </div>
                <div className="row">
                    <div className="col-md-3">

                    </div>

                </div>
            </div>
        </div>
    );

}

export default Main;