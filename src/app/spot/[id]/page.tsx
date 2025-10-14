import SpotPage from "@/features/spot/components/SpotPage";

interface SpotPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Spot({ params }: SpotPageProps) {
  const { id } = await params;

  return (
    <div>
      <SpotPage id={id} />
    </div>
  );
}
