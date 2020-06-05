class UserProfile extends React.Component {
    render () {
        console.log(this.props);
        const {name, email, shippingStreet, shippingCity, shippingState, shippingZip} = this.props.userData;
        return (
            <div>
                <div id="profile">
                    <h3>User Profile</h3>
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{shippingStreet}</p>
                    <p>{shippingCity}</p>
                    <p>{shippingState}</p>
                    <p>{shippingZip}</p>
                </div>
                <div id="cart">
                    <h3>Shopping Cart</h3>
                    {/* <ul>
                        {
                            this.props.userData.shoppingCart.map((item) => {
                                return (
                                    <li>
                                        <img src={item.image} />
                                        <p>{item.name}</p>
                                        <p>$20</p>
                                    </li>
                                )
                            })
                        }
                    </ul> */}
                </div>
            </div>
        )
    }
}