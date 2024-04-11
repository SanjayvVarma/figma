import { Image } from "@nextui-org/react";
import LoaderImg from '../../assets/loader.gif'

const Loader = () => (
  <div className="flex h-screen w-screen flex-col items-center justify-center gap-2">
    <Image
      src={LoaderImg}
      alt="loader"
      width={100}
      height={100}
      className="object-contain"
    />
    <p className="text-sm font-bold text-primary-grey-300">Loading...</p>
  </div>
);

export default Loader;