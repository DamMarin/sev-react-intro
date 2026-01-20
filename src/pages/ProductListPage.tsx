import {useEffect, useState} from "react";
import {deleteProduct, getProducts} from "@/api/products.ts";
import type {Product} from "@/schemas/products.ts";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {useNavigate} from "react-router";
import {Button} from "@/components/ui/button.tsx";
import {Pencil, Trash2} from "lucide-react";

const ProductListPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    deleteProduct(id);
  }

  useEffect(() => {
    getProducts()
      .then((data) => setProducts(data))
      .finally(() => setLoading(false));
    // console.log(products);
  }, []);

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <>
      <div className="p-8">
        <h1 className="text-2xl font-bold pb-4">Products</h1>
      <Table>
        <TableCaption>A list of your products.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>#</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell className="text-right space-x-2">
                <Button
                  variant="outline"
                  onClick={() => navigate(`/products/${product.id}`)}
                  >
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => handleDelete(product.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
    </>
  )
}

export default ProductListPage;