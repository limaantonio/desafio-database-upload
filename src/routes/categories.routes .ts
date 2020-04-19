import { Router, request, response } from 'express';

import CreateCategoryService from '../services/CreateCategoryTransationService';
// import DeleteTransactionService from '../services/DeleteTransactionService';
// import ImportTransactionsService from '../services/ImportTransactionsService';

const categoriesRouter = Router();

categoriesRouter.post('/', async (request, response) => {
  try {
    const { title } = request.body;
    const createCategory = new CreateCategoryService();

    const category = await createCategory.execute({
      title,
    });

    return response.json(category);
  } catch (err) {
    return response.json({ err: err.message });
  }
});

export default categoriesRouter;
