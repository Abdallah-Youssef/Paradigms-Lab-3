import scala.reflect.runtime.universe.typeOf

object Test {
  def main(args: Array[String]): Unit = {
    var fr = new Fruit(0)



    for (i <- 0 to 3) {
      val x = (Math.random() * 10).toInt
      fr.insert(new Fruit(x))
      fr.insert(new Apple(x*2))
    }
    fr.Iterate
    println("Filter : ")
    println(fr.magnifyByType(classOf[Apple], 2))
    fr.Iterate



    println(fr.findHeaviest().toString)
    println(fr.findLightest().toString)

  }
}
