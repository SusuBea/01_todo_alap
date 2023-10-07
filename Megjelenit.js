
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
          
            for (const kulcs in this.KULCS[0]) {
                txt += `<th>${this.KULCS[0][kulcs]}</th>`;
              }
            
            txt += `</tr>`
              
            
        
            
            for (let index = 0; index < this.LISTA.length; index++) {
                txt += `<tr>`;
              for (const kulcs in this.LISTA[index]) {
                txt += `<td>${this.LISTA[index][kulcs]}</td>`;
              }
              txt += `</tr>`;
    
            }
            txt += `</table>`;
            return txt;
          }
    
    
    }
    
    export default ToDoView;