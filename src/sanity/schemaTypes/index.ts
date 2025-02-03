import { type SchemaTypeDefinition } from 'sanity'
import chefs from './chefs'
import foods from './foods'
import Cart from './Cart'
import orders from './orders'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [chefs, foods, Cart, orders],
}
