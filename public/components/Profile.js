
class Profile extends React.Component{

    render(){

        //  const user=this.props;

        return(
        <div>
            <div>
                {user.name}
                {user.email}
                {user.shippingStreet}
                {user.shippingCity} 
                {user.shippingState}
                {user.shippingZip}
                {user.creditCard}
            </div>
            <div className="plantBox">
                <h1>Plants</h1>
                <ul>
                    {this.state.user.shoppingCart > 0 && this.state.user.shoppingCart.map((item, index) => {
                    return( 
                        <li>
                            {item.qty}
                            {item.id}
                        </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        )
    }
}
