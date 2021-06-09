var push = require('web-push');
let vapidKeys= {
  publicKey: 'BJ1FlH7k7joYVl2EM2kjlG7upbuQ9-5YjAPh1B8Lgs-Slu17HpJe3dkdO42hP42OAb4n_alKlM7Qro0hwHDMZ7M',
  privateKey: 'b2oRRJxEUzPjrocQXydb0NSAX6ovMpZyCuiPudcAuCw'
}

  push.setVapidDetails('mailto: test@test@code.com', vapidKeys.publicKey, vapidKeys.privateKey)

  let sub = {};

  push.sendNotification( sub, 'test message')
  