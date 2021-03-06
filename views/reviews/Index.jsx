const React = require('react');
const Default = require('../layout/Default.jsx')

class Index extends React.Component {
    render(){
        const { reviews, session } = this.props;
        return (
            <Default session={session}>
                <div id="reviews-title">
                    <h1>Product Reviews</h1>
                    <nav>
                        <a href="/reviews/new">Add A New Product Review</a>
                    </nav>
                    <hr />
                    <br />
                    {
                        reviews.map((review) => (
                            <article className="review">
                                <a href={`/reviews/${review._id}`}>
                                    <h2>
                                        {review.author}'s product review of {review.productName}
                                    </h2>
                                </a>
                            </article>
                        ))
                    }
                </div>
            </Default>
        )
    }
}

module.exports = Index;