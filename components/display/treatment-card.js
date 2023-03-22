import Image from "next/image";
import Link from "next/link";
import ButtonSmall from "@ui/button-small";

export default function TreatmentCard({ post }) {
  return (
    <>
      <div className="md:px-2 lg:px-4  md:w-1/2 lg:w-2/6 xl:w-1/4 mb-8"> 
        <div className="bg-white rounded-lg border border-gray-300 p-4 shadow-md hover:shadow-lg">
          <Image
            src={post.frontmatter.icon}
            alt={post.frontmatter.title}
            className="w-20 mx-auto"
            width={100}
            height={100}
          />

          <h4 className="text-xl font-bold line-clamp-1 mt-4">{post.frontmatter.title}</h4>
          <p className="mt-1 text-sm indent-1 text-left md:line-clamp-2 lg:line-clamp-3">{post.frontmatter.description}</p>
          <Link href={`/treatments/${post.slug}`} className="block mt-4">
            <ButtonSmall>
            Read More
            </ButtonSmall>

          </Link>
        </div>
      </div>
    </>
  );
}
