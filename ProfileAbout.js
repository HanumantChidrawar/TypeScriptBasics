//Defining the Facebook Profile Class.
var profileAbout = /** @class */ (function () {
    //constructor for initializing the properties.
    function profileAbout(firstName, lastName, birthDate, cellNumber) {
        var _this = this;
        this.workOrganisationNames = [];
        this.education = [];
        this.address = [];
        this.friends = [];
        this.familyMembers = [];
        //setter methods for Changing the first & last name.  
        this.setFirstName = function (firstName) {
            _this.firstName = firstName;
        };
        this.setLastName = function (lastName) {
            _this.lastName = lastName;
        };
        //getter method for generating fullName using first & last Name.
        this.getFullName = function () {
            return (_this.firstName).concat(_this.lastName);
        };
        //getter and setter method for mobile number.
        this.getCellNumber = function () {
            return _this.cellNumber;
        };
        this.setCellNumber = function (cellNumber) {
            _this.cellNumber = cellNumber;
        };
        //Method for calulating and displaying the age .
        this.getAge = function () {
            var currentDate = Date.now();
            var birthDay = Date.parse(_this.birthDate);
            var age = Math.abs(currentDate - birthDay);
            var years = 1000 * 60 * 60 * 24 * 365;
            return Math.round(age / years);
        };
        //Getter ans Setters for work Organization.
        this.getWorkOrganizationNames = function () {
            return _this.workOrganisationNames;
        };
        this.setWorkOrganisationNames = function () {
            var organisationNames = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                organisationNames[_i] = arguments[_i];
            }
            var temp = organisationNames;
            _this.workOrganisationNames = _this.workOrganisationNames.concat(temp);
        };
        //Getter and setter for education.
        this.getEducation = function () {
            return _this.education;
        };
        this.setEducation = function () {
            var education = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                education[_i] = arguments[_i];
            }
            var temp = education;
            _this.education = _this.education.concat(temp);
        };
        //Getter and setter for Address.
        this.getAddress = function () {
            return _this.address;
        };
        this.setAddress = function () {
            var address = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                address[_i] = arguments[_i];
            }
            var temp = address;
            _this.address = _this.address.concat(temp);
        };
        //Getter and setter for friends.
        this.getFriends = function () {
            return _this.friends;
        };
        this.setFriends = function () {
            var friends = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                friends[_i] = arguments[_i];
            }
            var temp = friends;
            _this.friends = _this.friends.concat(temp);
        };
        //Getter and setter for family Members.
        this.getFamilyMembers = function () {
            return _this.friends;
        };
        this.setFamilyMembers = function () {
            var familyMembers = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                familyMembers[_i] = arguments[_i];
            }
            var temp = familyMembers;
            _this.familyMembers = _this.familyMembers.concat(temp);
        };
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.cellNumber = cellNumber;
    }
    return profileAbout;
}());
//Checking our Methods and class.
var myProfile = new profileAbout('Hanumant', ' Patil', '1994-07-21', 1234567890);
console.log("Full Name:");
console.log(myProfile.getFullName());
console.log("Mobile Number:");
console.log(myProfile.getCellNumber());
console.log("Age: ");
console.log(myProfile.getAge());
myProfile.setWorkOrganisationNames('IBM');
console.log("Works At:");
console.log(myProfile.getWorkOrganizationNames());
myProfile.setEducation('BTech Graduate in Computer Science');
console.log("Educational Qualification:");
console.log(myProfile.getEducation());
myProfile.setAddress("Gurugram, Harayana", "Nanded, Maharashtra", "Chhattarpur, New Delhi");
console.log("Address:");
console.log(myProfile.getAddress());
myProfile.setFriends("Friend1", "Friend2", "Friend3");
console.log("Friends:");
console.log(myProfile.getFriends());
myProfile.setFriends("Friend4", "Friend5", "Friend6");
console.log("Friends:");
console.log(myProfile.getFriends());
myProfile.setFamilyMembers("Member1", "Member2", "Member3");
console.log("Family Members:");
console.log(myProfile.getFamilyMembers());
