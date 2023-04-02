import Link from "next/link";
export default function TreatmentTitle({ post }) {
  return (
    <>
      <li className="mb-2 sc-link">
        <Link
          href={`/treatments/${post.slug}`}
          title={post.frontmatter.description}
        >
          {post.frontmatter.title}
        </Link>
      </li>
    </>
  );
}
