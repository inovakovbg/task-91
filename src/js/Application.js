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

        const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
        let count = 0;


        // message.innerText = "Ah";

        this._beat = new Beat();



        this._beat.addListener(Beat.events.BIT, function () {
            const message = document.createElement("div");
            message.classList.add("message");
            message.textContent = lyrics[count];
            document.querySelector(".main").appendChild(message);
            count++;
            if(count === 6) {
                count = 0;
            }
        });


        this.emit(Application.events.READY);

    }

    _create() {

    }


}