// class Role extends React.Component {
//   constructor(props) {
//     super();
//     this.fields = ["Img", "firstname", "lastname", "state", "party"];
//     this.state = {

//     }
//     this.onRoleShow = this.onRoleShow.bind(this)
//   }

//   render() {
//      let roleRow = this.fields.map((field) =>
//         <ItemField {...{value: this.props.role[field], title: field}} />
//     )
//      roleRow[0] = <a href="#" onClick={this.onRoleShow}><img height="75" src={this.props.role.img} alt="Scott Stevens" class="img-responsive img-circle" /></a>
//     return (
//       <tr >
//         {roleRow }     
//       </tr>
//     );
//   }

//   onRoleShow(ev) {
//     ev.preventDefault();   
//     this.props.subscribeToDispatcher("roleShow", this.props.role.id);
//   }
// }