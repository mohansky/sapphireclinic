import Image from "next/image";
import Link from "next/link";
import ButtonSmall from "@ui/button-small";

export default function TreatmentCard({ post }) {
  return (
    <>
      <div className="md:px-2 lg:px-4  md:w-1/2 lg:w-2/6 xl:w-1/4 mb-8">
        <div className="bg-white shadow-sm hover:shadow-md">
          <div>
            <Image
              src={post.frontmatter.img}
              alt={post.frontmatter.title}
              className="mx-auto"
              width={360}
              height={240}
            />
          </div>

          <div className="p-4">
            <h4 className="text-xl font-bold line-clamp-1 mt-4">
              {post.frontmatter.title}
            </h4>
            <p className="mt-1 indent-1 text-left md:line-clamp-2 lg:line-clamp-3">
              {post.frontmatter.description}
            </p>
            <Link href={`/treatments/${post.slug}`} className="block mt-4">
              <ButtonSmall className="mx-auto">Read More</ButtonSmall>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
