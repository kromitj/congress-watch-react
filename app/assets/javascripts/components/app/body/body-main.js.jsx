class BodyMain extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    };
    render() {
        return(
            <div>
                <h2>BodyMain</h2>
                <LegislatorList />
                <BillList />
                <CommitteeList />
            </div>
        )
    }
}