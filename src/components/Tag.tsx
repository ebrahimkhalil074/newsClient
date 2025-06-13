
const Tag = ({tag}:{tag:string}) => {
  return (
    <div>
      <div className="bg-red-600 inline-block text-white px-2 py-1 text-sm font-semibold">{tag}</div>
      <div className="border-t-2 border-red-600 " />
    </div>
  );
};

export default Tag;