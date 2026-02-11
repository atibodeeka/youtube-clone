interface PageProps {
  params: Promise<{ videoId: string }>;
}

const Page = async ({ params }: PageProps) => {
  console.log("[server]");
  const { videoId } = await params;
  return <div>VideoId: {videoId}</div>;
};

export default Page;
