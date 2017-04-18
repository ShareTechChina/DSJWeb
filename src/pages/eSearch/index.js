import React, { Component } from 'react';
import './style.css';

class ESearch extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    _goTo(site) {
        if(site === 'taobao')
            location.href = 'https://s.m.taobao.com/h5entry';
        if(site === 'tmall')
            location.href = 'https://www.tmall.com/?from=m';
        if(site === 'jd')
            location.href = 'https://m.jd.com/';
        if(site === 'baidu')
            location.href = 'https://m.baidu.com/';
    }

    render() {
        return (
            <div className="eSearch">
                <div className="title">搜索快捷入口</div>
                <div className="icons">
                    <div className="icon" id="taobao" onClick={()=>this._goTo('taobao')}></div>
                    <div className="icon" id="tmall" onClick={()=>this._goTo('tmall')}></div>
                    <div className="icon" id="jd" onClick={()=>this._goTo('jd')}></div>
                    <div className="icon" id="baidu" onClick={()=>this._goTo('baidu')}></div>
                </div>
            </div>
        );
    }
}

export default ESearch;
