const React = require('react');
const Default = require('../layout/Default.jsx')

class Gpu extends React.Component {
    render() {
        const { session } = this.props
        return (
            <Default session={session}>
                <div className="browse-text">
                    <h1>List of Recommended Graphics Cards</h1>
                    <div className="browse-list">
                        <ul>
                            <li>EVGA XC GAMING GeForce RTX 3060 12GB | <a href="https://pcpartpicker.com/product/LpbTwP/evga-geforce-rtx-3060-12-gb-xc-gaming-video-card-12g-p5-3657-kr">PCPartPicker</a></li>
                            <li>EVGA GeForce RTX 3070Ti 8GB FTW3 ULTRA  | <a href="https://pcpartpicker.com/product/M2rRsY/evga-geforce-rtx-3070-ti-8-gb-ftw3-ultra-gaming-video-card-08g-p5-3797-kl">PCPartPicker</a></li>
                            <li>EVGA GeForce RTX 3090 24GB FTW3 ULTRA | <a href="https://pcpartpicker.com/product/PG848d/evga-geforce-rtx-3090-24-gb-ftw3-ultra-gaming-video-card-24g-p5-3987-kr">PCPartPicker</a></li>
                            <li>NVIDIA GeForce RTX 3060Ti 8GB | <a href="https://pcpartpicker.com/product/wvgQzy/nvidia-geforce-rtx-3060-ti-8-gb-founders-edition-video-card-900-1g142-2520-000">PCPartPicker</a></li>
                            <li>NVIDIA GeForce RTX 3080 10GB | <a href="https://pcpartpicker.com/product/RnDkcf/nvidia-geforce-rtx-3080-10-gb-founders-edition-video-card-9001g1332530000">PCPartPicker</a></li>
                            <li>EVGA GeForce RTX 3080Ti 12GB FTW3 ULTRA | <a href="https://pcpartpicker.com/product/FFPQzy/evga-geforce-rtx-3080-ti-12-gb-ftw3-ultra-gaming-le-icx3-video-card-12g-p5-3967-kr">PCPartPicker</a></li>
                            <li>MSI GeForce RTX 3070Ti 8GB GAMING X TRIO | <a href="https://pcpartpicker.com/product/JjGbt6/msi-geforce-rtx-3070-ti-8-gb-gaming-x-trio-video-card-geforce-rtx-3070-ti-gaming-x-trio-8g">PCPartPicker</a></li>
                            <li>NVIDIA GeForce RTX 3070 8GB | <a href="https://pcpartpicker.com/product/m8pmP6/nvidia-geforce-rtx-3070-8-gb-founders-edition-video-card-9001g1422510000">PCPartPicker</a></li>
                            <li>ASUS TUF GeForce RTX 3070Ti 8GB | <a href="https://pcpartpicker.com/product/CqPQzy/asus-geforce-rtx-3070-ti-8-gb-tuf-gaming-oc-video-card-tuf-rtx3070ti-o8g-gaming">PCPartPicker</a></li>
                            <li>Gigabyte GeForce RTX 3070Ti 8GB | <a href="https://pcpartpicker.com/product/DBvdnQ/gigabyte-geforce-rtx-3070-ti-8-gb-aorus-master-video-card-gv-n307taorus-m-8gd">PCPartPicker</a></li>
                        </ul>
                   </div>
                </div>
            </Default>
        )
    }
}

module.exports = Gpu;