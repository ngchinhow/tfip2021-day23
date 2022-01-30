export class Task {
  id: string;
  description: string;
  priority: string;
  dueDate: Date;
  status: string;

  constructor(
    id: string | null,
    description: string,
    priority: string,
    dueDate: Date,
    status: string
  ) {
    this.id = id || this.makeid(9);
    this.description = description;
    this.priority = priority;
    this.dueDate = dueDate;
    this.status = status;
  }

  makeid(length: number) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}

export const priorityOptions = [
  'high',
  'medium',
  'low'
]
