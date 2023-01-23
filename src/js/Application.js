import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }
  constructor() {
    super();



    this._beat = new Beat();
    this._create();

    this.emit(Application.events.READY);
  }

  _create() {
    const lyrics = ['Ah', 'ha', 'ha', 'ha', `stayin' alive`, `stayin' alive`];
    let count = 0;
    this._beat.addListener(Beat.events.BIT, (bit) => {
      const message = document.createElement('div');
      message.classList.add('message');
      message.textContent = lyrics[count];
      count++; 

      if (count == 6) {
        count = 0;
      }
      
      document.querySelector('.main').appendChild(message);
    })


  // constructor() {
  //   super();

  //   const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
  //   let count = 0;

  //   const message = document.createElement("div");
  //   message.classList.add("message");
  //   message.innerText = "Ah";

  //   document.querySelector(".main").appendChild(message);

  //   this.emit(Application.events.READY);

  
  }
}
