const React = require('react');
const Default = require('../layout/Default.jsx')

const isChecked = (starId, review_rating) => {
  if ( review_rating >= starId) {
      return "fa fa-star checked"
  } else { return "fa fa-star not-checked" }
}

class Show extends React.Component {
    render(){
        const { review, session } = this.props;
        return (
            <Default session={session}>
              <div>
                <article>
                  <a href="/reviews">Go Back To Product Reviews Page</a>
                  <hr />
                  <br />
                  <h2 className="review-show">
                    Written by: {review.author} <br />
                    Product Name: {review.productName} <br />
                    Product Review: {review.entry} <br />
                    Product Rating: <span class={isChecked(1,review.rating)}></span>
                            <span class={isChecked(2,review.rating)}></span>
                            <span class={isChecked(3,review.rating)}></span>
                            <span class={isChecked(4,review.rating)}></span>
                            <span class={isChecked(5,review.rating)}></span>
                  </h2>
                  
                  <hr />
                </article>
              </div>
          </Default>
        )
    }
}

module.exports = Show;