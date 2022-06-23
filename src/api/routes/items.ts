import { BorrowedItemsBL } from './../bl/BorrowedItemsBL';
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

route.post('/borrow', async (req, res) => {
	try {
		const itemId = req.body.itemId;
		const usedBy = req.body.usedBy;
		const quantity = req.body.quantity;
		const description = req.body.description;

		// TODO: add validations

		await BorrowedItemsBL.borrowItem({ itemId, usedBy, quantity, description });

		console.log(`${usedBy} used ${quantity} of item ${itemId} with the description ${description}`);
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

		await ItemsBL.delete(parseInt(itemToDeleteId));
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

		await ItemsBL.deleteUsage(itemToDeleteId);

		console.log(`usage ${itemToDeleteId} ended`);
		res.status(200).end();
	} catch (e) {
		console.log(e);
		res.status(500).end();
	}
});

route.post('/', async (req, res) => {
	try {
		const name = req.body.name;
		const unUseableQuantity = req.body.unUseableQuantity;
		const totalQuantity = req.body.totalQuantity;
		const description = req.body.description;
		const ownerId = req.body.ownerId;

		// TODO: add validations

		const createdItem = await ItemsBL.create({
			name,
			unUseableQuantity,
			totalQuantity,
			owner: ownerId,
			description
		});

		console.log(`created of item ${name} in inventory ${ownerId}`);
		res.json(createdItem).end();
	} catch (e) {
		console.log(e);
		res.status(500).end();
	}
});

export default route;
