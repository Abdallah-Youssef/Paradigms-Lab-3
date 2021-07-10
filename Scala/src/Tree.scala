import scala.collection.mutable.ArrayBuffer

class Tree(var root:Node = NilNode) {
  var size = 0
  val dummyParent = Node(NilFruit)

  def insert(fruit:Fruit): Unit ={
    if (size == 0) {
      root = Node(fruit)
      root.parent = dummyParent
      dummyParent.left = root

    } else root.insert(fruit)

    size = size + 1
  }

  def delete(node : Node): Unit = {
    if (size <= 1)
      root = NilNode
    else {
      root.delete(node)
      root = dummyParent.left
    }
    size = max(0, size - 1)
  }

  def max(x:Int, y:Int): Int = if (x > y) x else y

  def traversal: ArrayBuffer[Node] = root.traversal

  // a method that prints the in-order traversal of the tree.
  def Iterate(): Unit = root.Iterate()
  // a method that prints the in-order traversal of the tree.
  def IterateVerbose(): Unit = root.IterateVerbose()


  //a method that prints the nodes of a given fruit type ordered by. weight.
  // For example, get an ordered list of all apples in the tree
  def filterByType(c : Class[_]):ArrayBuffer[Fruit] = root.filterByType(c)


  //a method that prints the nodes that have weight larger than the given amount ordered by wright.
  //For example, get an ordered list of all fruits in the tree that are heavier than 500 grams.
  def filterByWeight(weight : Int): ArrayBuffer[Fruit] = root.filterByWeight(weight)

  //  a method that increases the weight of the nodes of a given fruit type by the given amount.
  //  For example, add 200 grams to all bananas in the tree.
  def magnifyByType(c : Class[_], w: Int): Unit =  {
    val queue: ArrayBuffer[Node] = traversal.filter(u => u.fruit.getClass == c)
    queue.foreach(u => delete(u))
    queue.foreach(u => u.fruit.weight = u.fruit.weight + w)
    queue.foreach(u => insert(u.fruit))
  }





  //a method that finds the node with the greatest weight in the tree.
  def findHeaviest(): Fruit = root.findHeaviest()

  // a method that finds the node with the least weight in the tree.
  def findLightest(): Fruit = root.findLightest()


}
