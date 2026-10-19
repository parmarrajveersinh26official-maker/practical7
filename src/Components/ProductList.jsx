function ProductList() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 25000,
      category: "Electronics",
    },
    {
      id: 3,
      name: "Headphones",
      price: 2500,
      category: "Accessories",
    },
    {
      id: 4,
      name: "Keyboard",
      price: 1500,
      category: "Accessories",
    },
  ];

  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-linear-to-br from-slate-100 via-blue-50 to-purple-100 px-4 py-4">

      {/* ================= BACKGROUND ================= */}

      <div className="pointer-events-none fixed inset-0 overflow-hidden">

        {/* Glow circles */}

        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />

        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />

        <div className="absolute -bottom-25 left-[25%] h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="absolute -bottom-25 right-[15%] h-64 w-64 rounded-full bg-pink-400/15 blur-3xl" />


        {/* Floating shopping symbols */}

        <div className="absolute left-[7%] top-[15%] rotate-12 text-6xl font-bold text-blue-500/15">
          $
        </div>

        <div className="absolute right-[8%] top-[18%] -rotate-12 text-7xl font-bold text-purple-500/15">
          ₹
        </div>

        <div className="absolute left-[10%] bottom-[15%] -rotate-12 text-6xl font-bold text-cyan-500/15">
          %
        </div>

        <div className="absolute right-[10%] bottom-[16%] rotate-12 text-6xl font-bold text-pink-500/15">
          ★
        </div>


        {/* Small circles */}

        <div className="absolute left-[20%] top-[12%] h-5 w-5 rounded-full border-2 border-blue-500/20" />

        <div className="absolute right-[22%] top-[10%] h-7 w-7 rounded-full border-2 border-purple-500/20" />

        <div className="absolute left-[22%] bottom-[13%] h-6 w-6 rounded-full border-2 border-cyan-500/20" />

        <div className="absolute right-[25%] bottom-[12%] h-5 w-5 rounded-full border-2 border-pink-500/20" />


        {/* Decorative stars */}

        <div className="absolute left-[15%] top-[30%] text-xl text-blue-500/20">
          ✦
        </div>

        <div className="absolute right-[15%] top-[32%] text-2xl text-purple-500/20">
          ✦
        </div>

        <div className="absolute left-[16%] bottom-[30%] text-xl text-cyan-500/20">
          ✧
        </div>

        <div className="absolute right-[17%] bottom-[28%] text-xl text-pink-500/20">
          ✦
        </div>

      </div>


      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 w-full max-w-6xl">

        {/* Main glass container */}

        <div className="rounded-3xl border border-white/70 bg-white/55 p-4 shadow-2xl backdrop-blur-xl sm:p-5">


          {/* ================= HEADER ================= */}

          <div className="mb-4 flex items-center justify-between rounded-2xl bg-white/90 px-5 py-3 shadow-md">

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-blue-500">
                Modern Store
              </p>

              <h1 className="mt-0.5 text-2xl font-extrabold text-slate-800 sm:text-3xl">
                Product List
              </h1>
            </div>

            {/* Product count */}

            <div className="flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5">

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-cyan-400 text-xs font-bold text-white">
                {products.length}
              </span>

              <span className="hidden text-xs font-semibold text-slate-600 sm:block">
                Products
              </span>

            </div>

          </div>


          {/* ================= PRODUCTS ================= */}

          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">

            {products.map((product, index) => (

              <div
                key={product.id}
                className="group rounded-2xl border border-white/80 bg-white/90 p-3 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-4"
              >

                {/* Product Icon */}

                <div
                  className={`mb-3 flex h-24 items-center justify-center rounded-xl transition duration-300 group-hover:scale-[1.03] ${
                    index === 0
                      ? "bg-linear-to-br from-blue-100 to-cyan-100"
                      : index === 1
                      ? "bg-linear-to-br from-purple-100 to-blue-100"
                      : index === 2
                      ? "bg-linear-to-br from-pink-100 to-purple-100"
                      : "bg-linear-to-br from-cyan-100 to-blue-100"
                  }`}
                >

                  <span className="text-4xl transition duration-300 group-hover:scale-110">

                    {index === 0 && "💻"}
                    {index === 1 && "📱"}
                    {index === 2 && "🎧"}
                    {index === 3 && "⌨️"}

                  </span>

                </div>


                {/* Category */}

                <span
                  className={`inline-block rounded-full px-2 py-1 text-[9px] font-bold uppercase tracking-wide ${
                    product.category === "Electronics"
                      ? "bg-blue-50 text-blue-600"
                      : "bg-purple-50 text-purple-600"
                  }`}
                >
                  {product.category}
                </span>


                {/* Product Name */}

                <h2 className="mt-2 text-base font-bold text-slate-800 sm:text-lg">
                  {product.name}
                </h2>


                {/* Price */}

                <div className="mt-2 flex items-end justify-between">

                  <div>

                    <p className="text-[9px] font-medium uppercase tracking-wide text-slate-400">
                      Price
                    </p>

                    <p className="text-lg font-extrabold text-blue-600 sm:text-xl">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>

                  </div>

                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-sm transition group-hover:bg-blue-500 group-hover:text-white">
                    →
                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* ================= FOOTER ================= */}

          <div className="mt-3 flex items-center justify-center gap-4 text-[9px] font-medium text-slate-500 sm:text-xs">

            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Electronics
            </span>

            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
              Accessories
            </span>

            <span className="hidden items-center gap-1 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              {products.length} Items
            </span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductList;