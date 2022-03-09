const React = require('react');
const Default = require('../layout/Default.jsx')

class Show extends React.Component {
    render(){
        const { review } = this.props;
        return (
            <Default>
              <div>
                <article>
                  <a href="/reviews">Go Back To Product Reviews Page</a>
                  <br />
                  <br />
                  <h2>
                    Written by: {review.author} <br />
                    Product Name: {review.productName} <br />
                    Product Review: {review.entry} <br />
                    Product Rating: {review.rating} <br />
                  </h2>
                  
                  <hr />
                </article>
              </div>
          </Default>
        )
    }
}

module.exports = Show;