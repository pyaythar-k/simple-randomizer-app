export default function Answer({ answer }) {
  return (
    <>
      {answer && (
        <span className="text-lg">
          Your random answer is{' '}
          <span className="text-bold text-black underline">{answer}</span>.
        </span>
      )}
    </>
  );
}
