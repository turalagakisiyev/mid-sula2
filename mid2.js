class Message {
    constructor(author,text){
    this.author = author
    this.text = text
    }
    date = new Date()
     toString(){
        return `${this.date.getHours()}:${this.date.getMinutes()} ${this.author} ${this.text}` 
    }
}
    
class Messenger {
    constructor(){
        this.allmessages = []
    }
    
    send(author, text) {
        const message = new Message(author,text)
        this.allmessages.push(message.toString())
    }
    show_history(){
        this.allmessages.forEach((item)=>{
            console.log(item)
        })
    }
   

}

let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()