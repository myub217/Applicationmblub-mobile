const path = require('path');

module.exports = {
  mode: 'production', // หรือ 'development' ขณะพัฒนา
  entry: './js/app.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/app.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // สำหรับ import CSS ถ้ามี
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource', // รองรับไฟล์ภาพ
        generator: {
          filename: 'img/[name][ext]',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};