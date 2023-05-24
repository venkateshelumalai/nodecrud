
const mongoose = require('mongoose'); // added by venkat on 24 May 23


mongoose.connect('mongodb://localhost/productsDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error({ FailedToConnectMongoDb: err });
    process.exit(1);
});
