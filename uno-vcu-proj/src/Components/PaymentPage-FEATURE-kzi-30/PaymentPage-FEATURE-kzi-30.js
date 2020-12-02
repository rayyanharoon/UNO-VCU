import React from "react";


class PaymentPage extends React.Component {
    constructor(props){
        super(props);
    
        this.state = {
  
        }
      }

      submitPayment = () => {
        console.log("Submit button was called");
        let data = {
            firstName: document.getElementById("fnameInput").value,
            lastName: document.getElementById("lnameInput").value,
            email: document.getElementById("emailInput").value,
            address: document.getElementById("addressInput").value,
            phone: document.getElementById("phoneInput").value,
            paymentMethod: document.getElementById("paymentMethodInput").value
        }
        fetch('http://localhost:8000/Payment',
        {
            method:'POST',
            headers:{'Content-type' : 'Application/json'},
            body: JSON.stringify({data})
        })
        .then(response =>response.json)
        .then(data => this.setState({"data":data}))
    }


    render(){
        return (
            <div className="App">
            <h1>Payment</h1>

                <div class="input-group justify-content-center">
                <div class="input-group-prepend">
                    <span class="input-group-text">First and last name</span>
                </div>
                <input type="text" aria-label="First name" class="form-control" id="fnameInput"/>
                <input type="text" aria-label="Last name" class="form-control" id="lnameInput"/>
                </div>

                <div class="input-group flex-nowrap">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="addon-wrapping">Email</span>
                </div>
                <input type="text" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" id="emailInput"/>
                </div>

                <div class="input-group flex-nowrap">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="addon-wrapping">Address</span>
                </div>
                <input type="text" class="form-control" placeholder="Address" aria-label="Address" aria-describedby="addon-wrapping" id="addressInput"/>
                </div>

                <div class="input-group flex-nowrap">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="addon-wrapping">Phone</span>
                </div>
                <input type="text" class="form-control" placeholder="1234567890" aria-label="Phone" aria-describedby="addon-wrapping" id="phoneInput"/>
                </div>

                
                <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Payment Method</label>
                </div>
                <select class="custom-select" id="paymentMethodInput">
                    <option selected>Choose...</option>
                    <option value="VISA">VISA</option>
                    <option value="MasterCard">MasterCard</option>
                    <option value="Cheque">Cheque</option>
                    <option value="Cash">Cash</option>
                </select>

                <div class="w-100"></div>

                <div class="input-group-text">
                <input type="checkbox" aria-label="Checkbox for following text input"/> Use Same Address for Billing Address
                </div>


                <div class="w-100"></div>
                <button type="button" class="btn btn-primary" onClick={this.submitPayment}>Submit Payment</button>


                </div>
            </div>
        )
    }
}

export default PaymentPage;