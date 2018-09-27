import React, {Component} from 'react';

import Course from "./Course"

class CourseSales extends Component{
    constructor(props){
        super(props);

        this.state = {
            total: 0
        }
        this.sumPrice = this.sumPrice.bind(this);
    }

    sumPrice(price){
        this.setState({
            total: this.state.total + price
        })
    }

    render(){
        console.log(this.props.items)

        const courses = this.props.items.map((item, i)=>{
            return <Course name={item.name} price={item.price}
            key={i}
            sumPrice={this.sumPrice}
            active={item.active}
            />
        });
        return(
            <div>
                <h1>You can buy these courses: </h1>
                <div id="courses">
                    {courses}
                    <p id="total">Total <b>{this.state.total}</b></p>
                </div>
            </div>
        );
    }
}



export default CourseSales;