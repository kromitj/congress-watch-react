class Body extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
    };
    render() {
        bodyHeaderProps = this.packBodyHeaderProps()
        return(
            <div>
                <h2>Body</h2>
                <BodyHeader {...bodyHeaderProps } />
                <BodyMain {...this.props } />
            </div>
        )
    }

    packBodyHeaderProps() {
        return {
            onSend: this.props.onSend,
            isMobile: this.props.isMobile
        }
    }
}