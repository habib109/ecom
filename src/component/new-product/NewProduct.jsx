import React from "react";
import { Container } from "../../layout/Container";
import Product from "../../layout/Product";

const NewProduct = () => {
  return (
    <section className="py-16 bg-[#edede9]">
      <Container>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">
            New Products
          </h2>

          <button className="border px-5 py-2 rounded-full">
            View All
          </button>
        </div>

        <Product />
      </Container>
    </section>
  );
};

export default NewProduct;