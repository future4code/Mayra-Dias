class Stack{
    constructor(
      public items: any[] = [],
      public lenght: number = 0
    ){}
 
 
    public isEmpty = () => {
       this.items.length === 0 
    }
 
    public push = (item:any):void => {
       const index = this.items.length
       this.items[index] = item
    }
 
    public pop = ():any => {
       const index = this.items.length - 1
       const removedItem = this.items[index]
       this.items.length = this.items.length - 1
       return removedItem
    }
 
    public peek = ():any => {
          const index = this.items.length - 1
          return this.items[index]
    }
 }
 
 const stack = new Stack()
 stack.push("Ana")
 stack.push("Catarina")
 stack.push("Miguel")
 
 console.log(stack.peek())
 console.log(stack.pop())
 console.log(stack.peek())