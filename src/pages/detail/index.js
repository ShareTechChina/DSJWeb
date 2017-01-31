import React, { Component } from 'react';
import {fetchDetail} from '../../actions/detail';
import { connect } from 'react-redux';
import { timeFormat } from '../../utils/common';
import {fetchCommentsList} from '../../actions/comments';

let noteId = 1;
class Detail extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchDetail(noteId));
        dispatch(fetchCommentsList(noteId))
    }

    componentDidUpdate() {
        window.f7.swiper('.swiper-container', {
            speed: 400,
            pagination: '.swiper-pagination',
            spaceBetween: 0
        });
    }

    render() {
        let { detail } = this.props;
        let slide;
        if (detail.note[noteId]) {
            slide = detail.note[noteId].images.map((val, key) => {
                return ( <div className="swiper-slide" key={key}>
                    <img src={val.image.url}/>
                </div>);
            }, this);
        } else {
            slide =
                <div className="swiper-slide">
                    <img src=''/>
                </div>
        }
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
                                <div className="center sliding">剁手记</div>
                                <div className="right">
                                </div>
                            </div>
                        </div>
                        <div className="pages navbar-through toolbar-through">
                            <div data-page="index" className="page">
                                <div className="page-content">
                                    <div className="user">
                                        <div className="portrait">
                                            <img
                                                src={detail.note[noteId] ? detail.note[noteId].portrait : 'https://avatars2.githubusercontent.com/u/19884155?v=3&s=200'}
                                                alt=""/>
                                        </div>
                                        <div className="nick">
                                            <div className="nick-name">{detail.note[noteId] ? detail.note[noteId].nickname : '' }</div>
                                            <div className="publish-time">{detail.note[noteId] ? timeFormat(detail.note[noteId].publishTime, 'yyyy年MM月dd日 hh:mm:ss') : ''}</div>
                                        </div>
                                    </div>
                                    <div className="swiper-container">
                                        <div className="swiper-wrapper">
                                            {
                                                slide
                                            }
                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                    <div className="description">
                                        <p className="title">{detail.note[noteId] ? detail.note[noteId].title : ''}</p>

                                        <p className="content">{detail.note[noteId] ? detail.note[noteId].content : '' }</p>
                                    </div>
                                    <div className="comment">
                                    </div>
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
    const {  detail,comments } = state;
    return {
        detail,
        comments
    };
}
export default connect(mapStateToProps)(Detail);
