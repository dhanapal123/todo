export class Todo {
  _id: String;
  userId: number
  taskDesc:String;
  taskCompleted = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
