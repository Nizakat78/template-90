// GET /products


{
  "status": "success",
  "data": [
    {
      "id": "101",
      "name": "Veggie Burger",
      "price": 5.99,
      "category": "Food",
      "description": "A delicious veggie burger with fresh ingredients.",
      "image_url": "XY"
    },
    {
      "id": "102",
      "name": "Cheese Pizza",
      "price": 7.99,
      "category": "Food",
      "description": "A cheesy delight with a perfect crust.",
      "image_url": "https"
    }
  ]
}







// GET /product/{id}


{
  "status": "success",
  "data": {
    "id": "101",
    "name": "Veggie Burger",
    "price": 5.99,
    "category": "Food",
    "description": "A delicious veggie burger with fresh ingredients.",
    "ingredients": [
      "Lettuce",
      "Tomato",
      "Veggie Patty",
      "Whole Wheat Bun"
    ],
    "extra_options": [
      "Add Extra Topping",
      "Extra Cheese"
    ],
    "image_url": "http://example.com/veggie-burger.jpg"
  }
}




// GET /cart



{
  "status": "success",
  "data": {
    "cart_items": [
      {
        "id": "101",
        "name": "Veggie Burger",
        "quantity": 2,
        "price": 5.99
      },
      {
        "id": "102",
        "name": "Cheese Pizza",
        "quantity": 1,
        "price": 7.99
      }
    ],
    "total_cost": 19.97
  }
}





// POST /cart/add

//Request Body


{
  "product_id": "101",
  "quantity": 1
}


//response
{
  "status": "success",
  "message": "Product added to cart successfully",
  "data": {
    "cart_id": "1",
    "total_items": 1
  }
}



// POST /checkout


 //Request Body:
{
  "user_id": "789",
  "cart_items": [
    { "product_id": "101", "quantity": 2 },
    { "product_id": "102", "quantity": 1 }
  ],
  "delivery_address": "1234 Elm Street, City, Country",
  "payment_method": "Stripe"
}
 

//response 

{
  "status": "success",
  "order_id": "123456",
  "total_cost": 19.97,
  "message": "Order placed successfully, redirecting to payment"
}



//POST /payment

//Request Body

{
  "order_id": "123456",
  "payment_method": "Stripe",
  "payment_details": {
    "stripe_token": "tok_visa"
  }
}
 //response
{
  "order_id": "123456",
  "payment_method": "Stripe",
  "payment_details": {
    "stripe_token": "tok_visa"
  }
}



//POST /shipping/generateTracking

//Request Body

{
  "status": "success",
  "tracking_id": "TRK12345",
  "message": "Tracking ID generated successfully"
}



//GET /shipping/status/{tracking_id}



{
  "status": "success",
  "shipping_status": "In Transit",
  "expected_delivery": "2025-01-20"
}



// POST /user/login

//Request Body

{
  "email": "user@example.com",
  "password": "password123"
}


//response

{
  "status": "success",
  "message": "Login successful",
  "user_id": "789",
  "token": "abc123xyz"
}



// POST /user/signup


//Request Body

{
  "email": "newuser@example.com",
  "password": "password123",
  "name": "John Doe"
}


// response

{
  "status": "success",
  "message": "User registered successfully",
  "user_id": "101112",
  "token": "def456ghi"
}





//