import React,{Component} from 'react'
import { Button } from 'antd-mobile'

export default class Home extends Component{
    toMy = () =>{
        this.props.history.replace('/My')
    }
    render(){
        return(
            <div>
                <p>Home</p>
                <Button type="primary" onClick={this.toMy}>toMy</Button>
            </div>
        )
    }
}