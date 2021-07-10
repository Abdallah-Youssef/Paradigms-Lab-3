import scala.collection.mutable.ArrayBuffer

object Test {
  def main(args: Array[String]): Unit = {

    val tree = new Tree()
    tree.insert(new Apple(1, 10))
    tree.insert(new Avocado(2, 20))
    tree.insert(new Berry(3, 30))
    tree.insert(new Avocado(4, 20))
    tree.insert(new Grape(5, 50))
    tree.insert(new Apple(6, 2))



    tree.IterateVerbose()

    separator()

    print(tree.filterByType(classOf[Apple]))
    print(tree.filterByType(classOf[Avocado]))

    separator()

    print(tree.filterByWeight(3))
    print(tree.filterByWeight(-1))
    print(tree.filterByWeight(100))

    separator()

    tree.magnifyByType(classOf[Apple], 10)
    tree.magnifyByType(classOf[Berry], 22)
    tree.Iterate()

    separator()

    println(tree.findHeaviest().toString)
    println(tree.findLightest().toString)
     /*
    magnifyByType(Type, Weight): a method that increases the weight of the nodes of a given fruit type by the given amount. For example, add 200 grams to all bananas in the tree.
    findHeaviest():  a method that finds the node with the greatest weight in the tree.
    findLightest():  a method that finds the node with the least weight in the tree.
    */


    //tree.magnifyByType(classOf[Apple], 10)
    //tree.Iterate()




  }

  def separator(): Unit = println("-------------------------")
  def print(arr:ArrayBuffer[Fruit]): Unit = {
    arr.foreach(u => printf(u.toString + ", "))
    println()
  }

}
