
interface Props {
  params: {
    id: string;
  };
}

export default function Categoty({ params }: Props) {
  const { id } = params;

   return <>category {id} </>;
}
