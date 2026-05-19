const express = require("express");
const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
    const {name, price, category_id, business_id } = req.body;

    const query = `
        INSERT INTO products (name, price, category_id, business_id)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
    `;

    try {
        const result = await db.query(query, [name, price, category_id, business_id]);
        res.status(201).json({ message: "Product added", data: result.rows });
    } catch (error) {
        res.status(500).json({ message: "Error", error: error.message });
    }
});

// GET ALL
router.get("/", async (req, res) => {
    const result = await db.query("SELECT * FROM products");
    res.json(result.rows);
});

// GET BY ID
router.get("/:id", async (req, res) => {
    const result = await db.query(
        "SELECT * FROM products WHERE product_id = $1",
        [req.params.id]
    );
    res.json(result.rows);
});

// DELETE
router.delete("/:id", async (req, res) => {
    await db.query(
        "DELETE FROM products WHERE product_id = $1",
        [req.params.id]
    );

    res.json({ message: "Deleted successfully" });
});

// UPDATE
router.put("/:id", async (req, res) => {
    const { name, price, category_id, business_id } = req.body;

    const query = `
        UPDATE products
        SET name = $1, price = $2, category_id = $3, business_id = $4
        WHERE product_id = $5
        RETURNING *;
    `;

    const result = await db.query(query, [
        name,
        price,
        category_id,
        business_id,
        req.params.id
    ]);

    res.json(result.rows);
});

const ProductRouter = express.Router()

ProductRouter.get("/:id", getProduct)

export default ProductRouter