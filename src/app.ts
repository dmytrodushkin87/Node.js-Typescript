import express, { Request, Response, NextFunction } from 'express';
import todoRouters from './routers/todos';

const app = express();
// returns JSON
app.use(express.json());

app.use('/todos', todoRouters);

//error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message : err.message })
})

app.listen(3000, () => {
  console.log('serser start on port 3000');
});
