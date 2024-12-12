import ProductCard from "./ProductCard";
import Link from "next/link";

const NewArrivalsSection = () => {
  return (
    <section className="w-full py-12 ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* New Arrival Product 1 */}
          <ProductCard
            name="T-SHIRT WITH TAPE DETAILS"
            title="New Product 1"
            description="T-SHIRT WITH TAPE DETAILS"
            price="$45"
            rating={4} // Rating is 4 stars
            score="4.5/5"
            imageUrl="/arrivals/Frame1.png"
            link="/product/new1"
          />

          {/* New Arrival Product 2 */}
          <ProductCard
            name="T-SHIRT WITH TAPE DETAILS"
            title="New Product 2"
            description="Stylish and comfortable for everyday wear."
            price="$60"
            oldPrice="$150"
            discount="-30%"
            rating={5} // Rating is 5 stars
            score="4.5/5"
            imageUrl="/arrivals/Frame33.png"
            link="/product/new2"
          />

          {/* Add more products here */}

          <ProductCard
            name="T-SHIRT WITH TAPE DETAILS"
            title="Top Selling Product 3"
            description="Top rated and highly recommended."
            price="$100"
            rating={5}
            score="4.5/5"
            imageUrl="/arrivals/Frame 34.png"
            link="/product/top-selling3"
          />
          <ProductCard
            name="T-SHIRT WITH TAPE DETAILS"
            title="Top Selling Product 4"
            description="Perfect for all seasons, multi-purpose."
            price="$80"
            oldPrice="$150"
            discount="-30%"
            rating={4}
            score="4.5/5"
            imageUrl="/arrivals/Frame 38.png"
            link="/product/top-selling4"
          />
        </div>

        <button className="w-[218px] h-[52px] px-6 py-3 bg-maintext text-primary font-medium rounded-full border mx-auto block mt-8">
          <Link href="/sale">View All</Link>
        </button>
      </div>
    </section>
  );
};

export default NewArrivalsSection;
