import { LinkedList } from "./LinkedList";
import { ListNode } from "./ListNode";


const primeiro: ListNode = new ListNode("primeiro")
const lista: LinkedList = new LinkedList(primeiro)


lista.addToTail("segundo")
lista.addToTail("terceiro")
lista.addToTail("quarto")
lista.addToTail("quinto")

console.log(lista.find("terceiro"))

