class Student{
constructor(name="-",className="-",section="-"){
    if (name==="") {
        name="-";
    }
    if (className==="") {
        className="-";
    }
    if (section==="" ) {
        section="-";
    }
    
this.studentName=name;
this.studentClass=className;
this.studentSection=section;
};

details(){
    return{
        name:this.studentName,
        class:this.studentClass,
        section:this.studentSection
    };
    }
   getName(){
    return this.studentName;
   }
   getClass(){
    return this.studentClass;
   }
   getSection(){
    return this.studentSection;
   }

  changeName(newName) {
    this.studentName= newName;
  }
  changeClass(newClass) {
    this.studentClass=newClass;
  }
  changeSection(newSection){
    this.studentSection=newSection;
  }
  changeDatail(newName,newClass,newSection){
    this.studentName= newName;
    this.studentClass=newClass;
    this.studentSection=newSection;
  }
  reset() {
    this.studentName = "-";
    this.studentClass = "-";
    this.studentSection = "-";
}

   
}

const student1= new Student("");
console.log(student1.details());    

