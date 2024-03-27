import selfImg from "../../assets/selfimg.JPG";

export default function Profile() {
  return (
    <>
      <div>
        <img
          className="rounded-full h-32 w-32 border-4 mt-8"
          src={selfImg}
          alt="self-img"
        />
      </div>
      <p className="text-4xl font-bold mt-5">Saloni Subedi</p>
      <p className="text-md text-white mt-2 text-opacity-80">
        Full-Stack Developer
      </p>
      <hr className="w-[21rem] h-0.5 border-0 rounded md:my-5 bg-white opacity-20"></hr>
    </>
  );
}
