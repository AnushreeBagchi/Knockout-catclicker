var ViewModel = function (){
    this.currentCat=ko.observable(new  Cats());
    this.incrementCounter = function (){
        this.currentCat().clickCount (this.currentCat().clickCount()+1);
    };    
};

var Cats=function (){
    this.clickCount= ko.observable(0);
    this.name =ko.observable ('Tabby');
    this.imgSrc=ko.observable ('img/434164568_fea0ad4013_z.jpg');
    this.level= ko.computed ( function (){
        if(this.clickCount()<=10){
            return "Newborn"
        }
        else if (this.clickCount()>10 && this.clickCount()<=20){
         return  "Infant"
        }
        else if (this.clickCount()>20 && this.clickCount()<30){
            return  "Teen"
           }
     }, this);
     this.nicknames=ko.observableArray ();
     this.nicknames.push('Tommy','Tonny');
};

ko.applyBindings (new ViewModel());

// var ViewModel = function() {
//     this.num1 = ko.observable(10); //creating an observable
//     this.num2 = ko.observable(20);
//     setInterval(()=>{
//         this.num1(this.num1()+1); //reading and writing an observable
//         this.num2(this.num2()+1);
//     }, 1000);
//     this.total = ko.computed(function(){
//         return  this.num1() + this.num2(); //computed observable
//     }, this);
//     console.log(this.total()); // reading an observable 
// }
