class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };
    render() {
        return (
            <div>
                <h2>SideBar</h2>
                <User />
                <Groups />
            </div>
        )
    }
}