import { addToCart } from '../redux-saga/action';
import { emptyCart } from '../redux-saga/action';
import { removeToCart } from '../redux-saga/action';
import { productList } from '../redux-saga/productAction';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Table } from 'react-bootstrap';

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
                <table className="audit table">
                <thead className="table-th">
                  <tr>
                    <th>Title</th>
                    <th>Body</th>
                  
                  </tr>
                </thead>
                <tbody className="table-body">
                  {data.map((item) => (
                    <tr>
                      <td>{item.title}</td>
                      <td>{item.body}</td>
                    </tr>
                  ))}
                </tbody>
              </table>                </div>
                <div className="row">
                    <div className="col-md-3">

                    </div>

                </div>
            </div>
        </div>
    );

}

export default Main;