import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Button = ({ title, link }: { title: string; link: string }) => {
  const router = useRouter();

  return (
    <Link
      href={link}
      className={clsx(
        "flex h-14 w-[90px] items-center justify-center rounded-xl text-[15px] leading-9 tracking-[0.75px] active:bg-gray-200",
        router.pathname === link
          ? "bg-[#5D28F2]/[12%] text-[#5D28F2]"
          : " font-semibold text-[#404E71]"
      )}
    >
      {title}
    </Link>
  );
};

export const Header = () => {
  return (
    <div className="relative flex h-auto w-full flex-col items-center justify-center">
      <div className="h-[120px] w-full" />
      <div className="fixed top-0 flex w-full items-center justify-between p-8">
        <Link href="/">
          <Image
            src="/AlocadosLogo.png"
            width={168}
            height={40}
            alt="알로카도스 로고"
          />
        </Link>
        <div className="flex w-fit justify-between space-x-6">
          <Button link="/" title="환전하기" />
          <Button link="/exchange-log" title="거래내역" />
        </div>
      </div>
    </div>
  );
};

export default Header;
