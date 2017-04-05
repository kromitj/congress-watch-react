class BreadCrumbs extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }        
    };
    render() {
        let idx = 0
        const numOfCrumbs = this.props.breadCrumbs.length
    	const crumbs = this.props.breadCrumbs.map(function(crumb) {
    		lastCrumb = idx == numOfCrumbs-1
            const crumbProps = {name: crumb, currentPage: lastCrumb, requestSegue: this.props.prepareForSegue}
            const key = idx
            idx++
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
