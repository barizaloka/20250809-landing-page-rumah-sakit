function Services() {
  const servicesList = [
    { title: 'Unit Gawat Darurat', description: 'Pelayanan darurat 24 jam dengan tim medis terlatih.' },
    { title: 'Poli Spesialis', description: 'Konsultasi dan perawatan dari berbagai dokter spesialis.' },
    { title: 'Rawat Inap', description: 'Fasilitas kamar yang nyaman dengan perawatan intensif.' },
    { title: 'Laboratorium', description: 'Pemeriksaan lengkap dengan teknologi diagnostik canggih.' },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">Layanan Kami</h2>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {servicesList.map((service, index) => (
          <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;