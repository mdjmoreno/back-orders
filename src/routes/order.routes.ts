import { Router } from "express";
import { getAllOrders, postOrders } from "../controllers/orderController";

const OrderRouter = Router();

OrderRouter.get("/orders", getAllOrders);
OrderRouter.post("/orders", postOrders);

export default OrderRouter;
