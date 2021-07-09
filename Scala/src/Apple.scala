class Apple (private var w:Int) extends
  Fruit(w) with OvalShaped{
  def this(w:Int, o:Int) {
    this(w)
    ovality = o
  }
  override def toString() : String =
    "Apple " + weight

   def toStringVerbose() : String =
     s"Apple weight $weight, ovality $ovality"

}
