import React,{Component} from 'react'
import { Button } from 'antd-mobile'

export default class Home extends Component{
    toMy = () =>{
        this.props.history.replace('/My')
    }
    toBreakEgg = () =>{
        this.props.history.replace('/BreakEgg')
    }
    render(){
        return(
            <div>
                <p>Home</p>
                <Button type="primary" onClick={this.toMy}>toMy</Button>
                <Button type="primary" onClick={this.toBreakEgg}>toBreakEgg</Button>
            </div>
        )
    }
}