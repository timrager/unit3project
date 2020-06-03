class UserProfile extends React.Component {
    state = {
        // do i pull props from something else, or do i actually set state here?
    }
    render () {
        return (
            <div>
                <div id="profile">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                    <p>{this.props.name}</p>
                    <p>{this.props.email}</p>
                    <p>{this.props.shippingStreet}</p>
                    <p>{this.props.shippingCity}</p>
                    <p>{this.props.shippingState}</p>
                    <p>{this.props.shippingZip}</p>
                </div>
                <div id="cart">
                    
                </div>
            </div>
        )
    }
}