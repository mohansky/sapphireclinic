import TreatmentTitle from "@display/treatment-title";

export default function TreatmentTitleList({ posts }) {
  return (
    <>
      <h2 className="text-3xl leading-tight font-bold mb-8">
        Explore All Procedures
      </h2>
      <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-1">
        {posts.map((post, index) => (
          <TreatmentTitle classname="bg-blue-200" key={index} post={post} />
        ))}
      </ul>
    </>
  );
}
