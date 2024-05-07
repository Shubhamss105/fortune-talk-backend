const express = require("express");
const app = express();
const customerRoutes = require("./routes/customerRoutes");
const kundliRoutes = require("./routes/kundliRoutes")
const adminRoutes = require("./routes/adminRoutes");
const astrologerRoutes = require("./routes/astrologerRoutes");
const webRoutes=require('./routes/webRoutes')
// const paymentRoutes = require("./routes/paymentRoutes")
const db = require("./config/db");
const cors = require("cors");
const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*"
  }
});

const PORT = process.env.PORT || 4000;

app.use(express.static(__dirname + ""));
app.use(express.json()); // Parse incoming requests with JSON payloads
app.use(cors('*'));
db();
// // Define the API routes
app.use("/api/customers", customerRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/astrologer", astrologerRoutes);
app.use('/api/kundli', kundliRoutes);
app.use('/api/web', webRoutes);
// app.use("/api/kundli", kundliRoutes)
// app.use('/notification', notificationRoutes);

// app.use('/images', express.static('uploadImage'));

// initializeSocketIO(io)

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
