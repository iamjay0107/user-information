import React, {Component} from 'react';
import {connect} from 'react-redux';
import  { GetUser, AddUser}  from '../actions/user'

class HomeContainer extends Component{

    constructor(){
        super();
        this.state = {
            id: null,
            name: null,
            title: null
        }
    }


    valueChanged(event){
        this.setState({ [event.target.name]: event.target.value })
    }


    handleSubmit(event){
        event.preventDefault();
        const { name, title} = this.state
        this.props.dispatch(AddUser({name, title}))
    }

    reloadData(){
        this.props.dispatch(GetUser())
    }


    renderForm(){

        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>

                    <label htmlFor="name">Name</label>
                    <div className="input-group input-group-sm mb-3">                             
                        <input name="name" id="name" type="text" className="form-control" onChange={this.valueChanged.bind(this)} />
                    </div>

                    <label htmlFor="title">Title</label>
                    <div className="input-group input-group-sm mb-3">                             
                        <input name="title" id="title" type="text" className="form-control" onChange={this.valueChanged.bind(this)} />
                    </div>
                                                        
                    <button type="submit" className="btn btn-sm btn-primary">Save</button>
                </form>
                <button type="button" className="btn btn-sm btn-default" onClick={this.reloadData.bind(this)}>Reload</button>
            </div>
        )
    }

    render(){    
        const { myusers, fetching, message } = this.props;
        let x = 1;    

        const firstData = myusers.map((d) => {
            return (
            
            <tr key={d.id}>
                <td>{x++}.</td>
                <td>{ d.title }</td>
                <td>{ d.name }</td>
                <td>{ d.age }</td>
            </tr>)
        });
                
        return(
            <div>
                { this.renderForm() }
                { this.props.message }
                { fetching ? <div>Loading..</div> : "" }
                <div className="table-responsive">
                    <table className="table table-condensed table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Title</th>
                                <th>Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                               { firstData }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default connect((store) => {
    return {
        message: store.GetUser.message,
        myusers: Array.from(store.GetUser.users),
        fetching: store.GetUser.fetching
    }
})(HomeContainer)