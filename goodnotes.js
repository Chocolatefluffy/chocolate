var body = JSON.parse($response.body);

body.subscriber.entitlements = {
      "apple_access": {
        "expires_date": "9692-11-24T14:07:14Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.goodnotes.premium_1y25off_1y_999",
        "purchase_date": "2024-11-18T14:07:14Z"
       },
      "crossplatform_access": {
        "expires_date": "9692-11-24T14:07:14Z",
        "grace_period_expires_date": null,
        "product_identifier": "com.goodnotes.premium_1y25off_1y_999",
        "purchase_date": "2024-11-18T14:07:14Z"
       }
    };

body.subscriber.subscriptions = {
      "com.goodnotes.premium_1y25off_1y_999": {
        "auto_resume_date": null,
        "billing_issues_detected_at": null,
        "expires_date": "9692-11-24T14:07:14Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2024-11-18T14:07:15Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2024-11-18T14:07:14Z",
        "refunded_at": null,
        "store": "app_store",
        "store_transaction_id": "30002297403294",
        "unsubscribe_detected_at": null
      }
    };



a = JSON.stringify(body);
$done({body:a});
