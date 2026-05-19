const express = require("express")
const router = express.Router();
const db = require("../db");

router.post("/", async(req, res) => {
	const {product_id, business_id, quantity} = req.body;
	const Query = `INSERT INTO stock (product_id, business_id, quantity)
    VALUES ($1, $2, $3) RETURNING *;`;
	
	
	try{
		const result = await db.query(Query, [product_id, business_id, quantity]);
		res.status(201).json({message: "Stock added successful", 	result: result.rows[0]});
	}  catch (error) {
		res.status(500).json({message: "Failed...", 	error: error.message})
	}
})

router.get("/", async(req, res) => {
	const QUERY = "SELECT * FROM stock";
	
	try{
		const result = await db.query(QUERY);
		res.status(200).json({message: "Stocks fetched 	successfully", result: result.rows[0]})
	} catch (error) {
		res.status(500).json({message: "Failed to fetch stocks", 	error: error.message})
	}
})

router.get("/:id", async(req, res) => {
	const {id} = req.params
	const Query = `SELECT * FROM stock WHERE stock_id = $1`
	try{
		const result = await db.query(Query, [id]);
		res.status(200).json({message: "Stock fetched 	successfully", data: result.rows[0]})
	} catch (error){
		res.status(500).json({message: "Failed to fetch Stock", error: error.message})
	}
})

router.put("/:id", async(req, res) => {
	const {id} = req.params;
	const {product_id, business_id, quantity, created_at} = 	req.body
	const Query = `UPDATE stock SET product_id = $1, business_id = $2, quantity = $3, created_at = $4 WHERE stock_id = $5 RETURNING *`;
	try{
		const result = await db.query(Query, [product_id, business_id, quantity, created_at, id]);
		res.status(200).json({message: "Stock updated 	successfully", result: result.rows[0]})
	} catch (error) {
		res.status(500).json({message: "Stock update failed", 	error: error.message});
	}
})

router.delete("/:id", async(req, res) => {
	const {id} = req.params;
	const Query = `DELETE FROM stock WHERE stock_id = $1 RETURNING *`;
	try{
		const result = await db.query(Query, [id]);
		res.status(200).json({message: "Stock deleted 	successfully", result: result.rows[0]});
	} catch (error) {
		res.status(500).json({message: "Failed to delete stock", 	error: error.message});
	}
})