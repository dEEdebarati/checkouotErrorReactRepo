import React,{Component} from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../redux/actionCreators';
import Odr from './Odr/Odr';
import { Spinner } from 'reactstrap';

const mapStateToProps = state =>{
  return{
    orders:state.orders,
    orderLoading:state.orderLoading,
    orderErr:state.orderErr,
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    fetchOrders:() =>dispatch(fetchOrders()),
  }
}

class Order extends Component  {
  componentDidMount(){
    this.props.fetchOrders();
  }
  componentDidUpdate(){
    console.log(this.props);
  }
  render(){
    let orders = null;
    if(this.props.orderErr){
      orders = <p style = {{
        border:"1px solid grey",
        boxShadow:"1px 1px #888888",
        borderRadius:"7px",
        padding:"20px",
        marginBottom:"10px"}}>Sorry Failed to load orders!</p>
    }else{
      if(this.props.orders.length===0){
        orders = <p style = {{
          border:"1px solid grey",
          boxShadow:"1px 1px #888888",
          borderRadius:"7px",
          padding:"20px",
          marginBottom:"10px"}}>You have no orders!</p>
      }else{
        orders = this.props.orders.map(order =>{
          return <Odr order = {order} key = {order.id}/>
        }) 
      }
      
    }
    
    return (
      <div>
       {this.props.orderLoading ? <Spinner />:orders}
      </div>
    )
  }
 
}

export default connect(mapStateToProps,mapDispatchToProps)(Order);