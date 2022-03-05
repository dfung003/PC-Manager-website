const React = require('react');

const Default = require('../layout/Default.jsx');

class New extends React.Component {
    render(){
        return (
            <Default>
                <form action="/builds" method="POST">
                <fieldset>
                    <legend>Create a Build</legend>
                    <label>
                        Name Of Your Build:<input type="text" name="name" placeholder="enter build name" /> <br />
                    </label>
                    <label>
                        Motherboard:<input type="text" name="motherboard" placeholder="enter motherboard model" /> <br />
                    </label>
                    <label>
                        Processor:<input type="text" name="processor" placeholder="enter processor model" /> <br />
                    </label>
                    <label>
                        Graphics Card:<input type="text" name="graphicsCard" placeholder="enter graphics card model" /> <br />
                    </label>
                    <label> Is Your Build Up-To-Date?:<input type="checkbox" name="upToDate" /> </label> <br />
                    </fieldset>
                    <input type="submit" value="Create Your New PC Build" />
                </form>
            </Default>
        )
    }
}

module.exports = New;