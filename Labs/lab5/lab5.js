const { invoke } = window.parent.__TAURI__.tauri;
console.log("script loads");
async function read_file(){
    let text = document.querySelector("#input").value;
    let paragraph = document.querySelector("#field");
    let readedFile = await invoke("read_file", {path: text});
    paragraph.innerHTML = readedFile;
}
async function log(text){
    await invoke("log", {text: text});
}