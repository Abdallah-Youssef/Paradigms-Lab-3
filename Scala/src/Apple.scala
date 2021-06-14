class Apple ( weight:Int,
 left : Fruit,
 right : Fruit,
              var Asshole : Int = 0)
  extends Fruit(weight, left , right)  {
  def this () = this(0, NilNode, NilNode)
  def this (weight: Int) = this(weight, NilNode, NilNode)

  override def toString() : String = "Apple " + getWeight

}
