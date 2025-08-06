export default function EmergencyContact() {
  return (
    <section className="py-6 sm:py-8 bg-red-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">🚨 Emergency Contact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <div className="text-base sm:text-lg font-semibold">Emergency Number</div>
            <div className="text-lg sm:text-xl">022-61305005 / 35475757</div>
          </div>
          <div>
            <div className="text-base sm:text-lg font-semibold">Toll Free</div>
            <div className="text-lg sm:text-xl">1-800-221-166</div>
          </div>
          <div>
            <div className="text-base sm:text-lg font-semibold">WhatsApp</div>
            <div className="text-lg sm:text-xl">+91-9137943057</div>
          </div>
        </div>
      </div>
    </section>
  );
} 