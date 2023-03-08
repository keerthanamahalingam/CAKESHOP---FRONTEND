import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

class ViewEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View </h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> CAKE TYPE </label>
                            <div> { this.state.employee.caketype }</div>
                        </div>
                       
                        <div className = "row">
                        <label> CAKE FLAVOUR </label>
                        <div> { this.state.employee.cakeflavour }</div>
                    </div>
                     <div className = "row">
                    <label> CAKE WEIGHT </label>
                    <div> { this.state.employee.cakeweight }</div>
                </div>
                        <div className = "row">
                            <label> CAKES BY OCASSION </label>
                            <div> { this.state.employee.cakesbyocassion }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewEmployeeComponent
