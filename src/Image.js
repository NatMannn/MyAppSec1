import React, { Component } from 'react'
// ต้องจำแพทเทิลนี้ให้ได้
class Image extends Component {
    render() {
        return (
            <figure className="image is-3by5">
                
                <img src={this.props.src} alt={this.props.alt}/> 
            </figure>
        );
    }
};
// ห้ามลืมใส / ต้องใส่นะ
/*alt="Iphone X  ในกรณที่รูปไม่ขึ้น*/
// ต้องใส่ทั้ง src กับ alt
export default Image