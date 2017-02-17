class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMobile: props.isMobile
        };
    };
    render() {
        toBeRendered = this.generateRender();
        return (
            toBeRendered 
        )
    };

    generateRender() {
        if (this.props.isMobile) {
            return (
               <div>
                    <h2>{ this.props.appName } mobile</h2>
                    <Alert />
                </div> 
            )
        } else {
            return (
                <div>
                    <h2>{ this.props.appName } non mobile</h2>
                    <Alert />
                    <User />
                </div> 
            )
        }
    }
};