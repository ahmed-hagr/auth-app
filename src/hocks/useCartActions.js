import { useDispatch, useSelector } from 'react-redux';
import { addToCart,removeFromCart } from '../../store/slices/cartSlice';
const useCartActions = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.items);
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const isProductInCart = (id) => {
    return cart?.some(item => item.id === id);
  };

  return { handleAddToCart, handleRemoveFromCart, isProductInCart };
};

export default useCartActions;
