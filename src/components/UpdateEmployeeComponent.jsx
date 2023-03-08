import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            caketype: '',
            cakeflavour: '',
            cakeweight:'',
            cakesbyocassion: ''
        }
        this.changeCaketypeHandler = this.changeCaketypeHandler.bind(this);
        this.changeCakeflavourHandler = this.changeCakeflavourHandler.bind(this);
        this.changeCakeweightHandler = this.changeCakeweight.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({caketype: employee.caketype,
               cakeflavour: employee.cakeflavour,
             cakeweight:employee.cakeweight,
               cakesbyocassion : employee.cakesbyocassion
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {caketype: this.state.caketype, cakeflavour: this.state.cakeflavour,cakeweight:this.state.cakeweight, cakesbyocassion: this.state.cakesbyocassion};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }
    
    changeCaketypeHandler= (event) => {
        this.setState({caketype: event.target.value});
    }

    changeCakeflavourHandler= (event) => {
        this.setState({cakeflavour: event.target.value});
    }

    changeCakeweightHandler= (event) => {
        this.setState({cakeweight: event.target.value});
    }

    changeCakesbyocassionHandler= (event) => {
        this.setState({cakesbyocassion: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update </h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> CAKE TYPE </label>
                                            <input placeholder="Caketype" name="caketype" className="form-control" 
                                                value={this.state.caketype} onChange={this.changeCaketypeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> CAKE FLAVOUR </label>
                                            <input placeholder="Cakeflavour" name="cakeflavour" className="form-control" 
                                                value={this.state.cakeflavour} onChange={this.changeCakeflavourHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>CAKE WEIGHT </label>
                                            <input placeholder="Cakeweight" name="cakeweight" className="form-control" 
                                                value={this.state.cakeweight} onChange={this.changeCakeweightHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> CAKES BY OCASSION </label>
                                            <input placeholder="Cakesbyocassion" name="cakesbyocassion" className="form-control" 
                                                value={this.state.cakesbyocassion} onChange={this.changeCakesbyocassionHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent
