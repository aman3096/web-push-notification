var push = require('web-push');

let vapidKeys= {
  publicKey: 'BACQoQ8h5TYn_YNGBHoP4LwD77dIb110PtqHAfIY2VCQgTq51dDxZnh_eCvarrjafLJhBykEAyt6WF5Dlkh-izM',
  privateKey: 'SfNDLJjzasIdmN_cckk33zQxOHJ2tw2sCG445bot2mc'
}

  push.setVapidDetails('mailto:test@test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cDyjUOb47kg:APA91bEgbd10e3OdLXKYT-WoWjQd7iHQygvZ97YJ5yF1wlnAA6rSJbY-jByTvB3aFtH4EH7EW_dVMOlVp6OGP037g5D6m05lTZ-Ay6I__sPUwkT3kQ8GzkBbrU7ocHH0TJzrin1gy20x","expirationTime":null,"keys":{"p256dh":"BPPB9e5l1fYNyhA9kuWULB-UBqR7Eqs8W3rvvXB4wDmEkDvkd2YXetCx9Fc_c71rZIlwQwl8BRqm_G0hjsH_E6M","auth":"-kQ0KJmqxIpuIFmcM46t2A"}};
  push.sendNotification( sub, 'test message')
  