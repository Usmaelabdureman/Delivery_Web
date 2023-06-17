import { SignIn } from '@clerk/nextjs/app-beta';

const Page = async ({ searchParams }) => {
  const { redirectUrl } = searchParams;

  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <SignIn
            path="/sign-in"
            routing="path"
            redirectUrl={redirectUrl || '/'}
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
