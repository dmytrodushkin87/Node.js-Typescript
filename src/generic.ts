const paragraph = document.querySelector('p');
const node = document.createTextNode("This is a new paragraph.");
if (paragraph){
  paragraph.appendChild(node);
}
class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  };
  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  };
  getItems() {
    return [...this.data]
  };
};
const textStorage = new DataStorage<string>();
textStorage.addItem('first text');
textStorage.addItem('second text');
console.log(textStorage.getItems());