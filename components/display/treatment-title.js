export default function TreatmentTitle({ post }) {
  return (
    <>
      <li className="mb-2">
         {post.frontmatter.title} 
      </li>
    </>
  );
}
