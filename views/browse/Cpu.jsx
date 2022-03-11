const React = require('react');
const Default = require('../layout/Default.jsx')

class Cpu extends React.Component {
    render() {
        const { session } = this.props
        return (
            <Default session={session}>
                <div className="browse-text">
                    <h1>List of Recommended Processors</h1>
                    <div className="browse-list">
                        <ul>
                            <li>AMD Ryzen 5 5600X 3.7 GHz | <a href="https://pcpartpicker.com/product/g94BD3/amd-ryzen-5-5600x-37-ghz-6-core-processor-100-100000065box">PC PartPicker</a></li>
                            <li>AMD Ryzen 7 5800X 3.8 GHz | <a href="https://pcpartpicker.com/product/qtvqqs/amd-ryzen-7-5800x-38-ghz-8-core-processor-100-100000063wof">PC PartPicker</a></li>
                            <li>Intel Core i5-12600K 3.7 GHz | <a href="https://pcpartpicker.com/product/BB4Ycf/intel-core-i5-12600k-37-ghz-6-core-processor-bx8071512600k">PC PartPicker</a></li>
                            <li>Intel Core i7-12700K 3.6 GHz | <a href="https://pcpartpicker.com/product/ZbddnQ/intel-core-i7-12700k-36-ghz-8-core-processor-bx8071512700k">PC PartPicker</a></li>
                            <li>AMD Ryzen 5 5600G 3.9 GHz | <a href="https://pcpartpicker.com/product/sYmmP6/amd-ryzen-5-5600g-39-ghz-6-core-processor-100-100000252box">PC PartPicker</a></li>
                            <li>Intel Core i9-12900K 3.2 GHz | <a href="https://pcpartpicker.com/product/gGH7YJ/intel-core-i9-12900k-32-ghz-8-core-processor-bx8071512900k">PC PartPicker</a></li>
                            <li>AMD Ryzen 5 3600 3.6 GHz | <a href="https://pcpartpicker.com/product/9nm323/amd-ryzen-5-3600-36-thz-6-core-processor-100-100000031box">PC PartPicker</a></li>
                            <li>AMD Ryzen 9 5900X 3.7 GHz | <a href="https://pcpartpicker.com/product/KwLwrH/amd-ryzen-9-5900x-37-ghz-12-core-processor-100-100000061wof">PC PartPicker</a></li>
                            <li>AMD Ryzen 9 5950X 3.4 GHz | <a href="https://pcpartpicker.com/product/Qk2bt6/amd-ryzen-9-5950x-34-ghz-16-core-processor-100-100000059wof">PC PartPicker</a></li>
                            <li>AMD Ryzen 7 5700G 3.8 GHz | <a href="https://pcpartpicker.com/product/ycGbt6/amd-ryzen-7-5700g-38-ghz-8-core-processor-100-100000263box">PC PartPicker</a></li>
                        </ul>
                   </div>
                </div>
            </Default>
        )
    }
}

module.exports = Cpu;