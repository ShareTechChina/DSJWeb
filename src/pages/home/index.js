import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div class="statusbar-overlay"></div>
                <div class="panel-overlay"></div>
                <div class="panel panel-left panel-reveal">
                    <div class="content-block">
                        <p>Left panel content goes here</p>
                    </div>
                </div>
                <div class="views">
                    <div class="view view-main">
                        <div class="navbar">
                            <div class="navbar-inner">
                                <div class="center sliding">Awesome App</div>
                                <div class="right">
                                    <a href="#" class="link icon-only open-panel"><i class="icon icon-bars-blue"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="pages navbar-through toolbar-through">
                            <div data-page="index" class="page">
                                <div class="page-content">
                                    <p>Page content goes here</p>
                                    <a href="about.html">About app</a>
                                </div>
                            </div>
                        </div>
                        <div class="toolbar">
                            <div class="toolbar-inner">
                                <a href="#" class="link">Link 1</a>
                                <a href="#" class="link">Link 2</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
