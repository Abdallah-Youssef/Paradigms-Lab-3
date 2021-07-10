class Grape  (private var w:Int) extends
  Fruit(w) with TinyFruit {

  def this(w:Int, o:Int) {
    this(w)
    tininess = o
  }
  override def toString() : String =
    "Grape " + weight

  override def toStringVerbose() : String =
    s"Grape weight $weight, tininess $tininess"

}
