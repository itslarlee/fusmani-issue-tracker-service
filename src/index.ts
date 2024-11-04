import express, { Application } from 'express';
import issuesRouter from './routes/issues';

const app: Application = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use('/api/issues', issuesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
