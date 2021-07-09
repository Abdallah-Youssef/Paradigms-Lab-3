
object Test {
  def main(args: Array[String]): Unit = {

    val tree = new Tree()
    tree.insert(new Apple(5*2, 20))
    tree.insert(new Apple(1*2, 20))
    tree.insert(new Apple(7*2, 20))
    tree.insert(new Apple(4*2, 20))
    /*for (i <- 0 to 3) {
      val x = (Math.random() * 10).toInt

      tree.insert(new Apple(x*2, 20))
      println(s"tree.insert(new Apple($x*2, 20))")
    }*/

    tree.Iterate()
    separator()

    val nodes = tree.traversal
    for (node <- nodes){
      tree.delete(node)
      tree.Iterate()
    }




  }

  def separator(): Unit = println("-------------------------")
}
