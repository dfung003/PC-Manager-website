const React = require('react');

class DefaultLayout extends React.Component {
    render(){
        return(
            <html>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossOrigin="anonymous" />
                    <link rel="stylesheet" href="/css/app.css" /> 
                </head>
                    <body>
                        <header>PCManager</header>
                        {this.props.children}
                        <footer>Created By: Damon Fung</footer>

                    </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;