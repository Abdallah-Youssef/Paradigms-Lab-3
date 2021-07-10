import scala.collection.mutable.ArrayBuffer

object NilNode extends Node(NilFruit){
  override def isNil(): Boolean = true;
}
case class Node (var fruit: Fruit,
            var left:Node = NilNode,
            var right: Node = NilNode,
                 var parent: Node = NilNode) {



  def >= (otherNode: Node) : Boolean = fruit.weight >= otherNode.fruit.weight
  def > (otherNode: Node) : Boolean = fruit.weight > otherNode.fruit.weight
  def < (otherNode: Node) : Boolean = fruit.weight < otherNode.fruit.weight

  def insert(fruit: Fruit): Unit = insert(new Node(fruit))
  def insert(node : Node): Unit ={
    if (node >= this){
      if (right.isNil()) {
        right = node
        node.parent = this
      }

      else right.insert(node)
    }

    if (node < this){
      if (left.isNil()){
        left = node
        node.parent = this
      }
      else left.insert(node)
    }

  }

  private def replaceWithChild():Unit = {
    val child = if (this.left.isNil()) this.right else this.left
    if (this.parent.left == this)
      this.parent.left = child
    else this.parent.right = child

    if (!child.isNil()) child.parent = this.parent
  }

  def delete(node : Node): Unit = {

    if (node > this)
      right.delete(node)
    else if (node < this)
      left.delete(node)

    else { // same weight
      this match {
        case Node(fr, _, r, _) if fr != fruit => r.delete(node) //  If not the same fruit, go right
        case Node(_, l, r, parent) if l.isNil() || r.isNil() => this.replaceWithChild()

        case Node(_, _, r, _) => {
          fruit = r.minNode().fruit
          delete(r.minNode())
        }
      }
    }
  }
  def print (n : Node): Unit ={
    if (n.isNil()) return

    println(this.toString)
    print (n.left)
    print (n.right)
  }

  def traversal: ArrayBuffer[Node] = {
    if (isNil())
      return ArrayBuffer()

    val leftArr = left.traversal
    val rightArr = right.traversal

    leftArr += this
    leftArr.concat(rightArr)
  }


  // a method that prints the in-order traversal of the tree.
  def Iterate(): Unit = {
    traversal.foreach(n => printf(n.toString + ", "))
    println()
  }

  def IterateVerbose(): Unit = {
    traversal.foreach(n => printf(n.toStringVerbose + ", "))
    println()
  }

  //a method that prints the nodes of a given fruit type ordered by. weight.
  // For example, get an ordered list of all apples in the tree
  def filterByType(c : Class[_]):ArrayBuffer[Fruit] = {
    traversal.map(node => node.fruit)
      .filter(fr => fr.getClass == c)
  }


  //a method that prints the nodes that have weight larger than the given amount ordered by wright.
  //For example, get an ordered list of all fruits in the tree that are heavier than 500 grams.
  def filterByWeight(weight : Int): ArrayBuffer[Fruit] = {
    traversal.map(node => node.fruit)
      .filter(fr => fr.weight > weight)
  }






  //a method that finds the node with the greatest weight in the tree.
  def findHeaviest(): Fruit = {
    right match{
      case NilNode => this.fruit
      case _ => right.findHeaviest()
    }
  }

  // a method that finds the node with the least weight in the tree.
  def findLightest(): Fruit = {
    left match{
      case NilNode => this.fruit
      case _ => left.findHeaviest()
    }
  }

  private def minNode(): Node ={
    if (left.isNil())
      this
    else left.minNode()
  }

  def isNil():Boolean = false;


  override def toString: String = fruit.toString
  def toStringVerbose: String = fruit.toStringVerbose + "\n"
}
