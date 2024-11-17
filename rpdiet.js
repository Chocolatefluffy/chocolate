var body = JSON.parse($response.body);

if (body.activeSubscriptions) {
    body.activeSubscriptions = [
        {
            "id": 2,
            "key": "rpdietyearlysub",
            "name": "Yearly Sub Regular",
            "priority": 100,
            "referralRequired": false,
            "isPromo": false,
            "startsAt": "2024-11-15T07:00:00.000Z",
            "endsAt": "2025-11-15T07:00:00.000Z",
            "createdAt": "2019-11-15T04:00:43.644Z",
            "updatedAt": "2023-04-26T20:06:52.036Z",
            "deletedAt": null,
            "access": [
                "diet"
            ],
            "matchedReferralCodes": [],
            "inAppPurchases": [
                {
                    "id": 665,
                    "platformId": "RPDietYearlySub2",
                    "platform": "ios",
                    "subscriptionGroup": "RP Diet",
                    "isInternal": false,
                    "createdAt": "2023-02-09T23:03:59.037Z",
                    "updatedAt": "2023-02-09T23:03:59.037Z",
                    "deletedAt": null,
                    "purchaseType": "subscription",
                    "name": "Diet App Yearly",
                    "callout": null,
                    "description": null,
                    "stripeProductIdLive": null,
                    "stripeProductIdTest": null,
                    "productId": 2,
                    "inAppPurchaseId": 665,
                    "prices": [
                        {
                            "id": 805,
                            "inAppPurchaseId": 665,
                            "price": 9999,
                            "unit": "year",
                            "billingPeriod": 1,
                            "introPrice": null,
                            "introUnit": null,
                            "introBillingPeriod": null,
                            "introLength": null,
                            "promoPrice": null,
                            "promoUnit": null,
                            "promoBillingPeriod": null,
                            "promoLength": null,
                            "startsAt": "2024-11-15T07:00:00.000Z",
                            "endsAt": "2025-11-15T07:00:00.000Z",
                            "createdAt": "2023-04-26T20:03:59.258Z",
                            "updatedAt": "2023-04-26T20:03:59.258Z",
                            "deletedAt": null,
                            "stripeCouponId": null,
                            "accessStartsAt": "2024-11-15T07:00:00.000Z",
                            "accessEndsAt": "2025-11-15T07:00:00.000Z"
                        }
                    ]
                }
            ],
            "purchaseType": "subscription",
            "recommended": true
        }
    ];
}

$done({ body: JSON.stringify(body) });
