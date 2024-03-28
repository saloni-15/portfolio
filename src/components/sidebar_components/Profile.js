import selfImg from "../../assets/selfimg.JPG";

export default function Profile() {
  return (
    <>
      <div>
        <img
          className="rounded-full h-32 w-32 border-[3.5px] mt-10"
          src={selfImg}
          alt="self-img"
        />
      </div>
      <p className="text-3xl font-bold mt-4">Saloni Subedi</p>
      <p className="text-sm text-white mt-2 text-opacity-80">
        Full-Stack Developer
      </p>
      <hr className="w-[18rem] h-0.5 border-[1px] rounded md:my-5 bg-white opacity-20"></hr>
    </>
  );
}
