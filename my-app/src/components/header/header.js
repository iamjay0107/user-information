import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export class Header extends Component{

    render(){
        return(
            <div>
                { this.props.children }
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to='/Home' className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/page1' className="nav-link">Page 1</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Page 2</a>
                    </li>
                </ul>
            </div>
        );
    }
}

