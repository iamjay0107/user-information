import React, { Component } from 'react'
import {Header} from '../header/header';



export default class Layout extends Component{

    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <Header />
                        </div>
                        <div className="col">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
