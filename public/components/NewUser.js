class NewUser extends React.Component {
    render() {
        const { 
            handleSignUp, 
            handleFormInput, 
            password, 
            email,
            name,
            shippingStreet,
            shippingCity,
            shippingZip
        } = this.props;
    return(
        <div className="newUserForm">
            <form onSubmit={handleSignUp}>
                <h2>Create a Profile</h2>
                <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={handleFormInput} />
                <label htmlFor="email">Email</label>    
                    <input type="text" id="email" value={email} onChange={handleFormInput} />
                <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={handleFormInput} />
                <label htmlFor="shippingStreet">Street Address</label>
                    <input type="text" id="shippingStreet" value={shippingStreet} onChange={handleFormInput} />
                <label htmlFor="shippingCity">City</label>
                    <input type="text" id="shippingCity" value={shippingCity} onChange={handleFormInput} />
                <label htmlFor="shippingZip">Zip Code</label>
                    <input type="text" id="shippingZip" value={shippingZip} onChange={handleFormInput} />
                    <input type="submit"/>
            </form>
        </div>
    )
    }
}