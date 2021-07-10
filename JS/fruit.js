var Fruit = {
  Name: null,
  weight: 0,
  rightFruit: null,
  leftFruit: null,
  getShape(){
       return("No shape Specified")
  },
};

var FruitTree = {
  RootFruit: null,
  modifcationList : [],
  insertFruit(fruit) {
    if (this.RootFruit == null) {
      this.RootFruit = fruit;
    } else {
      this.insertNode(this.RootFruit, fruit);
    }
    return this.RootFruit;
  },
  insertNode(root, fruit) {
    if (root.weight < fruit.weight) {
      if (root.rightFruit === null) root.rightFruit=fruit;
      else this.insertNode(root.rightFruit, fruit);
    } else {
      if (root.leftFruit === null) root.leftFruit=fruit;
      else this.insertNode(root.leftFruit, fruit);
    }
  },
 
   remove : function(weight) {
    this.RootFruit = this.removeNode(this.RootFruit, weight);
  },

  removeNode (node, key) {
    if (node === null)
      return null;
    else if (key < node.weight) {
      node.leftFruit = this.removeNode(node.leftFruit, key);
      return node;
    } else if (key > node.weight) {
      node.rightFruit = this.removeNode(node.rightFruit, key);
      return node;
    } else {
      if (node.leftFruit === null && node.rightFruit === null) {
        node = null;
        return node;
      }
      if (node.leftFruit === null) {
        node = node.rightFruit;
        return node;
      }
      else if (node.rightFruit === null) {
        node = node.leftFruit;
        return node;
      }
      var aux = this.findMinNode(node.rightFruit);
      node.weight = aux.weight;
      node.Name=aux.Name;
      node.rightFruit = this.removeNode(node.rightFruit, aux.weight);
      return node;
    }
  },

  //---------------------MAPPERS---------------------------------

  checkType(fruit,Type){
    if (
      fruit.__proto__ === Type ||
      fruit.__proto__.__proto__ === Type ||
      fruit.__proto__.__proto__.__proto__ === Type
    )
    printer.print(fruit) 
    
  },

  checkWeight(fruit,Type,weight){
    if (fruit.weight>weight)
      printer.print(fruit) 
  },

  modifyWeight(fruit,Type,weight,addedWeight){
    if (
      fruit.__proto__ === Type ||
      fruit.__proto__.__proto__ === Type ||
      fruit.__proto__.__proto__.__proto__ === Type
    ){
    var temp = Object.create(fruit.__proto__)
    temp.weight=fruit.weight+addedWeight;
    temp.Name=fruit.Name  
    this.remove.call(this,fruit.weight)
    this.modifcationList.push(temp)
    }
  },

  //------------------------------------------------------------

  //----------------------------HELPERS----------------------------

  inorder(fruit,fun,Type,weight,addedWeight) {
    if (fruit !== null) {
      this.inorder(fruit.leftFruit,fun,Type,weight,addedWeight);

      fun.call(this,fruit,Type,weight,addedWeight) //HIGHER ORDER FUNCTION
      
      this.inorder(fruit.rightFruit,fun,Type,weight,addedWeight);
    }
  },

  fixTree(){
    for (var i = 0; i <= this.modifcationList.length; i++) { this.insertFruit.call(this,this.modifcationList.shift()) }
    this.modifcationList=[]
  },

  findMaxNode(root)
  {
       if(root.rightFruit === null)
       return root;
   else
       return this.findMaxNode(root.rightFruit);
  },
  findMinNode(root)
  {
       if(root.leftFruit === null)
       return root;
   else
       return this.findMinNode(root.leftFruit);
  },


  //------------------------------------------------------

  iterate() {
    this.inorder(this.RootFruit,printer.print,null,null)
  },

  filterByType(Type) {
    this.inorder(this.RootFruit,this.checkType,Type,null,null)
  },
  filterByWeight(Weight){
    this.inorder(this.RootFruit,this.checkWeight,null,Weight,null)
  },
  magnifyByType(Type, Weight) {
    this.inorder(this.RootFruit,this.modifyWeight,Type,null,Weight)
    this.fixTree()
  },
  findHeaviest() {
     return  this.findMaxNode(this.RootFruit)
  },
  findLightest() {return  this.findMinNode(this.RootFruit)},
};

//DELEGATION
var printer={
  print(fruit){
    console.log("Fruit Name : "+ fruit.Name + " \\ Weight : " + fruit.weight);
  },
}

//---------------------------------------------------------------------


/*TYPES HIRARICIES*/
//------------------Level 1--------------//
var ovalShapedFruit = Object.create(Fruit);
ovalShapedFruit.getShape=function(){return "Iam Oval Shaped Fruit"} //METOHD OVERRIDE

var LongShapedFruit = Object.create(Fruit);
LongShapedFruit.getShape=function(){return "Iam Long Shaped Fruit"} //METOHD OVERRIDE

var tinyFruit = Object.create(Fruit);
tinyFruit.getShape=function(){return "Iam tiny Shaped Fruit"} //METOHD OVERRIDE

//--------------------Level 2---------------------//

var Berry = Object.create(tinyFruit);

//--------------------Level 3---------------------//

var apple = Object.create(ovalShapedFruit)
                                                  //OVAL SHAPED FRUITS
var Avocadro = Object.create(ovalShapedFruit)

var Banana = Object.create(LongShapedFruit) 
                                                  //LONG SHAPED FRUITS
var Plantain = Object.create(LongShapedFruit) 

var BlueBerry = Object.create(Berry);
BlueBerry.getShape=function(){return "Iam Circular tiny Shaped Fruit"} //METOHD OVERRIDE
                                                  //berries Tiny circular shaped fruits 
var CranBerry = Object.create(Berry);
BlueBerry.getShape=function(){return "Iam Circular tiny Shaped Fruit"} //METOHD OVERRIDE
//--------------------------------------------------//

/*-------SAMPLES----------------------------------------*/
var apple1 = Object.create(apple);
apple1.Name="apple 1";
apple1.weight=120;

var apple2 = Object.create(apple);
apple2.weight=7000;
apple2.Name="apple 2";

var Avocadro1 = Object.create(Avocadro);
Avocadro1.weight=40;
Avocadro1.Name="Avocadro 1";

var Avocadro2 = Object.create(Avocadro);
Avocadro2.weight=200;
Avocadro2.Name="Avocadro 2";


var Banana1 = Object.create(Banana);
Banana1.weight=4000;
Banana1.Name="Banana 1";

var Banana2 = Object.create(Banana);
Banana2.weight=950;
Banana2.Name="Banana 2";

var Plantain1 = Object.create(Plantain) 
Plantain1.weight=2500
Plantain1.Name="Plantain 1"

var Plantain2 = Object.create(Plantain) 
Plantain2.weight=3000
Plantain2.Name="Plantain 2"

var BlueBerry1 = Object.create(BlueBerry);
BlueBerry1.weight=230;
BlueBerry.Name="Bluberry 1";

var BlueBerry2 = Object.create(BlueBerry);
BlueBerry2.weight=1050;
BlueBerry2.Name="Bluberry 2";

var Carnberry1 = Object.create(CranBerry);
Carnberry1.weight=1000;
Carnberry1.Name="Carnberry 1";

var Carnberry2 = Object.create(CranBerry);
Carnberry2.weight=1500;
Carnberry2.Name="Carnberry 2";


//----------------------------Tests-----------------------------

console.log("-------------METHOD OVERRIDE TEST-----------------------\n")
console.log(Fruit.getShape())
console.log(apple1.getShape())
console.log(Banana1.getShape())
console.log(Berry.getShape())
console.log(BlueBerry.getShape())

console.log("\n-------------ITERATE TEST-----------------------")
var treeExample = Object.create(FruitTree);
treeExample.insertFruit(apple1);
treeExample.insertFruit(apple2);
treeExample.insertFruit(Avocadro1);
treeExample.insertFruit(Avocadro2);
treeExample.insertFruit(Banana1);
treeExample.insertFruit(Banana2);
treeExample.insertFruit(Plantain1);
treeExample.insertFruit(Plantain2);
treeExample.insertFruit(BlueBerry1);
treeExample.insertFruit(BlueBerry2);
treeExample.insertFruit(Carnberry1);
treeExample.insertFruit(Carnberry2);

treeExample.iterate()

console.log("\n-------------FILTER BY TYPE TEST-----------------------")
treeExample.filterByType(Berry);

console.log("\n-------------FILTER BY WEIGHT TEST----------------------")
treeExample.filterByWeight(200);

console.log("\n------------MAGNIFY BY TYPE TEST------------------------")

treeExample.magnifyByType(Avocadro,500);

treeExample.iterate()

console.log("\n------------FIND HEVIEST TEST------------------------")
temp=treeExample.findHeaviest()
printer.print(temp)
console.log("\n------------FIND LIGHTEST TEST------------------------")
temp=treeExample.findLightest()
printer.print(temp)
console.log("------------------------------------")

