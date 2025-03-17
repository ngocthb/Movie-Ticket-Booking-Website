const VoucherDetailPage = () => {
  // Fake data (có thể thay bằng API)
  const voucher = {
    image:
      "https://i.pinimg.com/736x/72/8d/b7/728db7ceee8a7b232dc9e558943fabe9.jpg",
    title: "Super Discount Voucher",
    description:
      "Giảm giá 30% cho tất cả các đơn hàng trên 500k! Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque culpa eligendi necessitatibus esse commodi excepturi quaerat modi similique accusantium. Exercitationem rem facere voluptatibus officia, repellendus maiores totam necessitatibus voluptas dolore.",
    discount: "30%",
    validFrom: "2025-03-01",
    validTo: "2025-03-15",
  };

  return (
    <div>
      <div className="relative w-full">
        <img
          src={voucher.image}
          className="w-full h-full object-cover shadow-lg transition duration-300"
          alt="banner"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute inset-0 bg-black/80">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 bg-neutral-950 bg-opacity-90 rounded-2xl p-6 md:p-10 shadow-lg text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <img
                  src={voucher.image}
                  alt="voucher"
                  className="w-full h-auto"
                />
              </div>

              <div>
                <h1 className="text-3xl font-bold pb-4 uppercase mb-5 border-b-2 border-red-500">
                  {voucher.title}
                </h1>
                <p className="text-lg text-gray-300">{voucher.description}</p>
                <div className="mt-4">
                  <span className="text-xl font-semibold text-red-500">
                    Discount: {voucher.discount}
                  </span>
                  <p className="text-base mt-1 text-gray-400">
                    EXP: {voucher.validFrom} - {voucher.validTo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherDetailPage;
