import { Router } from 'express';
import { ItemBL } from '../bl/ItemBL';
import { ItemUsageBL } from '../bl/ItemUsageBL';

const route = Router();

route.get('/owner/:ownerId', async (req, res) => {
  try {
    const ownerId = req.params.ownerId;
    const items = await ItemBL.getByOwner(ownerId);
    res.json(items).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

route.post('/usage', async (req, res) => {
  try {
    const itemId = req.body.itemId;
    const usedBy = req.body.usedBy;
    const quantity = req.body.quantity;
    const description = req.body.description;

    // TODO: add validations

    await ItemUsageBL.create(itemId, usedBy, quantity, description);

    console.log(
      `${usedBy} used ${quantity} of item ${itemId} with the description ${description}`
    );
    res.status(200).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

route.delete('/:itemId', async (req, res) => {
  try {
    const itemToDeleteId = req.params.itemId;

    // TODO: add validations

    await ItemBL.delete(parseInt(itemToDeleteId));
    res.status(200).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

route.delete('/usage/:itemId', async (req, res) => {
  try {
    const itemToDeleteId = req.params.itemId;

    // TODO: add validations

    await ItemUsageBL.delete(parseInt(itemToDeleteId));

    console.log(`usage ${itemToDeleteId} ended`);
    res.status(200).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

route.post('/item', async (req, res) => {
  try {
    const name = req.body.name;
    const quantity = req.body.quantity;
    const ownerId = req.body.owner;
    const description = req.body.description;

    // TODO: add validations

    const createdItem = await ItemBL.create(
      name,
      quantity,
      ownerId,
      description
    );

    console.log(`created ${quantity} of item ${name} in inventory ${ownerId}`);
    res.json(createdItem).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

export default route;
