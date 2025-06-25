import User from "../models/User.js";

// Update User cartData: /api/cart/update
export const updateCart = async (req, res) => {
  try {
    const { cartItems } = req.body;
    const userId = req.userId; // ✅ get from auth middleware

    if (!userId) {
      return res.status(401).json({ success: false, message: "User not authenticated" });
    }

    await User.findByIdAndUpdate(userId, { cartItems }, { new: true });

    res.json({ success: true, message: "Cart Updated" });
  } catch (error) {
    console.log("Cart update error:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
