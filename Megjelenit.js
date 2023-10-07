
    class ToDoView {
        constructor(tevekenyseg, hatarido){
            this.tevekenyseg = tevekenyseg;
            this.hatarido = hatarido;
    
            let txt = this.htmlOsszeallit();
            this.szuloElem.html(txt);
    
        }
    
        htmlOsszeallit() {
            let txt = "";
        
            txt += `<table>`;
            txt += `<tr>`;
          
            for (const kulcs in this.TODOLIST[0]) {
                txt += `<th>${this.TODOLIST[0][kulcs]}</th>`;
              }
            
            txt += `</tr>`
              
            
        
            
            for (let index = 0; index < this.TODOLIST2.length; index++) {
                txt += `<tr>`;
              for (const kulcs in this.TODOLIST2[index]) {
                txt += `<td>${this.TODOLIST2[index][kulcs]}</td>`;
              }
              txt += `</tr>`;
    
            }
            txt += `</table>`;
            return txt;
          }
    
    
    }
    
    export default ToDoView;