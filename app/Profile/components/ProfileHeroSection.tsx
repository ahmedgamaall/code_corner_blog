import Image from "next/image";

export default function ProfileHeroSection() {
  return (
    <div
      className="w-full mb-2 pt-16 flex flex-col space-y-4 px-72 justify-evenly items-center py-8"
      style={{ backgroundColor: "#B3CFE1" }}
    >
      <Image
        className="block rounded-full mx-auto h-36 w-36 object-cover"
        src="/Ahmed.jpg"
        width={400}
        height={400}
        alt="user image"
      />
      <h1 className="font-black text-3xl" style={{ color: "#172B4D" }}>
        Ahmed Gamal
      </h1>
      <p className="text-xl text-center" style={{ color: "#172B4D" }}>
        Where dreams turn into codes
      </p>
      <div className="flex flex-row space-x-4">
        <p className="text-lg text-center" style={{ color: "#172B4D" }}>
          Job Title :
        </p>
        <h5
          className="text-lg font-bold text-center"
          style={{ color: "#172B4D" }}
        >
          Front-end Specialists
        </h5>
      </div>
    </div>
  );
}
