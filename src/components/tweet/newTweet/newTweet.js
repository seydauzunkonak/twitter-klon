import React , {Component} from 'react';
import './newTweet.css'
import { connect } from 'react-redux';
import {sendTweet} from '../../../actions' 


class NewTweet extends Component {
  
    constructor(props) {
        super(props);
        const tweet = props.location.state ? props.location.state.tweet : null;
          
          
<div className='new-tweet-container'>
        <div className='new-tweet-wrapper ui form'>
          <div className='field'>
            <textarea rows='3'
                      placeholder='Tweet'
                      value={this.state.tweet}
                      onChange={this.onChange}
                      name='tweet'/>
          </div>
         
          </div>
        )
    

        export default connect(null, { sendTweet})(NewTweet);