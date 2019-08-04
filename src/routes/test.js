import Router from 'express';
import TodoController from '../controllers/index'
const appRouter = Router();



appRouter.get('/', TodoController.getAllTodos);

appRouter.post('/addtodo', TodoController.createTodo);

appRouter.put('/edittodo/:id', TodoController.updateTodo);

appRouter.delete('/deletetodo/:id', TodoController.deleteTodo);

appRouter.get('*', (req, res) => {
  res.status(404).json("404 page not found");
})

export default appRouter;


/*
to be able to see all todos in db i need a get route
/getAllTodos

to be able to add todo i need a post route

to be able to edit to i need a put route

to be able to delete todo i need a delete route
*/