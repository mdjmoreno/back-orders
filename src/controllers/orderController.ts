import { Request, Response } from "express";
import { Order } from "../model/orderModels";
import ordersDB from "../db/orders.json";

let orders: Order[] = ordersDB;

export const getAllOrders = (req: Request, res: Response) => {
  res.json({ message: "Obtener todas las órdenes", orders });
};

export const postOrders = (req: Request, res: Response) => {
  const {
    create_date,
    status,
    cliente,
    shippingAddress,
    shippingPromise,
    items,
  } = req.body;

  if (!create_date || !status || !items || !items.length) {
    return res.status(400).json({ error: "Todos los campos son requeridos" });
  }

  const idOrder = orders.length + 1;

  const newOrder: Order = {
    id: idOrder,
    create_date,
    status,
    cliente,
    shippingAddress,
    shippingPromise,
    items,
  };

  orders.push(newOrder);

  res.status(201).json({ message: "Order created successfully", orders });
};
