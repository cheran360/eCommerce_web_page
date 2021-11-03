import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Loader from '../components/Loader';
import Message from '../components/Message';
import Paginate from '../components/Paginate';
import ProductCarousel from '../components/ProductCarousel';


const HomeScreen = ({history}) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  //productList is like a sub-part in the state
  const { error, loading, products, page, pages } = productList;

  let keyword = history.location.search
  
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);

  return (
    <div>
      {!keyword && <ProductCarousel/>}
  
      {loading ? <Loader/>
       : error ? <Message variant="danger">{'Sorry, 404 ERROR 💥 '}</Message>
       :
        <div>
          <Row>
          <h4>Latest Products</h4>
          <kbd>All the lastest and advanced gaming products available</kbd>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        <Paginate page={page} pages={pages} keyword={keyword}/>
        </div>
      }
    </div>
  );
};

export default HomeScreen;
