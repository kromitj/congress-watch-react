var TestUtils = React.addons.TestUtils
const PROPS = {
	role: {
		party: "D",
		firstname: "Tammy",
		lastname: "Balwin",
		desc: "Senator Tammy Baldwin of Wisconsin",
		id: "4000013",
		img:  "https://raw.githubusercontent.com/unitedstates/images/gh-pages/congress/225x275/B001230.jpg"
	},
	subscribeToDispatcher: function(action, params=null) {
		return [action, params]
	}

}

describe('RoleListRow', function () {

    var props = PROPS
    var roleListRow = TestUtils.renderIntoDocument(
      <RoleListRow role={props.role} subscribeToDispatcher={props.subscribeToDispatcher}/>
    );

   it('required props include: party, firstname, lastname, desc, id, img, and subscribeToDispatcher', function () {
	var allPresent = (roleListRow.props.role.party != null && roleListRow.props.role.firstname != null && roleListRow.props.role.lastname != null && roleListRow.props.role.desc != null && roleListRow.props.role.id!= null  && roleListRow.props.role.img != null && roleListRow.props.subscribeToDispatcher != null)
	expect(allPresent).toEqual(true);
  });

  it('all inner elements are rendered with correct prop values', function () {
    var party = roleListRow.props.role.party
    var fName = roleListRow.props.role.firstname
    var lName = roleListRow.props.role.lastname
    var desc = roleListRow.props.role.desc
	var id = roleListRow.props.role.id
	var img = roleListRow.props.role.img

	var partyProp = props.role.party
    var fNameProp = props.role.firstname
    var lNameProp = props.role.lastname
    var descProp = props.role.desc
	var idProp = props.role.id
	var imgProp = props.role.img

	var allPresent = (party == partyProp &&  fName == fNameProp &&  lName == lNameProp &&  desc== descProp && id == idProp  && img == imgProp)
    expect(allPresent).toEqual(true);
  });

  it('generates a click event(this.onRoleShow) when img is clicked', function () {
  	var res = roleListRow.props.subscribeToDispatcher("roleShow", "4000013")
  	expect(res).toEqual(["roleShow", "4000013"]);
  });

  

});