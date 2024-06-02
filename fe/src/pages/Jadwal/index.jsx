import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// import FeatJadwal from "../../features/Jadwal";

import { useEffect, useState } from "react";

// Mock data, replace this with actual API call in real scenario
const mockSchedules = [
  {
    day: "Monday - Friday",
    times: ["13:00 - 15:00", "16:00 - 18:00", "19:00-23:00"],
    prices: [
      [
        "Rp. 75,000",
        "Rp. 100,000",
        "Rp. 50,000",
        "Rp. 75,000",
        "Rp. 75,000",
        "Rp. 100,000",
      ],
      [
        "Rp. 125,000",
        "Rp. 150,000",
        "Rp. 125,000",
        "Rp. 150,000",
        "Rp. 125,000",
        "Rp. 150,000",
      ],
      [
        "Rp. 200,000",
        "Rp. 225,000",
        "Rp. 175,000",
        "Rp. 200,000",
        "Rp. 175,000",
        "Rp. 200,000",
      ],
    ],
  },
  {
    day: "Saturday",
    times: ["08:00 - 15:00", "16:00 - 18:00", "19:00-23:00"],
    prices: [
      [
        "Rp. 100,000",
        "Rp. 125,000",
        "Rp. 100,000",
        "Rp. 125,000",
        "Rp. 100,000",
        "Rp. 125,000",
      ],
      [
        "Rp. 125,000",
        "Rp. 150,000",
        "Rp. 125,000",
        "Rp. 150,000",
        "Rp. 125,000",
        "Rp. 150,000",
      ],
      [
        "Rp. 200,000",
        "Rp. 225,000",
        "Rp. 175,000",
        "Rp. 200,000",
        "Rp. 175,000",
        "Rp. 200,000",
      ],
    ],
  },
  {
    day: "Sunday",
    times: ["08:00 - 15:00", "16:00 - 18:00", "19:00-23:00"],
    prices: [
      [
        "Rp. 100,000",
        "Rp. 125,000",
        "Rp. 100,000",
        "Rp. 125,000",
        "Rp. 100,000",
        "Rp. 125,000",
      ],
      [
        "Rp. 125,000",
        "Rp. 150,000",
        "Rp. 125,000",
        "Rp. 150,000",
        "Rp. 125,000",
        "Rp. 150,000",
      ],
      [
        "Rp. 200,000",
        "Rp. 225,000",
        "Rp. 175,000",
        "Rp. 200,000",
        "Rp. 175,000",
        "Rp. 200,000",
      ],
    ],
  },
];

const Jadwal = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setSchedules(mockSchedules);
    }, 1000);
  }, []);

  return (
    <>
    <Navbar />
    <div className="overflow-x-auto mx-auto my-8 p-4">
      <h2 className="text-2xl text-center font-bold mb-8">
        Jadwal dan Harga Lapangan Futsal
      </h2>
      <table className="min-w-full bg-white border-collapse border border-black">
        <thead>
          <tr className="bg-gray-200 border border-black text-center">
            <th className="py-2 px-4 border border-black" rowSpan={2}>
              HARI
            </th>{" "}
            {/* Add rowSpan attribute */}
            <th className="py-2 px-4 border border-black" rowSpan={2}>
              JAM
            </th>{" "}
            {/* Add rowSpan attribute */}
            <th className="py-2 px-4 border border-black" colSpan="2">
              Harga Lapangan Reguler
            </th>
            <th className="py-2 px-4 border border-black" colSpan="2">
              Harga Lapangan Member
            </th>
            <th className="py-2 px-4 border border-black" colSpan="2">
              Harga Lapangan Turnamen
            </th>
          </tr>
          <tr className="bg-gray-200 border border-black text-center">
            <th className="py-2 px-4 border border-black">Lapangan 1&2</th>
            <th className="py-2 px-4 border border-black">Lapangan 3</th>
            <th className="py-2 px-4 border border-black">Lapangan 1&2</th>
            <th className="py-2 px-4 border border-black">Lapangan 3</th>
            <th className="py-2 px-4 border border-black">Lapangan 1&2</th>
            <th className="py-2 px-4 border border-black">Lapangan 3</th>
          </tr>
        </thead>

        <tbody>
          {schedules.map((schedule, index) =>
            schedule.times.map((time, timeIndex) => (
              <tr
                key={`${index}-${timeIndex}`}
                className="text-center border border-black"
              >
                {timeIndex === 0 && (
                  <td
                    rowSpan={schedule.times.length}
                    className="py-2 px-4 border border-black"
                  >
                    {schedule.day}
                  </td>
                )}
                <td className="py-2 px-4 border border-black">{time}</td>
                {schedule.prices[timeIndex].map((price, priceIndex) => (
                  <td
                    key={`${index}-${timeIndex}-${priceIndex}`}
                    className="py-2 px-4 border border-black"
                  >
                    {price}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
    <Footer/>
    </>
  );
};

export default Jadwal;