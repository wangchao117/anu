import React from '../../../../ReactWX';
class P extends React.Component {
    constructor() {
        const ROOT_PATH = '/pages/demo/view';
        this.state = {
            nv: [
                {
                    url: `${ROOT_PATH}/view/index`,
                    name: 'view'
                },
                {
                    url: `${ROOT_PATH}/swiper/index`,
                    name: 'swiper'
                },
                {
                    url: `${ROOT_PATH}/movableView/index`,
                    name: 'movable view'
                }
            ]
        };
    }
    config = {
        navigationBarBackgroundColor: '#ffffff',
        navigationBarTextStyle: '#fff',
        navigationBarBackgroundColor: '#0088a4',
        navigationBarTitleText: 'view demo',
        backgroundColor: '#eeeeee',
        backgroundTextStyle: 'light'
    };
    render() {
        return (
            <div class="container">
                <ul class="item-list">
                    {this.state.nv.map(function(item) {
                        return (
                            <li class="item">
                                <navigator
                                    open-type="navigate"
                                    hover-class="navigator-hover"
                                    url={item.url}
                                >
                                    {item.name}
                                </navigator>
                            </li>
                        );
                    }, true)}
                </ul>
            </div>
        );
    }
}
Page(React.createPage(P, 'pages/demo/view/index/index'));
export default P;
