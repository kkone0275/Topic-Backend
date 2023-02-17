import { Schema, model, ObjectId } from 'mongoose'

// const userSchema = new Schema({
//   u_id: {
//     type: ObjectId,
//     ref: 'users',
//     required: [true, '缺少使用者']
//   }
// })

const schema = new Schema({
  name: {
    type: String,
    required: [true, '缺少名稱']
  },
  price: {
    type: Number,
    min: [0, '價格錯誤'],
    required: [true, '缺少價格']
  },
  description: {
    type: String,
    required: [true, '缺少說明']
  },
  image: {
    type: String,
    required: [true, '缺少圖片']
  },
  images: {
    type: [String],
    default: []
  },
  sell: {
    type: Boolean,
    default: true
  },
  category: {
    type: String,
    required: [true, '缺少分類'],
    enum: {
      values: ['台北市', '新北市', '新竹市', '台中市', '雲林縣', '台中市'],
      message: '分類錯誤'
    }
  },
  u_id: {
    type: ObjectId,
    ref: 'users'
  }
}, { versionKey: false })

export default model('products', schema)
