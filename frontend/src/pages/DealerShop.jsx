



// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import products from "../data/products";
// import api from "../utils/api";
// import "./DealerShop.css";

// const DealerOrders = ({ dealerId, refreshTrigger }) => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!dealerId) return;
    
//     setLoading(true);
//     api.get(`/api/orders/dealer/${dealerId}`)
//       .then(res => {
//         setOrders(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.log("No orders found or error:", err);
//         setLoading(false);
//       });
//   }, [dealerId, refreshTrigger]);

//   if (loading) return <div className="loading">Loading orders...</div>;
//   if (orders.length === 0) return <div className="no-orders">No orders yet.</div>;

//   return (
//     <div className="orders-section">
//       <h4>📜 Previous Orders</h4>
//       <div className="orders-list">
//         {orders.map(o => (
//           <div key={o._id} className="order-card">
//             <p className="order-date"><b>Date:</b> {new Date(o.createdAt).toLocaleString()}</p>
//             <p className="order-amount"><b>Total:</b> ₹ {o.totalAmount}</p>
//             <ul className="order-items">
//               {o.items.map((i, idx) => (
//                 <li key={idx}>{i.name} × {i.qty} - ₹ {i.price * i.qty}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };



// const DealerShop = () => {
//   const { dealerId } = useParams();
//   const [cart, setCart] = useState([]);
//   const [showFullDesc, setShowFullDesc] = useState({});
//   const [ordersRefresh, setOrdersRefresh] = useState(0);
//   const [addingId, setAddingId] = useState(null);

 


// const addToCart = (p) => {
//   setAddingId(p.id); // 👈 start loader

//   setTimeout(() => {
//     const found = cart.find(i => i.id === p.id);

//     if (found) {
//       setCart(cart.map(i =>
//         i.id === p.id ? { ...i, qty: i.qty + 1 } : i
//       ));
//     } else {
//       setCart([...cart, { ...p, qty: 1 }]);
//     }

//     setAddingId(null); // 👈 stop loader
//   }, 300); // small delay for UX
// };




//   const removeFromCart = (id) => setCart(cart.filter(i => i.id !== id));
  
//   const changeQty = (id, delta) => 
//     setCart(cart.map(i => i.id === id ? { ...i, qty: Math.max(i.qty + delta, 1) } : i));
  
//   const toggleDesc = (id) => setShowFullDesc(prev => ({ ...prev, [id]: !prev[id] }));
  
//   const total = cart.reduce((s, i) => {
//     let price = 0;
//     if (i.price.includes('-')) {
//       price = parseFloat(i.price.split('-')[0].trim());
//     } else {
//       price = parseFloat(i.price);
//     }
//     return s + price * i.qty;
//   }, 0);

//   const placeOrder = async () => {
//     if (cart.length === 0) return alert("Cart empty");
    
//     try {
//       const orderItems = cart.map(item => {
//         let price = 0;
//         if (item.price.includes('-')) {
//           price = parseFloat(item.price.split('-')[0].trim());
//         } else {
//           price = parseFloat(item.price);
//         }
        
//         return {
//           productId: item.id,
//           name: item.name,
//           price: price,
//           qty: item.qty
//         };
//       });

//       const response = await api.post("/api/orders", {
//         dealerId: dealerId,
//         items: orderItems,
//         totalAmount: total
//       });

//       alert("Order placed successfully!");
      
//       setCart([]);
//       setOrdersRefresh(prev => prev + 1);
      
//     } catch (error) {
//       console.error("Error placing order:", error);
//       alert("Order placement failed: " + (error.response?.data?.message || error.message));
//     }
//   };

//   return (
//     <div className="dealer-shop-container">
//       {/* Products Section */}
//       <div className="products-container">
//         <h2>🛒 Dealer Shopping</h2>
//         <div className="products-grid">
//           {products.map(p => (
//             <div key={p.id} className="product-card">
//               <img src={p.image} alt={p.name} className="product-image" />
//               <h6 className="product-name">{p.name}</h6>
//               <p className="product-price">₹ {p.price}</p>
//               <p className="product-unit">{p.unit}</p>
//               <p className="product-description">
//                 {showFullDesc[p.id] ? p.description : p.description.slice(0, 50) + (p.description.length > 50 ? "..." : "")}
//                 {p.description.length > 50 && (
//                   <button className="read-more-btn" onClick={() => toggleDesc(p.id)}>
//                     {showFullDesc[p.id] ? " Show less" : " Read more"}
//                   </button>
//                 )}
//               </p>
//               {/* <button className="add-to-cart-btn" onClick={() => addToCart(p)}>
//                 Add to Cart
//               </button> */}

// <button
//   className="add-to-cart-btn"
//   onClick={() => addToCart(p)}
//   disabled={addingId === p.id}
// >
//   {addingId === p.id ? "Adding..." : "Add to Cart"}
// </button>



//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Cart + Orders Sidebar */}
//       <div className="sidebar-container">
//         <div className="cart-section">
//           <h4>🧺 Cart</h4>
//           {cart.length === 0 ? (
//             <div className="empty-cart">Cart is empty</div>
//           ) : (
//             <>
//               <div className="cart-items">
//                 {cart.map(i => {
//                   let price = 0;
//                   if (i.price.includes('-')) {
//                     price = parseFloat(i.price.split('-')[0].trim());
//                   } else {
//                     price = parseFloat(i.price);
//                   }
                  
//                   return (
//                     <div key={i.id} className="cart-item">
//                       <div className="cart-item-info">
//                         <p className="cart-item-name">{i.name}</p>
//                         <p className="cart-item-price">
//                           ₹ {price} × {i.qty} = ₹ {price * i.qty}
//                         </p>
//                         <div className="quantity-controls">
//                           <button 
//                             className="qty-btn" 
//                             onClick={() => changeQty(i.id, -1)}
//                           >
//                             -
//                           </button>
//                           <span className="qty-display">{i.qty}</span>
//                           <button 
//                             className="qty-btn" 
//                             onClick={() => changeQty(i.id, 1)}
//                           >
//                             +
//                           </button>
//                         </div>
//                       </div>
//                       <button 
//                         className="remove-item-btn" 
//                         onClick={() => removeFromCart(i.id)}
//                       >
//                         ×
//                       </button>
//                     </div>
//                   );
//                 })}
//               </div>
//               <div className="cart-total">
//                 <h5 className="total-amount">Total: ₹ {total.toFixed(2)}</h5>
//                 <button 
//                   className="place-order-btn" 
//                   onClick={placeOrder}
//                   disabled={cart.length === 0}
//                 >
//                   Place Order
//                 </button>
//               </div>
//             </>
//           )}
//         </div>

//         {/* Dealer Orders inside same page */}
//         <DealerOrders dealerId={dealerId} refreshTrigger={ordersRefresh} />
//       </div>
//     </div>
//   );
// };

// export default DealerShop;







import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import api from "../utils/api";
import "./DealerShop.css";

const DealerOrders = ({ dealerId, refreshTrigger }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!dealerId) return;
    
    setLoading(true);
    api.get(`/api/orders/dealer/${dealerId}`)
      .then(res => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.log("No orders found or error:", err);
        setLoading(false);
      });
  }, [dealerId, refreshTrigger]);

  if (loading) return <div className="loading">Loading orders...</div>;
  if (orders.length === 0) return <div className="no-orders">No orders yet.</div>;

  return (
    <div className="orders-section">
      <h4>📜 Previous Orders</h4>
      <div className="orders-list">
        {orders.map(o => (
          <div key={o._id} className="order-card">
            <p className="order-date"><b>Date:</b> {new Date(o.createdAt).toLocaleString()}</p>
            <p className="order-amount"><b>Total:</b> ₹ {o.totalAmount}</p>
            <ul className="order-items">
              {o.items.map((i, idx) => (
                <li key={idx}>{i.name} × {i.quantity} ({i.weight || 'N/A'}) - ₹ {i.price}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const DealerShop = () => {
  const { dealerId } = useParams();
  const [cart, setCart] = useState([]);
  const [ordersRefresh, setOrdersRefresh] = useState(0);

  // Weight options with price multipliers
  const weightOptions = [
    { label: "1kg", multiplier: 1 },
    { label: "5kg", multiplier: 4.8 },
    { label: "10kg", multiplier: 9.5 },
    { label: "20kg", multiplier: 18 },
    { label: "25kg", multiplier: 22 },
    { label: "50kg", multiplier: 40 }
  ];

  // Calculate price based on weight
  const calculatePrice = (product, weightLabel) => {
    const basePrice = parseFloat(product.price.split('-')[0].trim());
    const weight = weightOptions.find(w => w.label === weightLabel);
    return basePrice * weight.multiplier;
  };

  // Add item with specific weight
  const addToCartWithWeight = (product, weightLabel) => {
    const price = calculatePrice(product, weightLabel);
    
    // Check if same product with same weight already in cart
    const existingItem = cart.find(item => 
      item.id === product.id && item.weight === weightLabel
    );
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id && item.weight === weightLabel
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, {
        id: product.id,
        name: product.name,
        price: price,
        quantity: 1,
        weight: weightLabel
      }]);
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Update quantity
  const updateQuantity = (id, newQty) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(newQty, 1) } : item
    ));
  };

  // Calculate total
  const total = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
  }, 0);

  // Place order
  const placeOrder = async () => {
    if (cart.length === 0) return alert("Cart empty");
    
    try {
      const orderItems = cart.map(item => ({
        productId: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        weight: item.weight
      }));

      await api.post("/api/orders", {
        dealerId: dealerId,
        items: orderItems,
        totalAmount: total.toFixed(2)
      });

      alert("Order placed successfully!");
      setCart([]);
      setOrdersRefresh(prev => prev + 1);
      
    } catch (error) {
      alert("Order placement failed!");
      console.error(error);
    }
  };

  return (
    <div className="dealer-shop-container">
      {/* Products Section */}
      <div className="products-container">
        <h2>🛒 Dealer Shopping</h2>
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h6 className="product-name">{product.name}</h6>
              <p className="product-price">₹ {product.price}</p>
              
              {/* Weight Selection Buttons */}
              <div className="weight-buttons">
                {weightOptions.map(weight => (
                  <button
                    key={weight.label}
                    className="weight-btn"
                    onClick={() => addToCartWithWeight(product, weight.label)}
                    title={`Add ${weight.label}`}
                  >
                    {weight.label}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Section */}
      <div className="sidebar-container">
        <div className="cart-section">
          <h4>🧺 Cart ({cart.length} items)</h4>
          
          {cart.length === 0 ? (
            <div className="empty-cart">
              <p>Your cart is empty</p>
              <p className="cart-empty-sub">Click on weight buttons (1kg, 10kg, etc.) to add items</p>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cart.map(item => (
                  <div key={`${item.id}-${item.weight}`} className="cart-item">
                    <div className="cart-item-info">
                      <p className="cart-item-name">{item.name}</p>
                      <div className="item-details">
                        <span className="weight-badge">{item.weight}</span>
                        <span className="item-price">₹ {item.price.toFixed(2)}</span>
                      </div>
                      <div className="quantity-control">
                        <label>Quantity:</label>
                        <input
                          type="number"
                          min="1"
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="quantity-input"
                        />
                        <button 
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          🗑️
                        </button>
                      </div>
                      <p className="item-total">
                        Total: ₹ {(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="cart-summary">
                <div className="summary-row">
                  <span>Total Amount:</span>
                  <span className="total-amount">₹ {total.toFixed(2)}</span>
                </div>
                
                <button 
                  className="place-order-btn" 
                  onClick={placeOrder}
                >
                  Place Order
                </button>
                
                <button 
                  className="clear-cart-btn"
                  onClick={() => setCart([])}
                >
                  Clear Cart
                </button>
              </div>
            </>
          )}
        </div>

        {/* Orders History */}
        <DealerOrders dealerId={dealerId} refreshTrigger={ordersRefresh} />
      </div>
    </div>
  );
};

export default DealerShop;
