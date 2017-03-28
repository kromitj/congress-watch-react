class Body extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }        
    };
    render() {
        return(
            <div id="page-wrapper">

                <div className="container-fluid">

                    <div className="row">
                        <div className="col-lg-12">
                            < BreadCrumbs {...{breadCrumbs: this.props.breadCrumbs, prepareForSegue: this.props.prepareForSegue}} />
                        </div>
                    </div>

                   <SignUpAlert {...{user:this.props.user, subscribeToDispatcher: this.props.prepareForSegue}} />
                    <div className="row">
                        <div className="col-lg-12">
                            { this.props.content }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}