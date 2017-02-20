class TopNavRight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    render() {
        return (
            <ul className="nav navbar-right top-nav">
                <Alert />
               <User />
            </ul>
        )
    }
}