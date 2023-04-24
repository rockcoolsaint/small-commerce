import { initMongoose } from "@/lib/mongoose"
import Product from "@/models/Product";

export async function findAllProducts() {
  return Product.find().exec();
}

const handle = async (req, res) => {
  await initMongoose();
  res.json( await findAllProducts() );
}

export default handle;