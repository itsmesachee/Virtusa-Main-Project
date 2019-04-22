package com.payumoneyintegrationserver.service;

import com.payumoneyintegrationserver.model.PaymentCallback;
import com.payumoneyintegrationserver.model.PaymentDetail;

public interface PaymentService {
    PaymentDetail proceedPayment(PaymentDetail paymentDetail);

    String payuCallback(PaymentCallback paymentResponse);
}
