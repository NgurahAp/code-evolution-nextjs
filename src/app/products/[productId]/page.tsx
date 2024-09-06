export default function ProductDetail({
  params,
}: {
  params: {
    productId: string;
  };
}) {
  return <h1>Detail Product Page {params.productId}</h1>;
}
