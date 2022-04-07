import { Router } from 'express';
import { ItemsBL } from '../bl/ItemsBL';

const route = Router();

route.get('/owner/:ownerId', async (req, res) => {
  try {
    const ownerId = req.params.ownerId;
    const items = await ItemsBL.getByOwner(ownerId);
    res.json(items).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

route.post('/use', async (req, res) => {
  try {
    const itemId = req.body.itemId;
    const usedBy = req.body.usedBy;
    const quantity = req.body.quantity;
    const description = req.body.description;

    // TODO: add validations

    await ItemsBL.useItem(itemId, usedBy, quantity, description)

    console.log(`${usedBy} used ${quantity} of item ${itemId} with the description ${description}`)
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

    await ItemsBL.deleteUsage(itemToDeleteId)

    console.log(`usage ${itemToDeleteId} ended`)
    res.status(200).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

route.put('/create', async (req, res) => {
  try {
    const name = req.body.name;
    const quantity = req.body.quantity;
    const ownerId = req.body.owner;

    // TODO: add validations

    await ItemsBL.create(name, quantity, ownerId)

    console.log(`created ${quantity} of item ${name} in inventory ${ownerId}`)
    res.status(200).end();
  } catch (e) {
    console.log(e);
    res.status(500).end();
  }
});

export default route;
