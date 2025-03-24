import CopyButton from "./copy-button";

type CardGridRendererProps = {
    name: string;
    code: string;
    component: React.FC;
}

export default function CardGridRenderer({ name, code, component: Card }: CardGridRendererProps) {
  return (
    <div
      className="h-72 flex items-center justify-center relative border rounded-xl border-gray-200"
    >
      <div className="absolute w-full top-3 flex justify-between px-3">
        <div className="text-xs text-gray-500 capitalize">{name}</div>
        <CopyButton code={code} />
      </div>
      <Card />
    </div>
  );
}
