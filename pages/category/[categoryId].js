import Header from '@/components/Header';
import Center from '@/components/Center';
import { mongooseConnect } from '@/lib/mongoose';
import ProductsGrid from '@/components/ProductsGrid';
import Title from '@/components/Title';
import { Category } from '@/models/Category';
import { Product } from '@/models/Product';
import Link from 'next/link';
import styled from 'styled-components';

const CategoryWrapper = styled.div`
  margin-bottom: 30px;
`;

const ViewAllButton = styled.a`
  display: inline-block;
  background-color: #f2f2f2;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: #333;
  cursor: pointer;
`;

export default function CategoryPage({ category, products }) {
  return (
    <>
      <Header />
      <Center>
        <Title>{category.name}</Title>
        <ProductsGrid products={products} />
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();

  const { categoryId } = context.params;

  const category = await Category.findById(categoryId).lean();
  const products = await Product.find({ category: categoryId }).lean();

  return {
    props: {
      category: JSON.parse(JSON.stringify(category)),
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
