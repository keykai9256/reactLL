import React, { Component } from 'react';
import './index.css';
import egg1img from '../../assets/img/egg.png'
import egg2img from '../../assets/img/egg2.png'
import egg3img from '../../assets/img/egg3.png'
import icon1img from '../../assets/img/icon1.png'

class BreakEgg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            egg1img:egg1img,
            egg2img:egg2img,
            egg3img:egg3img,
            icon1img:icon1img,
            egglist: [
                {
                    id: 1,
                    showegg1: true,
                    showegg2: false,
                    showegg3: false,
                    showhammer: false
                },
                {
                    id: 2,
                    showegg1: true,
                    showegg2: false,
                    showegg3: false,
                    showhammer: false
                },
                {
                    id: 3,
                    showegg1: true,
                    showegg2: false,
                    showegg3: false,
                    showhammer: false
                }
            ],
            styleObject2: {
			    animationPlayState: 'running',
			    WebkitAnimationPlayState: 'running'
			},
        }
    }
    render() {
        let { egglist,styleObject2 } = this.state
        return (
            <div>
                <div className='app'>
                    <div className='eggbox'>
                        {
                            egglist.map((item, i) => 
                                <div key={i} className={ `egg ${item.id===1?'egg1':''}${item.id===2?'egg2':''}${item.id===3?'egg3':''}`} style={ styleObject2 }>
                                    { item.showegg1?<img className='egg-img' src={ egg1img } alt='egg'></img>:null }
                                    { item.showegg2?<img className='egg-img' src={ egg2img } style={{width: '100%'}} alt='egg'></img>:null }
                                    { item.showegg3?<img className='egg-img' src={ egg3img } style={{width: '100%'}} alt='egg'></img>:null }
                                    { item.showhammer?<img className='hammer' src={ icon1img } style={{width: '1.5rem'}}  alt='egg'></img>:null }
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default BreakEgg;