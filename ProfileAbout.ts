//Defining the Facebook Profile Class.

class profileAbout{

 private firstName:string;
 private lastName:string;
 private cellNumber:number;
 private birthDate:string;
 private workOrganisationNames:string[]=[];
 private education:string[]=[];
 private address:string[]=[];
 private friends:string[]=[];
 private familyMembers:string[]=[];
 
//constructor for initializing the properties.
 constructor(firstName:string, lastName:string, birthDate:string, cellNumber?:number){
 this.firstName= firstName;
 this.lastName= lastName;
 this.birthDate= birthDate;
 this.cellNumber= cellNumber; 
}

//setter methods for Changing the first & last name.  
 setFirstName=(firstName:string) =>{
 this.firstName= firstName;
}
 setLastName=(lastName:string) =>{
 this.lastName= lastName;
}

//getter method for generating fullName using first & last Name.
 getFullName=() =>{
 return (this.firstName).concat(this.lastName);
}

//getter and setter method for mobile number.
 getCellNumber=() =>{
 return this.cellNumber;
}
 setCellNumber=(cellNumber:number) =>{
  this.cellNumber= cellNumber;
}

//Method for calulating and displaying the age .
 getAge=() =>{
 let currentDate= Date.now();
 let birthDay= Date.parse(this.birthDate);
 let age= Math.abs(currentDate-birthDay);
 let years = 1000 * 60*60*24*365;

 return Math.round(age/years);
}

//Getter ans Setters for work Organization.
 getWorkOrganizationNames=() =>{
 return this.workOrganisationNames;
}
 setWorkOrganisationNames=(...organisationNames:string[]) =>{
  let temp:string[]= organisationNames;
  this.workOrganisationNames= this.workOrganisationNames.concat(temp);
}

//Getter and setter for education.
 getEducation=() =>{
 return this.education;
}
setEducation=(...education:string[]) =>{
   let temp= education;
   this.education= this.education.concat(temp);
}

//Getter and setter for Address.
 getAddress=() =>{
 return this.address;
}
 setAddress=(...address:string[]) =>{
   let temp:string[]=address;
   this.address= this.address.concat(temp);
}


//Getter and setter for friends.
 getFriends= () =>{
   return this.friends;
 }
 setFriends=(...friends:string[]) =>{
   let temp:string[]=friends;
   this.friends= this.friends.concat(temp);
 }

 //Getter and setter for family Members.
 getFamilyMembers= () =>{
  return this.friends;
}
 setFamilyMembers=(...familyMembers:string[]) =>{
  let temp:string[]=familyMembers;
  this.familyMembers= this.familyMembers.concat(temp);
}
}

//Checking our Methods and class.

let myProfile= new profileAbout('Hanumant',' Patil','1994-07-21' ,1234567890);

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

myProfile.setAddress("Gurugram, Harayana","Nanded, Maharashtra","Chhattarpur, New Delhi");
console.log("Address:");
console.log(myProfile.getAddress());

myProfile.setFriends("Friend1","Friend2","Friend3");
console.log("Friends:");
console.log(myProfile.getFriends());

myProfile.setFriends("Friend4","Friend5","Friend6");
console.log("Friends:");
console.log(myProfile.getFriends());

myProfile.setFamilyMembers("Member1","Member2","Member3");
console.log("Family Members:");
console.log(myProfile.getFamilyMembers());


