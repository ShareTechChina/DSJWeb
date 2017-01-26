import React, { Component } from 'react';
import {fetchDetail} from '../../actions/detail';
import { connect } from 'react-redux';

class Detail extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchDetail(1));
    }

    render() {
        return (
            <div className="Detail">
                <div className="statusbar-overlay"></div>
                <div className="panel-overlay"></div>
                <div className="panel panel-left panel-reveal">
                    <div className="content-block">
                        <p>Left panel content goes here</p>
                    </div>
                </div>
                <div className="views">
                    <div className="view view-main">
                        <div className="navbar">
                            <div className="navbar-inner">
                                <div className="left"></div>
                                <div className="center sliding">笔记详情</div>
                                <div className="right">
                                </div>
                            </div>
                        </div>
                        <div className="pages navbar-through toolbar-through">
                            <div data-page="index" className="page">
                                <div className="page-content">

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {  detail } = state;
    return {
        detail
    };
}
export default connect(mapStateToProps)(Detail);
