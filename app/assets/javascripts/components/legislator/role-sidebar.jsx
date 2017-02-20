class RoleSideBar extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
        this.onSenatorClick = this.onSenatorClick.bind(this);
    };
    render() {
        return(
            <li>
                <a href="javascript:;" data-toggle="collapse" data-target="#legislator-drop"><i className="fa fa-fw fa-arrows-v"></i> Legislators<i className="fa fa-fw fa-caret-down"></i></a>
                <ul id="legislator-drop" className="collapse">
                    <li>
                        <a href="/legislators" className="senatorShow"  onClick={this.senatorShow}>Sentors</a>
                    </li>
                    <li>
                        <a href="#">Representatives</a>
                    </li>
                </ul>
            </li>
        )
    }

    onSenatorClick(ev) {

    }

    senatorShow(ev) {
        ev.preventDefault();
        console.log("/legislators")
        var $link = $(this);
        console.log($link.attr("href"))
        var ajaxRequest = $.ajax({
          url: "/legislators",
        });
        ajaxRequest.done(function (senators) {
            console.log(senators)
        });
    }
}


