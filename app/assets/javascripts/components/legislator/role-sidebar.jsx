class RoleSideBar extends React.Component {
    constructor(props) {
        super();
        this.state = {

        }
        this.senatorShow = this.senatorShow.bind(this);
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


$('.sign-in-bttn').on('click', function(event) {
    ev.preventDefault();
    

    // ajaxRequest.done(function (formHtml) {
    //   if ($('.form-holder').html().length === 0){
    //     $(".form-holder").animate({
    //       height: '200px'}, "fast"
    //     );
    //     $('.form-holder').html(formHtml);
    //   }else{
    //     $('.form-holder').empty();
    //   }
    // });
  }); // end login click handler