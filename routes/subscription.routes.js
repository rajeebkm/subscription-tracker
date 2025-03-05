import {Router} from 'express';
import {createSubscription, getUserSubscriptions} from '../controllers/subscription.controller.js';
import authorize from '../middlewares/auth.middleware.js';
const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
  res.send({title: 'GET all subscriptions', message: 'All subscriptions fetched successfully'});
});

subscriptionRouter.get('/:id', (req, res) => {
  res.send({title: 'GET subscription details', message: `Subscription ${req.params.id} fetched successfully`});
});

subscriptionRouter.post('/', authorize, createSubscription);

subscriptionRouter.put('/:id', (req, res) => {
  res.send({title: 'UPDATE subscription', message: `Subscription ${req.params.id} updated successfully`});
});

subscriptionRouter.delete('/:id', (req, res) => {
  res.send({title: 'DELETE subscription', message: `Subscription ${req.params.id} deleted successfully`});
});

subscriptionRouter.get('/user/:id', authorize, getUserSubscriptions);

subscriptionRouter.get('/:id/cancel', (req, res) => {
  res.send({title: 'CANCEL subscription', message: `Subscription ${req.params.id} cancelled successfully`});
});

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
  res.send({title: 'GET upcoming renewals', message: `Upcoming renewals fetched successfully`});
});




export default subscriptionRouter;