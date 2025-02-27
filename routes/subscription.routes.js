import {Router} from 'express';

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => {
  res.send({title: 'GET all subscriptions', message: 'All subscriptions fetched successfully'});
});

subscriptionRouter.get('/:id', (req, res) => {
  res.send({title: 'GET subscription details', message: `Subscription ${req.params.id} fetched successfully`});
});

subscriptionRouter.post('/', (req, res) => {
  res.send({title: 'CREATE subscription', message: 'Subscription created successfully'});
});

subscriptionRouter.put('/:id', (req, res) => {
  res.send({title: 'UPDATE subscription', message: `Subscription ${req.params.id} updated successfully`});
});

subscriptionRouter.delete('/:id', (req, res) => {
  res.send({title: 'DELETE subscription', message: `Subscription ${req.params.id} deleted successfully`});
});

subscriptionRouter.get('/user/:id', (req, res) => {
  res.send({title: 'GET all subscriptions for a user', message: `All subscriptions for user ${req.params.id} fetched successfully`});
});

subscriptionRouter.get('/:id/cancel', (req, res) => {
  res.send({title: 'CANCEL subscription', message: `Subscription ${req.params.id} cancelled successfully`});
});

subscriptionRouter.get('/upcoming-renewals', (req, res) => {
  res.send({title: 'GET upcoming renewals', message: `Upcoming renewals fetched successfully`});
});







export default subscriptionRouter;