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
  background-color: #eef4f0;
  padding: 8px 16px;
  border-radius: 8px;
`;

const ViewAllButton = styled.a`
  display: inline-block;
  background-color: #0d3d29;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  cursor: pointer;
`;

const CategoryW = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MoreProductsIndicator = styled.span`
  color: #0d3d29;
  font-size: 20px;
  font-weight: bold;
`;

export default function ProductsPage({ categories }) {
  return (
    <>
      <Header />
      <Center>
        <Title>All Categories</Title>
        {categories
          .filter((category) => category.products.length > 0)
          .map((category) => (
            <CategoryWrapper key={category._id}>
              <CategoryW>
                <Title>{category.name}</Title>
                <Link href={`/category/${category._id}`}>
                  <ViewAllButton>View All</ViewAllButton>
                </Link>
              </CategoryW>
              <ProductsGrid products={category.products.slice(0, 4)} />
              {category.products.length > 4 && (
                <MoreProductsIndicator>&gt;</MoreProductsIndicator>
              )}
            </CategoryWrapper>
          ))}
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  await mongooseConnect();

  const categories = await Category.find({}, null, {
    sort: { _id: -1 },
  }).lean();
  const populatedCategories = await Promise.all(
    categories.map(async (category) => {
      const products = await Product.find({ category: category._id })
        .sort({ createdAt: -1 })
        .limit(4)
        .lean();
      return { ...category, products };
    })
  );

  return {
    props: {
      categories: JSON.parse(JSON.stringify(populatedCategories)),
    },
  };
}
