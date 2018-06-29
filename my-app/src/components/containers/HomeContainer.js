import React, {Component} from 'react';
import {connect} from 'react-redux';
import  { GetUser}  from '../actions/user'

class HomeContainer extends Component{


    componentDidMount(){
        this.props.dispatch(GetUser())
    }

    render(){    
        const { myusers, fetching } = this.props;
        let x = 1;

        if(fetching){
            return <div>Loading..</div>
        }

        const firstData = myusers.map((d) => {
            return (
            <tr key={d.id}>
                <td>{x++}</td>
                <td>{ d.title }</td>
                <td>{ d.name }</td>
                <td>{ d.age }</td>
            </tr>)
        });
        
        
        return(
            <div>           
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
        myusers: Array.from(store.users.users),
        fetching: store.users.fetching
    }
})(HomeContainer)