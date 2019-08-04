import uuid from 'uuid';
let Todos = [{
    id: uuid(),
    name: "wash clothes",
    created_at: new Date(),
    completed: false
  },
  {
    id: uuid(),
    name: "sweep",
    created_at: new Date(),
    completed: true
  },
  {
    id: uuid(),
    name: "wash plates",
    created_at: new Date(),
    completed: true
  },
  {
    id: uuid(),
    name: "wash dads car",
    created_at: new Date(),
    completed: false
  },
  {
    id: uuid(),
    name: "clubbing",
    created_at: new Date(),
    completed: false
  }

]

export default Todos;