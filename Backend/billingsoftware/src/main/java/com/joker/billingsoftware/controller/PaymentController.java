package com.joker.billingsoftware.controller;

import com.joker.billingsoftware.io.OrderResponse;
import com.joker.billingsoftware.io.PaymentRequest;
import com.joker.billingsoftware.io.PaymentVerificationRequest;
import com.joker.billingsoftware.io.RazorpayOrderResponse;
import com.joker.billingsoftware.service.OrderService;
import com.joker.billingsoftware.service.RazorpayService;
import com.razorpay.RazorpayException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payments")
@RequiredArgsConstructor
public class PaymentController {

    private final RazorpayService razorpayService;
    private final OrderService orderService;

    @PostMapping("/create-order")
    @ResponseStatus(HttpStatus.CREATED)
    public RazorpayOrderResponse createRazorpayOrder(@RequestBody PaymentRequest request) throws RazorpayException{
        return razorpayService.createOrder(request.getAmount(),request.getCurrency());
    }

    @PostMapping("/verify")
    public OrderResponse verifyPayment(@RequestBody PaymentVerificationRequest request){
        return orderService.verifyPayment(request);
    }
}
