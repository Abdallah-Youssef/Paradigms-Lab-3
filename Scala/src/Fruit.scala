import scala.collection.mutable.ArrayBuffer
import scala.reflect.runtime.universe._
class Fruit(var weight:Int,
            var left : Fruit,
            var right : Fruit){

  def this () = this(0, NilNode, NilNode)
  def this (weight: Int) = this(weight, NilNode, NilNode)

  var size:Int = 0

  def setWeight (weight : Int): Unit = this.weight = weight
  def getWeight : Int = this.weight
  def > (otherFruit: Fruit) : Boolean = weight > otherFruit.weight
  def < (otherFruit: Fruit) : Boolean = weight < otherFruit.weight

  def insert(node : Fruit): Unit ={
    if (node > this){
      right match{
        case NilNode => right = node
        case ft:Fruit => ft.insert(node)
      }
    }

    else {
      left match{
        case NilNode => left = node
        case ft:Fruit => ft.insert(node)
      }
    }


  }

  def print (fr : Fruit): Unit ={
    if (fr eq NilNode) return

    println(this.toString)
    print (fr.left)
    print (fr.right)
  }

  override def toString : String = "fruit : " + weight



  def traversal: ArrayBuffer[Fruit] = {
    if (this eq NilNode)
      return ArrayBuffer()

    val leftArr = left.traversal
    val rightArr = right.traversal

    leftArr += this
    leftArr.concat(rightArr)
  }


  // a method that prints the in-order traversal of the tree.
  def Iterate: Unit = {
    traversal.map(fr => printf(fr.toString + ", "))
    println()
  }

  //a method that prints the nodes of a given fruit type ordered by. weight.
  // For example, get an ordered list of all apples in the tree
  def filterByType(c : Class[_]):ArrayBuffer[Fruit] = traversal.filter(fr => fr.getClass == c)


  //a method that prints the nodes that have weight larger than the given amount ordered by wright.
  //For example, get an ordered list of all fruits in the tree that are heavier than 500 grams.
  def filterByWeight(weight : Int): ArrayBuffer[Fruit] = traversal.filter(fr => fr.weight > weight);

  //  a method that increases the weight of the nodes of a given fruit type by the given amount.
  //  For example, add 200 grams to all bananas in the tree.
  def magnifyByType(c : Class[_], w: Int): Unit =  {
    val NilClass = NilNode.getClass
    this.getClass match{
      case `NilClass` => return
      case `c` => {
        weight += w
      }
      case _ =>
    }

    right.magnifyByType(c, w)
    left.magnifyByType(c, w)
  }
  //a method that finds the node with the greatest weight in the tree.
  def findHeaviest(): Fruit = {
    right match{
      case NilNode => this
      case _ => right.findHeaviest()
    }
  }

  // a method that finds the node with the least weight in the tree.
  def findLightest(): Fruit = {
    left match{
      case NilNode => this
      case _ => left.findHeaviest()
    }
  }

}
