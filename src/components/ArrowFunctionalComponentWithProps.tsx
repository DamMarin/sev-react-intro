type Props = {
  title: string;
}

const ArrowFunctionalComponentWithProps = ({ title }: Props) => {
  return <h1>{title}</h1>
};

export default ArrowFunctionalComponentWithProps;