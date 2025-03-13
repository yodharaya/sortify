import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  title: string;
}

export default function TitledSection({ children, title }: Props) {
  return (
    <section className={twMerge("flex flex-col gap-y-3")}>
      <h2 className={twMerge("font-semibold tracking-wide text-shade-black")}>{title}</h2>
      {children}
    </section>
  );
}
