package com.payumoneyintegrationserver.model;

import javax.persistence.*;

import com.payumoneyintegrationserver.util.PaymentMode;
import com.payumoneyintegrationserver.util.PaymentStatus;

import java.util.Date;

@Entity
@Table(name = "Payment")
public class Payment {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column
    private String email;
    @Column
    private String firstname;
    @Column
    private String lastname;
    @Column
    private String phone;
    @Column
    private Double amount;
    @Column
    @Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus;
    @Column
    @Temporal(TemporalType.DATE)
    private Date paymentDate;
    @Column
    private String txnId;
    @Column
    private String mihpayId;
    @Column
    @Enumerated(EnumType.STRING)
    private PaymentMode mode;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return lastname;
    }

    public void setName(String name) {
        this.lastname = name;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getProductInfo() {
        return firstname;
    }

    public void setProductInfo(String productInfo) {
        this.firstname = productInfo;
    }

    public Double getAmount() {
        return amount;
    }

    public void setAmount(Double amount) {
        this.amount = amount;
    }

    public PaymentStatus getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(PaymentStatus paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public Date getPaymentDate() {
        return paymentDate;
    }

    public void setPaymentDate(Date paymentDate) {
        this.paymentDate = paymentDate;
    }

    public String getTxnId() {
        return txnId;
    }

    public void setTxnId(String txnId) {
        this.txnId = txnId;
    }

    public String getMihpayId() {
        return mihpayId;
    }

    public void setMihpayId(String mihpayId) {
        this.mihpayId = mihpayId;
    }

    public PaymentMode getMode() {
        return mode;
    }

    public void setMode(PaymentMode mode) {
        this.mode = mode;
    }
}
