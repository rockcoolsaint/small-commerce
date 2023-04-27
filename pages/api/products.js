import { initMongoose } from "@/lib/mongoose"
import Product from "@/models/Product";

export async function findAllProducts() {
  return Product.find().exec();
}

const handle = async (req, res) => {
  await initMongoose();
  const {ids} = req.query;
  if(ids) {
    const idsArray = ids.split(',');
    res.json(
      await Product.find({'_id': {$in: idsArray}}).exec()
    );
  }
  res.json( await findAllProducts() );
}

export default handle;