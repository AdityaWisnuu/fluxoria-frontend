"use client";

import dynamic from "next/dynamic";

interface SpotPageProps {
  params: Promise<{
    id: string;
  }>;
}

const SpotPage = dynamic(() => import("@/features/spot/components/SpotPage"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
    </div>
  ),
});

export default async function Spot({ params }: SpotPageProps) {
  const { id } = await params;

  return (
    <div>
      <SpotPage id={id} />
    </div>
  );
}
