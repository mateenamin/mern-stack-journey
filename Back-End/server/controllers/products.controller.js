






const getAllProducts = async (req, res) => {
    try {
        const Products = await ProductService.getAllProducts();
        
        res.status(200).json(new ApiResponse(200, Products, "Products fetched successfully"));
    } catch (error) {
        res.status(500).json(new ApiResponse(500, null, error.message));
    }
};


export default {getAllProducts}