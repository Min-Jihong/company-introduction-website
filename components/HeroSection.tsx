import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container px-4 md:px-6 text-center">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
            혁신적인 솔루션으로 미래를 선도합니다
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
            저희 회사는 고객의 성공을 위한 최적의 기술과 서비스를 제공하며, 끊임없이 도전하고 성장합니다.
          </p>
          <div className="space-x-4 pt-4">
            <Button asChild className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="#services">서비스 알아보기</Link>
            </Button>
            <Button variant="outline" asChild className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="#contact">문의하기</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
