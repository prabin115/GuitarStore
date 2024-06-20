package com.guitar.guitarstore.controller;

import java.util.Map;

import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

@CrossOrigin
@RestController
@RequestMapping("/payment")
public class PaymentController {
    
    @PostMapping("/create_order")
    public String createOrder(@RequestBody Map <String, Object> data) throws RazorpayException{
        
        int amt = Integer.parseInt(data.get("amount").toString());
        RazorpayClient razorpay = new RazorpayClient("rzp_test_vdWYK6IB8aPSel", "pEUjHdXOmLaje6DsKbenWYZT");

        JSONObject orderRequest = new JSONObject();
        orderRequest.put("amount",amt * 100);
        orderRequest.put("currency","INR");
        orderRequest.put("receipt", "receipt#1");

        JSONObject notes = new JSONObject();
        // notes.put("notes_key_1","Tea, Earl Grey, Hot");
        orderRequest.put("notes",notes);

        Order order = razorpay.orders.create(orderRequest);
        System.out.println(order);

        return order.toString();
    }
}
