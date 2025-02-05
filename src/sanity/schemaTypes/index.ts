import { type SchemaTypeDefinition } from 'sanity'
import chefs from './chefs'  // Import the chefs schema
import foods from './foods'  // Import the foods schema
import Cart from './Cart'    // Import the Cart schema
import orders from './orders' // Import the orders schema
import { orderItem } from './orderItem'
import { shippingDetails } from './shippingDetails'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [chefs, foods, Cart, orders, orderItem,shippingDetails],  // Array of all the schema types to be included in your project
}
