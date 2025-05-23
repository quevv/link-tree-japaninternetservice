import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2  items-center">
        <Image
          className="rounded-full"
          src="/images/JapanInternet5GLogo.png"
          alt="Japan Internet 5G Logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex flex-col items-center">
          <h1 className="font-bold ">Japan Internet 5G</h1>
          <p>Provide internet service in Japan</p>
          <i>Pocket WIFI - Data SIM cards</i>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <div className="flex flex-col items-center gap-4 text-black font-bold">
            <a
              className="rounded-md flex link-button gap-20 items-center bg-white  hover:bg-[#383838] w-[20rem]"
              href="https://m.me/103997312374010"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                // className="dark:invert"
                src="/images/2023_Facebook_icon.png"
                alt="Vercel logomark"
                width={50}
                height={50}
              />
              <p className="flex flex-col justify-center">
                Facebook
              </p>
            </a>
            <a
              className="rounded-md flex link-button gap-20 items-center bg-white hover:bg-[#383838] w-[20rem]"
              href="https://www.tiktok.com/@japaninternetservices?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="rounded-full aspect-square object-cover"
                src="/images/tiktok-logo.png"
                alt="Vercel logomark"
                width={50}
                height={50}
              />
              <p className="flex flex-col justify-center">
                Tiktok
              </p>
            </a>
            <a
              className="rounded-md flex link-button gap-20 items-center bg-white hover:bg-[#383838] w-[20rem]"
              href="https://wa.me/84962371064"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                // className="dark:invert"
                src="/images/whatsapp-icon-2040x2048-8b5th74o.png"
                alt="Vercel logomark"
                width={50}
                height={50}
              />
              <p className="flex flex-col justify-center">
                WhatsApp
              </p>
            </a>
          </div>
        </div>

        <div className="text-black services-picture flex flex-col gap-8 mt-10">
          {/* Pocket WiFi Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:bg-gray-100 transition duration-300 text-center">
            <h2 className="text-xl font-bold mb-2">Pocket WiFi</h2>
            <p className="text-gray-600 mb-4">Portable, high-speed internet on the go</p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                "/images/services/galaxy.jpg",
                "/images/services/pocket1.png",
                "/images/services/pocket4.JPG",
                "/images/services/pocket3.png",
              ].map((src, index) => (
                <div key={index} className="w-[8rem] h-[5rem] overflow-hidden rounded-lg mx-auto">
                  <Image
                    src={src}
                    alt={`Pocket WiFi ${index + 1}`}
                    width={150}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Data SIM Cards Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:bg-gray-100 transition duration-300 text-center">
            <h2 className="text-xl font-bold mb-2">Data SIM Cards</h2>
            <p className="text-gray-600 mb-4">Flexible SIM options for all phone types</p>

            <div className="grid grid-cols-2 gap-4 mt-4">
              {[
                "/images/services/SIM-card.PNG",
                "/images/services/SIM1.png",
                "/images/services/SIM2.JPG",
                "/images/services/SIM3.JPG",
              ].map((src, index) => (
                <div key={index} className="w-[8rem] h-[5rem] overflow-hidden rounded-lg mx-auto">
                  <Image
                    src={src}
                    alt={`SIM Card ${index + 1}`}
                    width={150}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}
