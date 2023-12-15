type Props = {
  params: {
    id: string;
  };
};

function Page({ params }: Props) {
  return (
    <main className="text-center mx-auto max-w-lg p-5">
      <header>
        <h2 className="text-2xl text-yellow-400">Amigo Secreto</h2>
        <h1 className="text-3xl mt-5 mb-2">** Título do evento **</h1>
        <p className="text-sm mb-5">** Descrição do evento **</p>
      </header>

      <footer className="mt-5 text-sm">Criado por Thiago Cordeiro</footer>
    </main>
  );
}

export default Page;
