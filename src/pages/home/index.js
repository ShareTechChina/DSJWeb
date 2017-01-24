import React, { Component } from 'react';

class App extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <div className="App">
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

export default App;
