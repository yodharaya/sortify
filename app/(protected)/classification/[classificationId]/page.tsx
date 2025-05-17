import Image from "next/image";
import { getClassificationById } from "@/helpers/classification";

interface PageProps {
  params: Promise<{
    classificationId: string;
  }>;
}

export default async function ClassificationPage({ params }: PageProps) {
  const { classificationId } = await params;

  const { binImage, category } = await getClassificationById(classificationId);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 px-[48px] py-6 gap-[12px]">
      <div className="w-full flex justify-center">
        <Image
          src="/all-page/logo.svg"
          alt="Sortify Logo"
          width={120}
          height={36}
          className="aspect-auto w-[120px] h-[36px] object-cover"
        />
      </div>
      <p className="w-full text-left font-bold p-[12px]">
        Here Your Sort Classification
      </p>
      <div className="bg-white w-full rounded-[12px] p-[24px] flex flex-col gap-[24px] aspect-[3/4] justify-between">
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[12px]">
            <p className="font-bold">Classification Result</p>
            <p>{category}</p>
          </div>
        </div>
        <div className="w-full flex justify-center">
          <Image src={binImage} width={200} height={200} alt={category} />
        </div>
      </div>
    </div>
  );
}
