type Props = {
  params: {
    id: string;
  };
};

function Page({ params }: Props) {
  return <div>ID do evento: {params.id}</div>;
}

export default Page;
