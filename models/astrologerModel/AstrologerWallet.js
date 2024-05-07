const mongoose = require('mongoose');

const astrologerWalletSchema = new mongoose.Schema({
astrologer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Astrologer'
},
customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Customers'
},
wallet_balance: {
    type: Number,
    default: 0
}
},{ collection: 'AstrologerWallet', timestamps: true });

astrologerWalletSchema.virtual('formatted_wallet_balance').get(function () {
    return this.wallet_balance.toFixed(2);
});

const AstrologerWallet = mongoose.model('AstrologerWallet', astrologerWalletSchema);

module.exports = AstrologerWallet;


