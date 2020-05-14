import React,{Component} from 'react'
import { Button } from 'antd-mobile'
import {getOrderById} from '../../api/api'

export default class Home extends Component{
    toHome = () =>{
        this.props.history.replace('/Home')
    }
    requestList = ()=>{
        console.log("requestList")
    //     let data ={
    //      "true_name":"范德萨",
    //      "mobile":"15555555555",
    //      "type":"0"
    //    }
        getOrderById().then(res=>{
            console.log('res',res)
        }).catch(error=>{
          console.log("error",error)
        })
       }
    render(){
        return(
            <div>
                <p>My34343</p>
                <Button type="primary" onClick={this.requestList}>toHome</Button>
            </div>
        )
    }
}