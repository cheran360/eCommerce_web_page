import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Message from '../components/Message';
import {Link} from 'react-router-dom';
import {Row,Col,ListGroup,Image,Form,Button,Card} from 'react-bootstrap';
import {addToCart,removeFromCart} from '../actions/cartActions'

const CartScreen = ({match,location,history}) => {
    const productId = match.params.id;
    const qty = location.search ? Number(location.search.split('=')[1]):1
    const dispatch = useDispatch()  
    const cart = useSelector((state) => state.cart)
    const {cartItems} = cart;

    const removeFromCartHandler = (id)=>{
        dispatch(removeFromCart(id))
    }
      
    const checkoutHandler = () =>{
        history.push('/login?redirect=shipping')
    }
    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId,qty))
        }
    },[dispatch,productId,qty])

    return ( 
        <Row>
            <Col md={8}>
                <h3>Cart</h3>
                <Link to='/'>Go back</Link>
                {cartItems.length === 0 
                ?<Message>Cart is empty!!</Message>
         
                :
                (
                <ListGroup variant="flush">
                    {cartItems.map(item=>(
                        <ListGroup.Item key={item.product}>
                            <Row>
                                <Col md={2}>
                                    <Image src={item.image} alt={item.name} fluid rounded />
                                </Col>
                                <Col md={3}>
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    
                                </Col>
                                <Col md={2}>Rs.{item.price}</Col>
                                <Col md={2}>
                                <Form.Control
                                    as="select"
                                    className="form-select"
                                    id="exampleSelect1"
                                    value={item.qty}
                                    onChange={(e) => dispatch(addToCart(item.product,Number(e.target.value)))}
                                    >
                                        {
                                        [...Array(item.countInStock).keys()].map((x)=> (
                                            <option key={x + 1} value={x + 1}>
                                                {x + 1}
                                            </option>
                                        ))}
                                
                                </Form.Control>
                                    
                                </Col>
                                <Col md={2}>
                                    <Button 
                                    type='button' 
                                    variant='dark' 
                                    onClick={()=> removeFromCartHandler(item.product)}>
                                        <i className='fas fa-trash'></i>
                                    </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}

                </ListGroup>
                )
                }
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Subtotal ({cartItems.reduce((acc,item)=>acc+item.qty,0)}) Items</h2>
                            Rs.{cartItems.reduce((acc,item)=> acc + item.qty *
                            parseInt(item.price.replace(/\,/g, ''),10),0).toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                            type="button"
                            class="btn-block" 
                            disabled={cartItems.length===0} 
                            onClick={checkoutHandler} >
                                CHECK OUT
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
     );
}
 
export default CartScreen;