var initialCats= [
    {
        clickCount:0,
        name :'Tabby',
        imgSrc:'img/434164568_fea0ad4013_z.jpg',        
        nicknames:['Tommy','Tonny']
    },
    {
        clickCount:0,
        name :'Kittie',
        imgSrc:'img/22252709_010df3379e_z.jpg',        
        nicknames:['Kate','Coco']
    },
    {
        clickCount:0,
        name :'Jolly',
        imgSrc:'img/1413379559_412a540d29_z.jpg',        
        nicknames:['Petni','ullu']
    }
];

var Cats=function (data){
    this.clickCount= ko.observable(data.clickCount);
    this.name =ko.observable (data.name);
    this.imgSrc=ko.observable (data.imgSrc);
    this.nicknames=ko.observableArray (data.nicknames);
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
    

};
var ViewModel = function (){
    var self=this;
    
    this.catlist= ko.observableArray([]);
    initialCats.forEach(catItems => {
        self.catlist.push(new Cats(catItems));       
    });
    this.currentCat=ko.observable();
    
    this.incrementCounter = function (){
        this.clickCount (this.clickCount()+1);
    };   
    this.onClick= function (selectedCat, event){
        self.currentCat(selectedCat);
    }; 
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
