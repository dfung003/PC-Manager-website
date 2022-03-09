const React = require('react');

const Default = require('../layout/Default.jsx');

class New extends React.Component {
    render(){
        return (
            <Default>
                <a href="/reviews">Go Back To Product Reviews Page</a>
                <form action="/reviews" method="POST">
                <br />
                <fieldset>
                    <legend>Review a Product</legend>
                    <label>
                        Your Name:<input type="text" name="author" placeholder="enter your name" /> 
                    </label>
                    <br />
                    <label>
                        Product Name:<input type="text" name="productName" placeholder="enter product name" />
                    </label>
                    <br />
                    <label>
                        Your Product Review: <br /><textarea name="entry" rows="10" cols="30"></textarea><br /> 
                    </label>
                    <br />
                    <label>
                        Your Product Rating:<input type="number" name="rating" min={0} max={5} /> / 5
                    </label>
                    <br /> 
                    </fieldset>
                    <input type="submit" value="Create New Product Review" />
                </form>
            </Default>
        )
    }
}

module.exports = New;