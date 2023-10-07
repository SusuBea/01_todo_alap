import {TODOLIST, TODOLIST2} from "./adatok.js";
import ToDoView from "./Megjelenit.js";



$(function() {
    const szuloElem = $(".ujadat");
    new ToDoView(TODOLIST, TODOLIST2, szuloElem);

});

