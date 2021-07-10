class Berry  (private var w:Int) extends
  Fruit(w) with TinyFruit {

  def this(w:Int, o:Int) {
    this(w)
    tininess = o
  }
  override def toString() : String =
    "Berry " + weight

  override def toStringVerbose() : String =
    s"Berry weight $weight, tininess $tininess"

}
