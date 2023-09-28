export interface Order {
  id: number;
  create_date: Date;
  status: 'Approve' | 'Cancel' | 'Delivery' | 'Traveling';
  cliente?: string | undefined; 
  shippingAddress?: string | undefined; 
  shippingPromise?: Date | undefined; 
  items: Item[];
}

export interface Item {
  id: number;
  title: string;
  description: string;
  url: string;
  price: number;
  quantity: number;
}
