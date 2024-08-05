import Title from './components/title';
import Container from './container';

export default function Home() {
  return (
    <div className="flex flex-col w-full lg:w-3/6 items-center min-h-screen justify-center mx-auto bg-pink-400 gap-10">
      <Title />
      <Container />
    </div>
  );
}
