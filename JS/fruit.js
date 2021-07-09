var Fruit = {
  Name: null,
  weight: 0,
  rightFruit: null,
  leftFruit: null,
  getShape(){
       
  },

  getName() {
    return this.Name;
  },
  setName(Name) {
    this.Name = Name;
  },

  getWeight() {
    return this.weight;
  },
  setWeight(newWeight) {
    this.weight = newWeight;
  },

  getRightFruit() {
    return this.rightFruit;
  },
  getLeftFruit() {
    return this.leftFruit;
  },

  setRightFruit(newRightFruit) {
    this.rightFruit = newRightFruit;
  },
  setLeftFruit(newLeftFruit) {
    this.leftFruit = newLeftFruit;
  },
};

var FruitTree = {
  RootFruit: null,
  setRootFruit(newRootFruit) {
    this.RootFruit = newRootFruit;
  },
  getRootFruit(newRootFruit) {
    return this.RootFruit;
  },

  insert(fruit) {
    this.RootFruit = inserter.insertFruit(this.RootFruit, fruit);
  },

  iterate() {
    iterator.inorder(this.RootFruit);
  },

  filterByType(Type) {
    FilterHepler.filter(this.RootFruit, Type);
  },
  filterByWeight(Weight){
     FilterWeightHepler.filter(this.RootFruit,Weight)
  },
  magnifyByType(Type, Weight) {Magnifer.magnifer(this.RootFruit,Type,Weight,AddWeight)},
  findHeaviest() {
     return  heiver.findMaxNode(this.RootFruit)
  },
  findLightest() {return  lighter.findMinNode(this.RootFruit)},
};

//----------------HELPERS VARS IN DELEGATION---------------------

var inserter = {
  insertFruit(root, fruit) {
    if (root == null) {
      root = fruit;
    } else {
      this.insertNode(root, fruit);
    }
    return root;
  },
  insertNode(root, fruit) {
    if (root.getWeight() < fruit.getWeight()) {
      if (root.getRightFruit() === null) root.setRightFruit(fruit);
      else this.insertNode(root.getRightFruit(), fruit);
    } else {
      if (root.getLeftFruit() === null) root.setLeftFruit(fruit);
      else this.insertNode(root.getLeftFruit(), fruit);
    }
  },
};

var iterator = {
  inorder(fruit) {
    if (fruit !== null) {
      this.inorder(fruit.getLeftFruit());
      console.log(fruit.getName() + " -> " + fruit.getWeight());
      this.inorder(fruit.getRightFruit());
    }
  },
};

var FilterHepler = {
  filter(fruit, Type) {
    if (fruit !== null) {
      this.filter(fruit.getLeftFruit(), Type);
      if (
        fruit.__proto__ === Type ||
        fruit.__proto__.__proto__ === Type ||
        fruit.__proto__.__proto__.__proto__ === Type
      )
        console.log(fruit.getName() + " -> " + fruit.getWeight());
      this.filter(fruit.getRightFruit(), Type);
    }
  },
};

var FilterWeightHepler = {
     filter(fruit, weight) {
       if (fruit !== null) {
         this.filter(fruit.getLeftFruit(), weight);
         if (fruit.getWeight()>weight)
           console.log(fruit.getName() + " -> " + fruit.getWeight());
         this.filter(fruit.getRightFruit(), weight);
       }
     },
   };

var Magnifer = {
  magnifer(fruit,Type,addedWeight, weightModifyFun) {
    if (fruit !== null) {
      this.magnifer(fruit.getLeftFruit(), Type,addedWeight,weightModifyFun);
      if (
        fruit.__proto__ === Type ||
        fruit.__proto__.__proto__ === Type ||
        fruit.__proto__.__proto__.__proto__ === Type
      )
          fruit.setWeight(weightModifyFun(fruit.weight,addedWeight))
        console.log(fruit.getName() + " -> " + fruit.getWeight());
      this.magnifer(fruit.getRightFruit(), Type,addedWeight,weightModifyFun);
    }
  },
};

var heiver={
     findMaxNode(root)
     {
          if(root.getRightFruit() === null)
          return root;
      else
          return this.findMaxNode(root.getRightFruit());
     }
}

var lighter={
     findMinNode(root)
     {
          if(root.getLeftFruit() === null)
          return root;
      else
          return this.findMinNode(root.getLeftFruit());
     }
}

//---------------------------------------------------------------------

//----------HIGHER ORDER FUNCTION----------------

function AddWeight(oldWeight, NewWeight) {
  return oldWeight + NewWeight;
}

//-------------------------------

/*TYPES HIRARICIES*/
//------------------Level 1--------------//
var ovalShapedFruit = Object.create(Fruit);
ovalShapedFruit.getShape=function(){return "Iam Oval Shaped Fruit"}

var LongShapedFruit = Object.create(Fruit);
LongShapedFruit.getShape=function(){return "Iam Long Shaped Fruit"}

var tinyFruit = Object.create(Fruit);
tinyFruit.getShape=function(){return "Iam Circular tiny Shaped Fruit"}

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
                                                  //berries Tiny circular shaped fruits 
var CranBerry = Object.create(Berry);
//--------------------------------------------------//

/*-------SAMPLES----------------------------------------*/
var apple1 = Object.create(apple);
apple1.setName("apple 1");
apple1.setWeight(120);

var apple2 = Object.create(apple);
apple2.setWeight(7000);
apple2.setName("apple 2");

var Avocadro1 = Object.create(Avocadro);
Avocadro1.setWeight(40);
Avocadro1.setName("Avocadro 1");

var Avocadro2 = Object.create(Avocadro);
Avocadro2.setWeight(200);
Avocadro2.setName("Avocadro 2");


var Banana1 = Object.create(Banana);
Banana1.setWeight(4000);
Banana1.setName("Banana 1");

var Banana2 = Object.create(Banana);
Banana2.setWeight(950);
Banana2.setName("Banana 2");

var Plantain1 = Object.create(Plantain) 
Plantain1.setWeight(2500)
Plantain1.setName("Plantain 1")

var Plantain2 = Object.create(Plantain) 
Plantain2.setWeight(3000)
Plantain2.setName("Plantain 2")

var BlueBerry1 = Object.create(BlueBerry);
BlueBerry1.setWeight(230);
BlueBerry.setName("Bluberry 1");

var BlueBerry2 = Object.create(BlueBerry);
BlueBerry2.setWeight(1050);
BlueBerry2.setName("Bluberry 2");

var Carnberry1 = Object.create(CranBerry);
Carnberry1.setWeight(1000);
Carnberry1.setName("Carnberry 1");

var Carnberry2 = Object.create(CranBerry);
Carnberry2.setWeight(1500);
Carnberry2.setName("Carnberry 2");


//----------------------------Tests-----------------------------


console.log(Fruit.getShape())
console.log(apple1.getShape())
console.log(Banana1.getShape())
console.log(Berry.getShape())

console.log("------------------------------------")
var treeExample = Object.create(FruitTree);
treeExample.insert(apple1);
treeExample.insert(apple2);
treeExample.insert(Avocadro1);
treeExample.insert(Avocadro2);
treeExample.insert(Banana1);
treeExample.insert(Banana2);
treeExample.insert(Plantain1);
treeExample.insert(Plantain2);
treeExample.insert(BlueBerry1);
treeExample.insert(BlueBerry2);
treeExample.insert(Carnberry1);
treeExample.insert(Carnberry2);

//console.log(BlueBerry.getShape())

treeExample.iterate()
console.log("------------------------------------")
treeExample.filterByType(Avocadro);
console.log("------------------------------------")
treeExample.filterByWeight(200);
console.log("------------------------------------")
treeExample.magnifyByType(Berry,50);
console.log("------------------------------------")
temp=treeExample.findHeaviest()
console.log(temp.getName()+" -> "+temp.getWeight())
console.log("------------------------------------")
temp=treeExample.findLightest()
console.log(temp.getName()+" -> "+temp.getWeight())
console.log("------------------------------------")

