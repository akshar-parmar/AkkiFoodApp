/**
 * Create Store
 *  - configureStore() - RTK
 *
 * Provide my store to app
 *  - <Provider store = {store}> - import from react-redux
 *
 * Slice
 *  - RTK - createSlice({
 *          name: "",
 *          initialState:
 *          reducers: {
 *             addItem: (state, action)=> { state= action.payload}
 *          }
 *      })
 *    export const {addItem, removeItem} = cartSlice.actions;
 *    export default cartSlice.reducer;
 *
 * Put that Slice into Store
 *      - {
 *        reducer: {
 *             cart: cartSlice,
 *             user: userSlice
 *         }
 * }
 *
 * */

how can a component subscribe to store
const cartItems = useSelector(store=>store.cart.items);

how to dispatch action when user clicks on addItem button
    -const dispatch = useDispatch()  -->react-redux
    -then we can dispatch action for eg dispatch(addItem()) , addItem need to be imported from CartSlice.js
    -addItem calls the reducer function and then reducer function modifies the store.
