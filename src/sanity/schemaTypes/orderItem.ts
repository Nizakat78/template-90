export const orderItem = {
    name: 'orderItem',
    title: 'Order Item',
    type: 'object',
    fields: [
     
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'quantity',
        title: 'Quantity',
        type: 'number',
      },
      {
        name: 'image',  // Image field for the item
        title: 'Image',
        type: 'string',  // URL of the image
        description: 'URL of the product image',
      },
    
    ],
  };
  