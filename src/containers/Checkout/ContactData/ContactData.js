import React from 'react'
import classes from './ContactData.module.css'
import Button from '../../../components/UI/Button/Button'
import axios from '../../../axios-orders'
import Spinner from '../../../components/UI/Spinner/Spinner'

class ContactData extends React.Component {

    state = {
        name: 'Felipe Reina',
        email: 'test@test.com',
        address: {
            street: 'TestStreet 4',
            zipCode: '1234',
        },
        loading: false,
    }

    orderHandler = (event) =>{
        event.preventDefault()
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Felipe Reina',
                address: {
                    street: 'TestStreet 4',
                    zipCode: '1234',
                    country: 'Portugal'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false })
                this.props.history.push("/")
            })
            .catch(error => {
                this.setState({ loading: false })
            })
    }

    render() {
        let form = (<form>
            <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
            <input className={classes.Input} type="email" name="email" placeholder="Your Mail" />
            <input className={classes.Input} type="text" name="street" placeholder="Your Street" />
            <input className={classes.Input} type="text" name="postal" placeholder="Your Postal Code" />
            <Button clicked={this.orderHandler} btnType="Success">ORDER</Button>
        </form>)

        if(this.state.loading){
            form = (<Spinner />)
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your contact data</h4>
                {form}
            </div>
        )
    }
}

export default ContactData