const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
    {
        product_name : {
            type : String,
            trim : true,
        },
        product_description : {
            type : String,
            trim : true,
        },
        product_image: {
            type: String,
            trim: true,
        },
        is_active : {
            type : Boolean,
            default : true,
        },
    },
    {
        timestamps: true,
        versionkey: false,
        toJSON: {
            transform: function (doc, data) {
              if (data?.product_image) {
                data.product_image = `${config.base_url}product_images/${data.product_image}`;
              }
            },
          },
    }
);

const Product = mongoose.model("Product" , productSchema);
module.exports = Product;