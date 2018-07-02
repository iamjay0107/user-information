import React, {Component} from 'react';
import {connect} from 'react-redux';
import  { GetUser, AddUser, DoSearch }  from '../actions/user'

class HomeContainer extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            users: [],
            users2: [],
            id: null,
            name: null,
            title: null,
            isFetched: false
        }
     }


    valueChanged(event){
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event){
        event.preventDefault();
        const { name, title} = this.state
        this.props.dispatch(AddUser({name, title}))
        this.setState({isFetched: true})
    }

    reloadData(){
        this.props.dispatch(GetUser())
        this.setState({isFetched: true})
    }

    handleSearchUser(event){
        this.setState({isFetched: false});
        const value = event.target.value;
        this.state.users2 = this.state.users.filter((user) => {
            if(user.name != null || user.title != null)
                return user.name.indexOf(value) !== -1 || user.title.indexOf(value) !== -1
        });    
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

                    <button type="submit" className="btn btn-sm btn-primary">Save</button>&nbsp;
                    <button type="button" onClick={this.reloadData.bind(this)} className="btn btn-sm btn-default" >Reload</button>
                </form>
                
            </div>
        )
    }

    render(){
        const {fetching, myusers} = this.props;
        let x = 1;
        let firstData = [];
       
        
        if(this.state.isFetched){
            this.state.users = myusers
            this.state.users2 = myusers
        }

         firstData = this.state.users2.map((d) => {
            return (
                <tr key={d.id} >
                    <td>{x++}.</td>
                    <td>{ d.title }</td>
                    <td>{ d.name }</td>
                    <td>{ d.age }</td>
                    <td>
                        <button key={d.id} className="btn btn-sm btn-danger">
                            Delete
                        </button>
                    </td>
                </tr>
            )
        });

        return(
            <div>
                { this.renderForm() }
                { this.props.message }
                { fetching ? <div>Loading..</div> : "" }

                <div className="row">
                    <div className="col">
                    <label htmlFor="name">Search</label>
                        <div className="input-group input-group-sm mb-3">
                            <input name="name" id="name" type="text" className="form-control" onChange={this.handleSearchUser.bind(this)} />
                        </div>
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table table-condensed table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Title</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Action</th>
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
const mapPropsToState = (state) => {
    
    return {
        message: state.GetUser.message,
        myusers: Array.from(state.GetUser.users),
        fetching: state.GetUser.fetching
    }
}

export default connect(mapPropsToState)(HomeContainer)
