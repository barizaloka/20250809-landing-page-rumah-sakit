function Testimonials() {
  const testimonialsList = [
    { quote: 'Pelayanan sangat ramah dan profesional. Sangat direkomendasikan!', name: 'Budi Santoso' },
    { quote: 'Dokter dan perawatnya sangat perhatian. Saya merasa nyaman selama perawatan.', name: 'Siti Rahayu' },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Apa Kata Pasien Kami</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {testimonialsList.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600">
            <p className="text-lg italic text-gray-700 mb-4">"{testimonial.quote}"</p>
            <p className="font-semibold text-right">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;