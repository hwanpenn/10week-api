module.exports = app => {
  const mongoose = app.mongoose
  
  const AppInfoSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true },
    access: { type: String, required: false, default: 'user' },
    extra: { type: mongoose.Schema.Types.Mixed },
    createdAt: { type: Date, default: Date.now },
    status: { type: String, default: '' },
    price: { type: String, default: '' },
    version: { type: String, default: '' },
    endAt: { type: Date, default: '' },
  })

  return mongoose.model('AppInfo', AppInfoSchema)
}