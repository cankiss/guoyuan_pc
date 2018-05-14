class Render {
    constructor(data) {
        this.obj = data;
    }

    renderTable() {
        const urlPath = `newsDetails.html?id=${this.obj.id}&type=${this.obj.type}`
        return `<tr>
               <td>
                 <a href=${urlPath}>${this.obj.title}</a>
               </td>
               <td>${this.obj.date || ""} </td>
            </tr>`
    }

    renderArticle() {
        return `<h2>${this.obj.title}</h2>
             <div class="font-12">
               <span>${this.obj.date || ""}</span>
             </div>
             <div class="font-12 font-999">${this.obj.content}</div>`;
    }
}