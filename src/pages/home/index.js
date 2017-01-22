import React, { Component } from 'react';

class App extends Component {
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
                                <div className="center sliding">Awesome App</div>
                                <div className="right">
                                    <a href="#" className="link icon-only open-panel"><i className="icon icon-bars-blue"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="pages navbar-through toolbar-through">
                            <div data-page="index" className="page">
                                <div className="page-content">
                                    <p>Page content goes here</p>
                                    <a href="about.html">About app</a>
                                </div>
                            </div>
                        </div>
                        <div className="toolbar">
                            <div className="toolbar-inner">
                                <a href="#" className="link">Link 1</a>
                                <a href="#" className="link">Link 2</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
