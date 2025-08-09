export default function Hero() {
    return (
        <div id="home" className="bg-blue-600 h-screen text-white flex items-center justify-center bg-cover bg-center">
            <div className="bg-black p-8 rounded-lg text-center">
                <h1 className="mb-4 text-5xl font-extrabold leading-tight">Pelayanan Rumah Sakit Sejati</h1>
                <p>Kami hadir 24/7 dengan tenaga medis profesional</p>
                <button className="mt-2 bg-white text-blue-600  p-3  shadow-lg rounded-full hover:bg-blue-100">Buat Janji Tamu</button>
            </div>
        </div>
    );
}