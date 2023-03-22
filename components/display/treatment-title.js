import Link from "next/link";
export default function TreatmentTitle({ post }) {
  return (
    <>
      <Link href={`/treatments/${post.slug}`}>
        <li className="mb-2 sc-link">{post.frontmatter.title}</li>
      </Link>
    </>
  );
}
