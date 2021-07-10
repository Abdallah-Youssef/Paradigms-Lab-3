class Avocado  (private var w:Int) extends
  Fruit(w) with OvalShaped{
  def this(w:Int, o:Int) {
    this(w)
    ovality = o
  }
  override def toString() : String =
    "Avocado " + weight

  override def  toStringVerbose() : String =
    s"Avocado weight $weight, ovality $ovality"

}