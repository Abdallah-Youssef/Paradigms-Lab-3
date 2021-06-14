class Banana ( weight:Int,
              left : Fruit = NilNode,
              right : Fruit = NilNode) extends Fruit (weight) {
  override def toString() : String = "Banana, weight : " + weight
}
