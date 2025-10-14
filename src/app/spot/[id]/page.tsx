import SpotPage from "@/features/spot/components/SpotPage";

interface SpotPageProps {
  params: {
    id: string;
  };
}

export default function Spot({ params }: SpotPageProps) {
  const id = params.id;

  return (
    <div>
      <SpotPage id={id} />
    </div>
  );
}
