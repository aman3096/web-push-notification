var push = require('web-push');
let vapidKeys= {
  publicKey: 'BJ1FlH7k7joYVl2EM2kjlG7upbuQ9-5YjAPh1B8Lgs-Slu17HpJe3dkdO42hP42OAb4n_alKlM7Qro0hwHDMZ7M',
  privateKey: 'b2oRRJxEUzPjrocQXydb0NSAX6ovMpZyCuiPudcAuCw'
}

  push.setVapidDetails('mailto: test@test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/cDyjUOb47kg:APA91bEgbd10e3OdLXKYT-WoWjQd7iHQygvZ97YJ5yF1wlnAA6rSJbY-jByTvB3aFtH4EH7EW_dVMOlVp6OGP037g5D6m05lTZ-Ay6I__sPUwkT3kQ8GzkBbrU7ocHH0TJzrin1gy20x","expirationTime":null,"keys":{"p256dh":"BPPB9e5l1fYNyhA9kuWULB-UBqR7Eqs8W3rvvXB4wDmEkDvkd2YXetCx9Fc_c71rZIlwQwl8BRqm_G0hjsH_E6M","auth":"-kQ0KJmqxIpuIFmcM46t2A"}}

  push.sendNotification( sub, 'test message')
  