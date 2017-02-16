class BodyHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };
    render() {
        return (
            <div>
                <h2>BodyHeader</h2>
                <SideBarHamburger />
                <BodyTitle />
                <SearchBar />
            </div>
            )
    };
};