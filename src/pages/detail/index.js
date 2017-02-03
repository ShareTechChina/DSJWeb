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
        setTimeout(()=>{
            window.f7.swiper('.swiper-container', {
                speed: 100,
                pagination: '.swiper-pagination',
                spaceBetween: 0
            });
        },0);

    }

    render() {
        let { detail,comments } = this.props;
        const location = this.props.router.getCurrentLocation();
        const pathname = location.pathname;
        const last = pathname.split('/')[pathname.split('/').length - 1];
        noteId = /^[0-9]*$/.test(last) ? last : noteId;
        let slide;
        let commentLi;
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

        if (comments.commentsList) {
            commentLi = comments.commentsList.map((val, key) => {
                return (
                    <li key={key}>
                        <div>
                            <img src='https://facebook.github.io/react/img/logo_small_2x.png'/>
                        </div>
                        <div>
                            <div>
                                <span className="nick">{val.authorNickname} </span>
                                <span className="time">2016-08-05</span>
                            </div>

                            <div className="content">
                                <span>{val.comment}</span>
                            </div>
                        </div>
                    </li>);
            }, this);
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
                                            <div
                                                className="nick-name">{detail.note[noteId] ? detail.note[noteId].nickname : '' }</div>
                                            <div
                                                className="publish-time">{detail.note[noteId] ? timeFormat(detail.note[noteId].publishTime, 'yyyy年MM月dd日 hh:mm:ss') : ''}</div>
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
                                        <ul>

                                            {
                                                commentLi
                                            }
                                        </ul>
                                    </div>
                                </div>
                                <div className="toolbar">
                                    <div className="toolbar-inner">
                                        <div className="slogan">
                                            <img src={require('../../assets/logo.png')} alt=""/>
                                            <span className="content">淘宝返利，分享创造价值</span>
                                        </div >
                                        <a href="#" className="link enter">进入剁手记</a>
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
