class BreadCrumbs extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }        
    };
    render() {
        let key = 0
    	const crumbs = this.props.breadCrumbs.map(function(crumb) {
            const crumbProps = {name: crumb, currentPage: false, requestSegue: this.props.prepareForSegue}
            key++
            return <Crumb key={`crumb${key}`}  {...crumbProps}/>;
        });
        return(
        <ol className="breadcrumb">
            <li className="active">
                <i className="fa fa-dashboard"></i>
            </li>
            { crumbs }
        </ol>                       
        )
    }
}
