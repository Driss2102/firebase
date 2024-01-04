const Product = require("../models/productModel");


exports.createProduct = async (req, res) => {
    const { title, formattedDate } = req.productDetails;
  
    try {
      const product = await Product.create({ title });
  
      const productId = product._id;
  
      const imageCoverUrl = await uploadFileToStorage(
        req.files.imageCover[0],
        `products/${productId}/${req.files.imageCover[0].originalname}--${formattedDate}`
      );
  
      const imagesUrls = await Promise.all(
        req.files.images.map(async (file) =>
          uploadFileToStorage(
            file,
            `products/${productId}/listImages/${file.originalname}--${formattedDate}`
          )
        )
      );
  
      product.imageCover = imageCoverUrl;
      product.images = imagesUrls;
  
      await product.save();
  
      res.status(201).json({ message: "Product created successfully", data: product });
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };