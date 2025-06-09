import { getOrders } from "@/api/order";

const OrderManagementPage = async () => {
  const response = await getOrders();
  const orders = response?.data;
  return (
    <div>
      Your Order
      {orders.map((order) => {
        <div key={order.id}>{order.id}</div>;
      })}
    </div>
  );
};

export default OrderManagementPage;
