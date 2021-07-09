import scala.collection.mutable.ArrayBuffer

object NilFruit extends Fruit(-1){
  override def isNilFruit: Boolean = true
}
abstract class Fruit(var weight:Int){

  def getWeight: Int = weight
  def setWeight(newWeight: Int): Unit = {weight = newWeight}

  override def toString : String = "fruit : " + weight
  def isNilFruit:Boolean = false
}
