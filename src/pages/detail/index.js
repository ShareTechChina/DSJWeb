import React, { Component } from 'react';
import {fetchDetail} from '../../actions/detail';
import { connect } from 'react-redux';
import { timeFormat,device } from '../../utils/common';
import {fetchCommentsList} from '../../actions/comments';
import emojiData from 'emoji-datasource';
import _ from 'lodash';

let noteId = 1;
class Detail extends Component {
    constructor(props) {
        super(props);
        if (!String.fromCodePoint) {
            (function() {
                var defineProperty = (function() {
                    // IE 8 only supports `Object.defineProperty` on DOM elements
                    try {
                        var object = {};
                        var $defineProperty = Object.defineProperty;
                        var result = $defineProperty(object, object, object) && $defineProperty;
                    } catch(error) {}
                    return result;
                }());
                var stringFromCharCode = String.fromCharCode;
                var floor = Math.floor;
                var fromCodePoint = function() {
                    var MAX_SIZE = 0x4000;
                    var codeUnits = [];
                    var highSurrogate;
                    var lowSurrogate;
                    var index = -1;
                    var length = arguments.length;
                    if (!length) {
                        return '';
                    }
                    var result = '';
                    while (++index < length) {
                        var codePoint = Number(arguments[index]);
                        if (
                            !isFinite(codePoint) ||       // `NaN`, `+Infinity`, or `-Infinity`
                            codePoint < 0 ||              // not a valid Unicode code point
                            codePoint > 0x10FFFF ||       // not a valid Unicode code point
                            floor(codePoint) != codePoint // not an integer
                        ) {
                            throw RangeError('Invalid code point: ' + codePoint);
                        }
                        if (codePoint <= 0xFFFF) { // BMP code point
                            codeUnits.push(codePoint);
                        } else { // Astral code point; split in surrogate halves
                            // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                            codePoint -= 0x10000;
                            highSurrogate = (codePoint >> 10) + 0xD800;
                            lowSurrogate = (codePoint % 0x400) + 0xDC00;
                            codeUnits.push(highSurrogate, lowSurrogate);
                        }
                        if (index + 1 == length || codeUnits.length > MAX_SIZE) {
                            result += stringFromCharCode.apply(null, codeUnits);
                            codeUnits.length = 0;
                        }
                    }
                    return result;
                };
                if (defineProperty) {
                    defineProperty(String, 'fromCodePoint', {
                        'value': fromCodePoint,
                        'configurable': true,
                        'writable': true
                    });
                } else {
                    String.fromCodePoint = fromCodePoint;
                }
            }());
        }
    }

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchDetail(noteId));
        dispatch(fetchCommentsList(noteId));
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

    parse(text) {
        _.each(emojiData, (value, key) => {
            var reg = new RegExp('\\[' + value.unified + '\\]', "g");
            const emoji = String.fromCodePoint(...value.unified.split('-').map((u)=> '0x' + u));
            text = text.replace(reg, emoji);
        });

        return text;
    };

    jumpToApp() {
        if(device() === 'ios'){
            // location.href = 'duoshouji://';
            //location.reload();
        }
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
                    <img alt="" src={val.image.url?val.image.url:'https://avatars2.githubusercontent.com/u/19884155?v=3&s=200'}/>
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
                            <img alt=" " src={val.authorPortraitUrl? val.authorPortraitUrl :'https://avatars2.githubusercontent.com/u/19884155?v=3&s=200'}/>
                        </div>
                        <div>
                            <div>
                                <span className="nick">{val.authorNickname} </span>
                                <span className="time">{timeFormat(new Date(val.createdDateTime), 'yyyy年MM月dd日 hh:mm:ss')}</span>
                            </div>

                            <div className="content">
                                <span>{this.parse(val.comment)}</span>
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
                                            {
                                                <img
                                                    src={detail.note[noteId] ? detail.note[noteId].portrait : 'https://avatars2.githubusercontent.com/u/19884155?v=3&s=200'}
                                                    alt=""/>
                                            }
                                        </div>
                                        <div className="nick">
                                            <div
                                                className="nick-name">{detail.note[noteId] ? detail.note[noteId].nickname : '' }</div>
                                            <div
                                                className="publish-time">{detail.note[noteId] ? timeFormat(new Date(detail.note[noteId].publishedTime), 'yyyy年MM月dd日 hh:mm:ss') : ''}</div>
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
                                        <p className="title">{detail.note[noteId] ? this.parse(detail.note[noteId].title) : ''}</p>

                                        <p className="content">{detail.note[noteId] ? this.parse(detail.note[noteId].content) : '' }</p>
                                    </div>
                                    <div className="comment">
                                        <ul>

                                            {
                                                commentLi
                                            }
                                        </ul>
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
