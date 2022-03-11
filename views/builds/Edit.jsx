const React = require('react');

const Default = require('../layout/Default.jsx');

class Edit extends React.Component {
    render(){
        const { build, session } = this.props
        return (
            <Default session={session}>
                <form action={`/builds/${build._id}?_method=PUT`} method="POST">
                    <fieldset>
                    <legend>Edit {build.name}</legend>
                    <label>
                        BUILD NAME:<input
                        type="text"
                        name="name"
                        placeholder="enter build name"
                        defaultValue={build.name}
                        />
                    </label>
                    <br />
                    <label>
                        CASE NAME:<input
                        type="text"
                        name="case"
                        placeholder="enter case name"
                        defaultValue={build.case}
                        />
                    </label>
                    <br />
                    <label>
                        MOTHERBOARD:<input
                        type="text"
                        name="motherboard"
                        placeholder="enter motherboard model"
                        defaultValue={build.motherboard}
                        />
                    </label>
                    <br />
                    <label>
                        PROCESSOR:<input
                        type="text"
                        name="processor"
                        placeholder="enter processor model"
                        defaultValue={build.processor}
                        />
                    </label>
                    <br />
                    <label>
                        GRAPHICS CARD:<input
                        type="text"
                        name="graphicsCard"
                        placeholder="enter graphics card model"
                        defaultValue={build.graphicsCard}
                        />
                    </label>
                    <br />
                    <label>
                        MEMORY:<input
                        type="text"
                        name="memory"
                        placeholder="enter memory name"
                        defaultValue={build.memory}
                        />
                    </label>
                    <br />
                    <label>
                        CPU COOLER:<input
                        type="text"
                        name="cpuCooler"
                        placeholder="enter cpu cooler name"
                        defaultValue={build.cpuCooler}
                        />
                    </label>
                    <br />
                    <label>
                        POWER SUPPLY:<input
                        type="text"
                        name="powerSupply"
                        placeholder="enter power supply name"
                        defaultValue={build.powerSupply}
                        />
                    </label>
                    <br />
                    <label>
                        STORAGE:<input
                        type="text"
                        name="storage"
                        placeholder="enter storage name"
                        defaultValue={build.storage}
                        />
                    </label>
                    <br />
                    <label>
                        UP-TO-DATE?:{ this.props.build.upToDate? <input type="checkbox" name="upToDate" defaultChecked />: <input type="checkbox" name="upToDate"/> }
                    </label>
                    <br />
                    </fieldset>
                    <input type="submit" value={`Submit Changes to ${build.name}`} />
                </form>
            </Default>
        )
    }
}

module.exports = Edit;